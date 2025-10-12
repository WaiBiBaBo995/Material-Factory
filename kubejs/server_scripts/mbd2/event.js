/**
 * 坩埚交互
 * @param {Internal.BlockRightClickedEventJS} event
 * @param {Internal.Block_} crucible
 * @param {Internal.ItemStack_} inputItem
 * @param {Internal.FluidStackJS_} outputFluid
 * @returns
 */
const handleCrucibleInteraction = (event, crucible, inputItem, outputFluid) => {
    const { hand, block, item, player} = event;
    if (hand != 'MAIN_HAND') return;    

    if (block == crucible) {
        const itemCap = block.entity.getCapability(ForgeCapabilities.ITEM_HANDLER).resolve().get();
        const fluidCap = block.entity.getCapability(ForgeCapabilities.FLUID_HANDLER).resolve().get();

        if (item.hasTag(inputItem) && !player.isCrouching()) {
            if (itemCap.getStackInSlot(0).isEmpty() || itemCap.getStackInSlot(0).is(item)) {
                if (itemCap.getStackInSlot(0).count < 64) {
                    itemCap.insertItem(item.withCount(1), false);
                    item.count--;
                }
                player.swing();
                event.cancel();
            }
        }

        if (item.isEmpty() && player.isCrouching()) {
            player.give(itemCap.getStackInSlot(0).withCount(1));
            itemCap.extractItem(0, 1, false);
            player.swing();
        }

        if (item == 'bucket' && fluidCap.getFluidInTank(0).amount >= 1000) {
            fluidCap.drain(Fluid.of(outputFluid), 'execute');
            player.give(Fluid.of(outputFluid).fluid.bucket);
            item.count--;
            player.swing();
        }

        if (item == "woodenbucket:wooden_bucket" && fluidCap.getFluidInTank(0).amount >= 1000) {
            let isEmpty = !item.nbt || !item.nbt.Fluid || item.nbt.Fluid.Amount === 0;
            if (isEmpty) {
                fluidCap.drain(Fluid.of(outputFluid), 'execute');
                item.nbt.merge({Fluid:{Amount:1000,FluidName:`${outputFluid}`}});
                player.swing()
            }
        }
    }
};

BlockEvents.rightClicked((event) => {
    handleCrucibleInteraction(event, 'materialfactory:oak_crucible', 'materialfactory:melting_item', 'water');
});


BlockEvents.rightClicked('materialfactory:unbonded_machine_frame_pity', event => {
    const { hand, block, item, player } = event;
    if (hand !== 'MAIN_HAND') return;

    const fluidCap = block.entity.getCapability(ForgeCapabilities.FLUID_HANDLER).resolve().get();
    if (!fluidCap || fluidCap.getFluidInTank(0).amount > 0) return;

    // 定义所有可识别的乳胶来源
    const latexSources = [
        { id: 'industrialforegoing:latex_bucket', fluid: 'industrialforegoing:latex', returnItem: 'bucket' },
        { id: 'thermal:latex_bucket', fluid: 'thermal:latex', returnItem: 'bucket' },
        { id: 'woodenbucket:wooden_bucket', fluid: 'industrialforegoing:latex', checkNBT: true },
        { id: 'woodenbucket:wooden_bucket', fluid: 'thermal:latex', checkNBT: true },
    ];

    for (const source of latexSources) {
        if (item.id !== source.id) continue;

        // 如果是木桶，则检查 NBT 中的 FluidName
        if (source.checkNBT) {
            const fluidName = item.nbt?.Fluid?.FluidName;
            if (fluidName !== source.fluid) continue;
            item.nbt.remove('Fluid');
        }

        // 填充机器内的流体
        fluidCap.fill(Fluid.of(source.fluid), 'execute');
        player.swing();

        // 返回空桶或减少堆叠
        if (source.returnItem) player.give(source.returnItem);
        item.shrink(1);

        break; // 处理完毕后退出循环
    }
});

//液态魔源提取器
const $SourceUtil = Java.loadClass('com.hollingsworth.arsnouveau.api.util.SourceUtil');
const Direction = Java.loadClass('net.minecraft.core.Direction');
const $EntityFollowProjectile = Java.loadClass('com.hollingsworth.arsnouveau.common.entity.EntityFollowProjectile');
const BlockStateProperties = Java.loadClass('net.minecraft.world.level.block.state.properties.BlockStateProperties');

// 创建全局变量来跟踪上次提取的源位置和粒子生成时间
let lastExtractionIndex = {};
let lastSourceParticleTime = {}; // 魔源粒子时间跟踪
let lastColorParticleTime = {};  // 彩色粒子时间跟踪

