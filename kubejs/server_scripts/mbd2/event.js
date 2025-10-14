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
let lastSourceParticleTime = {};
let lastColorParticleTime = {};

MBDMachineEvents.onRecipeWorking('materialfactory:source_fluid_extractor', e => {
    let { machine } = e.getEvent();
    let { recipeLogic, level } = machine;
    let tankPos = machine.pos.above();
    let tankBlockEntity = level.getBlock(tankPos).entity;
    
    // 检查流体罐条件
    if (!tankBlockEntity || tankBlockEntity.getCapability(ForgeCapabilities.FLUID_HANDLER).resolve().get().getFluidInTank(0).amount >= 10000) {
        stopWorking(machine, recipeLogic);
        return;
    }
    
    // 获取魔源提供者
    const providers = $SourceUtil.canTakeSource(machine.pos, level, 3);
    if (providers.isEmpty()) {
        stopWorking(machine, recipeLogic);
        return;
    }
    
    const machineId = machine.pos.toString();
    initMachineData(machineId);
    
    // 尝试提取魔源
    if (!tryExtractSource(machine, recipeLogic, level, providers, machineId, tankPos)) {
        stopWorking(machine, recipeLogic);
    }
});

// 初始化机器数据
function initMachineData(machineId) {
    if (!lastExtractionIndex[machineId]) lastExtractionIndex[machineId] = 0;
    if (!lastSourceParticleTime[machineId]) lastSourceParticleTime[machineId] = 0;
    if (!lastColorParticleTime[machineId]) lastColorParticleTime[machineId] = 0;
}

// 停止工作函数
function stopWorking(machine, recipeLogic) {
    recipeLogic.setWorkingEnabled(false);
    machine.triggerGeckolibAnim('suspend', 1);
    Direction.values().forEach(dir => machine.setOutputSignal(1, dir));
}

// 尝试提取魔源
function tryExtractSource(machine, recipeLogic, level, providers, machineId, tankPos) {
    const requiredSource = 10;
    let extracted = false;
    let attempts = 0;
    
    while (attempts < providers.size() && !extracted) {
        let providerIndex = lastExtractionIndex[machineId] % providers.size();
        let provider = providers.get(providerIndex);
        
        if (provider.getSource().getSource() >= requiredSource) {
            provider.getSource().removeSource(requiredSource);
            
            createParticles(machine, level, machineId, provider.getCurrentPos(), tankPos);
            
            extracted = true;
            recipeLogic.setWorkingEnabled(true);
            lastExtractionIndex[machineId] = (providerIndex + 1) % providers.size();
            
            Direction.values().forEach(dir => machine.setOutputSignal(0, dir));
        } else {
            attempts++;
            lastExtractionIndex[machineId] = (providerIndex + 1) % providers.size();
        }
    }
    
    return extracted;
}

// 创建粒子效果
function createParticles(machine, level, machineId, sourcePos, tankPos) {
    const currentTime = Date.now();
    
    // 魔源粒子
    if (currentTime - lastSourceParticleTime[machineId] >= 200) {
        let projectile = new $EntityFollowProjectile(level, sourcePos, tankPos, 175, 127, 255);
        level.addFreshEntity(projectile);
        lastSourceParticleTime[machineId] = currentTime;
    }
    
    // 彩色粒子
    if (currentTime - lastColorParticleTime[machineId] >= 1000) {
        lastColorParticleTime[machineId] = currentTime;
        createColorParticles(machine, level);
    }
}

// 创建彩色粒子
function createColorParticles(machine, level) {
    let machineState = level.getBlockState(machine.pos);
    let facing = machineState.getValue(BlockStateProperties.HORIZONTAL_FACING);
    let targetPos = machine.pos.above(3);
    
    let particleStarts = getParticleStartPositions(machine.pos, facing);
    let colors = [
        {rgb: [175, 127, 255]},
        {rgb: [0, 255, 0]},
        {rgb: [255, 0, 0]},
        {rgb: [0, 0, 255]}
    ];
    
    for (let i = 0; i < 4; i++) {
        let colorParticle = new $EntityFollowProjectile(
            level,
            particleStarts[i],
            targetPos,
            colors[i].rgb[0], colors[i].rgb[1], colors[i].rgb[2]
        );
        level.addFreshEntity(colorParticle);
    }
}
// 获取粒子起始位置
function getParticleStartPositions(pos, facing) {
    const offsets = {
        "north": [[-3, 3, -3], [3, 3, -3], [-3, 3, 3], [3, 3, 3]],
        "south": [[3, 3, 3], [-3, 3, 3], [3, 3, -3], [-3, 3, -3]],
        "east": [[3, 3, -3], [3, 3, 3], [-3, 3, -3], [-3, 3, 3]],
        "west": [[-3, 3, 3], [-3, 3, -3], [3, 3, 3], [3, 3, -3]]
    };
    
    let offsetList = offsets[facing.toString()] || offsets["north"];
    return offsetList.map(offset => pos.offset(offset[0], offset[1], offset[2]));
}
MBDMachineEvents.onRightClick('materialfactory:source_fluid_extractor', e => {
    let { machine, player, heldItem, hand } = e.getEvent();
    let { recipeLogic, level } = machine
    let tank = level.getBlock(machine.pos.above())
    let tankCap = tank.entity.getCapability(ForgeCapabilities.FLUID_HANDLER).resolve().get();
    let amount = tankCap.getFluidInTank(0).amount;
    let now = Date.now()
    if (hand != 'MAIN_HAND') return;
    if (!heldItem.isEmpty()) return;
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
                machine.triggerGeckolibAnim('working', 1)
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