MBDMachineEvents.onRecipeWorking('materialfactory:source_fluid_extractor', e => {
    let { machine } = e.getEvent();
    let { recipeLogic, level } = machine;
    
    // 获取机器上方的流体罐
    let tankPos = machine.pos.above();
    let tankBlockEntity = level.getBlockEntity(tankPos);
    
    if (!tankBlockEntity) {
        recipeLogic.setWorkingEnabled(false);
        for (let dir of Direction.values()) {
            machine.setOutputSignal(1, dir);
        }
        return;
    }
    
    let tankCap = tankBlockEntity.getCapability(ForgeCapabilities.FLUID_HANDLER).resolve().get();
    let amount = tankCap.getFluidInTank(0).amount;
    
    // 如果流体已满，停止工作
    if (amount >= 10000) {
        recipeLogic.setWorkingEnabled(false);
        for (let dir of Direction.values()) {
            machine.setOutputSignal(1, dir);
        }
        return;
    }
    
    // 定义需要的魔源量和搜索范围
    const requiredSource = 10;
    const searchRange = 3;
    
    // 获取所有可用的魔源提供者
    const providers = $SourceUtil.canTakeSource(machine.pos, level, searchRange);
    
    // 如果没有提供者，停止工作
    if (providers.isEmpty()) {
        recipeLogic.setWorkingEnabled(false);
        for (let dir of Direction.values()) {
            machine.setOutputSignal(1, dir);
        }
        return;
    }
    
    // 为每个机器创建一个唯一的标识符
    const machineId = machine.pos.toString();
    
    // 初始化或获取上次提取的索引
    if (!lastExtractionIndex[machineId]) {
        lastExtractionIndex[machineId] = 0;
    }
    
    // 初始化或获取上次粒子生成时间
    if (!lastSourceParticleTime[machineId]) {
        lastSourceParticleTime[machineId] = 0;
    }
    if (!lastColorParticleTime[machineId]) {
        lastColorParticleTime[machineId] = 0;
    }
    
    // 尝试从不同的提供者提取魔源
    let extracted = false;
    let attempts = 0;
    
    // 将所有循环内使用的变量全部移到循环外部声明
    let providerIndex;
    let provider;
    let sourceAmount;
    let projectile;
    let machineState;
    let facing;
    let targetPos;
    let particleStarts;
    let colors;
    let i;
    let colorParticle;
    
    while (attempts < providers.size() && !extracted) {
        // 选择下一个提供者（循环选择）- 只赋值，不声明
        providerIndex = lastExtractionIndex[machineId] % providers.size();
        provider = providers.get(providerIndex);
        
        // 检查这个提供者是否有足够的魔源
        sourceAmount = provider.getSource().getSource();
        if (sourceAmount >= requiredSource) {
            // 尝试提取魔源
            provider.getSource().removeSource(requiredSource);
            
            // 生成粒子效果 - 从魔源提供者飞向流体罐（添加时间间隔）
                // 获取当前时间（毫秒）
                const currentTime = Date.now();
                
                // 检查是否已经过了足够的时间（例如500毫秒 = 0.2秒）
                if (currentTime - lastSourceParticleTime[machineId] >= 200) {
                    projectile = new $EntityFollowProjectile(
                        level, 
                        provider.getCurrentPos(),
                        tankPos,
                        175, 127, 255
                    );
                    level.addFreshEntity(projectile);
                    
                    // 更新上次魔源粒子生成时间
                    lastSourceParticleTime[machineId] = currentTime;
                }
            
            extracted = true;
            recipeLogic.setWorkingEnabled(true);
            
            // 更新索引以便下次从不同的提供者提取
            lastExtractionIndex[machineId] = (providerIndex + 1) % providers.size();
            
            // 重置输出信号
            for (let dir of Direction.values()) {
                machine.setOutputSignal(0, dir);
            }
            
            // 生成四种颜色的粒子代码 - 添加时间间隔
                
                // 检查是否已经过了足够的时间（例如1000毫秒 = 1秒）
                if (currentTime - lastColorParticleTime[machineId] >= 1000) {
                    // 更新上次彩色粒子生成时间
                    lastColorParticleTime[machineId] = currentTime;
                    
                    machineState = level.getBlockState(machine.pos);
                    facing = machineState.getValue(BlockStateProperties.HORIZONTAL_FACING);
                    
                    targetPos = machine.pos.above(3);
                    
                    particleStarts = [];
                    
                    switch (facing.toString()) {
                        case "north":
                            particleStarts = [
                                machine.pos.offset(-3, 3, -3),
                                machine.pos.offset(3, 3, -3),
                                machine.pos.offset(-3, 3, 3),
                                machine.pos.offset(3, 3, 3)
                            ];
                            break;
                        case "south":
                            particleStarts = [
                                machine.pos.offset(3, 3, 3),
                                machine.pos.offset(-3, 3, 3),
                                machine.pos.offset(3, 3, -3),
                                machine.pos.offset(-3, 3, -3)
                            ];
                            break;
                        case "east":
                            particleStarts = [
                                machine.pos.offset(3, 3, -3),
                                machine.pos.offset(3, 3, 3),
                                machine.pos.offset(-3, 3, -3),
                                machine.pos.offset(-3, 3, 3)
                            ];
                            break;
                        case "west":
                            particleStarts = [
                                machine.pos.offset(-3, 3, 3),
                                machine.pos.offset(-3, 3, -3),
                                machine.pos.offset(3, 3, 3),
                                machine.pos.offset(3, 3, -3)
                            ];
                            break;
                        default:
                            particleStarts = [
                                machine.pos.offset(-3, 3, -3),
                                machine.pos.offset(3, 3, -3),
                                machine.pos.offset(-3, 3, 3),
                                machine.pos.offset(3, 3, 3)
                            ];
                    }
                    
                    colors = [
                        {name: "紫色", rgb: [175, 127, 255]},
                        {name: "绿色", rgb: [0, 255, 0]},
                        {name: "红色", rgb: [255, 0, 0]},
                        {name: "蓝色", rgb: [0, 0, 255]}
                    ];
                    
                    for (i = 0; i < 4; i++) {
                            colorParticle = new $EntityFollowProjectile(
                                level,
                                particleStarts[i],
                                targetPos,
                                colors[i].rgb[0], colors[i].rgb[1], colors[i].rgb[2]
                            );
                            level.addFreshEntity(colorParticle);
                        }
                }
            
        } else {
            // 这个提供者不够，尝试下一个
            attempts++;
            lastExtractionIndex[machineId] = (providerIndex + 1) % providers.size();
        }
    }
    
    // 如果没有成功提取魔源，停止工作
    if (!extracted) {
        recipeLogic.setWorkingEnabled(false);
        for (let dir of Direction.values()) {
            machine.setOutputSignal(1, dir);
        }
    }
});
MBDMachineEvents.onRightClick('materialfactory:source_fluid_extractor', e => {
    let { machine, player } = e.getEvent();
    let { recipeLogic, level } = machine
    let tank = level.getBlock(machine.pos.above())
    let tankCap = tank.entity.getCapability(ForgeCapabilities.FLUID_HANDLER).resolve().get();
    let amount = tankCap.getFluidInTank(0).amount;
    let now = Date.now()
    if (level.isClientSide()) return;
    let lastClickTime = player.persistentData.contains('machineLastClickTime')
       ? player.persistentData.getLong('machineLastClickTime')
        : 0
    if (now - lastClickTime < 2000) {
        return
    }
    player.persistentData.put('machineLastClickTime', now)
    player.tell(Text.translate("mbd2.source_fluid_extractor.status"))
    player.swing()
    Utils.server.scheduleInTicks(20, ()=> {
        if ($SourceUtil.hasSourceNearby(machine.pos, level, 3, 10) && (amount < 10000)) {
            if(recipeLogic.isIdle() || recipeLogic.isWorking()) {
                player.tell(Text.translate("mbd2.source_fluid_extractor.status.idle"))
            } else if (recipeLogic.isSuspend()) {
                player.tell(Text.translate("mbd2.source_fluid_extractor.status.working"))
                recipeLogic.setWorkingEnabled(true)
                for (let dir of Direction.values()) {
                machine.setOutputSignal(0, dir);
                }
            }
        } else {
            player.tell(Text.translate("mbd2.source_fluid_extractor.status.suspend"))
        }
    })
});
MBDMachineEvents.onRecipeFinish('materialfactory:source_fluid_extractor', e => {
    let { machine } = e.getEvent();
    for (let dir of Direction.values()) {
        machine.setOutputSignal(15, dir);
        }
    Utils.server.scheduleInTicks(10, ()=> {
       for (let dir of Direction.values()) {
        machine.setOutputSignal(0, dir);
        }
    })
});

//未来熵变球形矩阵
MBDMachineEvents.onRecipeWorking('materialfactory:entropy_matrix_core', e => {
    let { machine } = e.getEvent();
    let { level } = machine;
    // 创建全局变量来跟踪上次粒子生成时间
    let lastEntropyParticleTime = {};

    // 手动定义六个方向的偏移量
    const offsets = [
        {x: 0, y: 2, z: 0},   // 上
        {x: 0, y: -2, z: 0},  // 下
        {x: 0, y: 0, z: -2},  // 北
        {x: 0, y: 0, z: 2},   // 南
        {x: 2, y: 0, z: 0},   // 东
        {x: -2, y: 0, z: 0}   // 西
    ];
    
    // 为每个机器创建一个唯一的标识符
    const machineId = machine.pos.toString();
    
    // 初始化或获取上次粒子生成时间
    if (!lastEntropyParticleTime[machineId]) {
        lastEntropyParticleTime[machineId] = 0;
    }
    
    // 获取当前时间（毫秒）
    const currentTime = Date.now();
    
    // 检查是否已经过了足够的时间（100毫秒 = 0.1秒）
    if (currentTime - lastEntropyParticleTime[machineId] >= 100) {
        // 更新上次粒子生成时间
        lastEntropyParticleTime[machineId] = currentTime;
        
        // 为每个方向生成粒子
        // 将所有循环内使用的变量移到循环外部声明
        let i;
        let startPos;
        let particle;
        
        for (i = 0; i < offsets.length; i++) {
                // 计算粒子起始位置 - 只赋值，不声明
                startPos = machine.pos.offset(
                    offsets[i].x, 
                    offsets[i].y, 
                    offsets[i].z
                );
                particle = new $EntityFollowProjectile(
                    level,
                    startPos,
                    machine.pos,
                    173, 216, 230
                );
                level.addFreshEntity(particle);
        }
    }
});