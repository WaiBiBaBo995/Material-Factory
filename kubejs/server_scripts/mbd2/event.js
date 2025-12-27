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
    if (tank.id != "materialfactory:source_fluid_tank") return;
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
// 创建全局变量来跟踪上次粒子生成时间
    let lastEntropyParticleTime = {};
MBDMachineEvents.onRecipeWorking('materialfactory:entropy_matrix_core', e => {
    let { machine } = e.getEvent();
    let { level } = machine;
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
    const EMCcurrentTime = Date.now();
    
    // 检查是否已经过了足够的时间（100毫秒 = 0.1秒）
    if (EMCcurrentTime - lastEntropyParticleTime[machineId] >= 200) {
        // 更新上次粒子生成时间
        lastEntropyParticleTime[machineId] = EMCcurrentTime;
        
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

//巨型附魔装置
let lastRandomParticleTime = {};
MBDMachineEvents.onRecipeWorking('materialfactory:huge_enchanting_apparatus', e => {
    let event = e.getEvent();
    let machine = event.machine;
    let level = machine.level;
    
    // 预先计算所有方向（包括斜方向）
    // 3x3x3 的立方体，排除中心点 (0,0,0)
    const allDirections = (function() {
        let dirs = [];
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                for (let z = -1; z <= 1; z++) {
                    // 排除中心点 (0,0,0)
                    if (x !== 0 || y !== 0 || z !== 0) {
                        dirs.push({x: x, y: y, z: z});
                    }
                }
            }
        }
        return dirs;
    })();
    // 为每个机器创建一个唯一的标识符
    let machineId = machine.pos.toString();
    
    // 初始化或获取上次粒子生成时间
    if (!lastRandomParticleTime[machineId]) {
        lastRandomParticleTime[machineId] = 0;
    }
    
    // 获取当前时间（毫秒）
    let currentTime = Date.now();
    
    // 检查是否已经过了足够的时间（100毫秒 = 0.1秒）
    if (currentTime - lastRandomParticleTime[machineId] >= 100) {
        // 更新上次粒子生成时间
        lastRandomParticleTime[machineId] = currentTime;
        
        // 随机选择1到3个方向
        let numDirections = Math.floor(Math.random() * 3) + 1; // 1-3
        let selectedDirections = [];
        
        // 使用循环手动复制数组
        let availableDirections = [];
        for (let j = 0; j < allDirections.length; j++) {
            availableDirections.push(allDirections[j]);
        }
        
        // 随机选择指定数量的方向
        for (let i = 0; i < numDirections; i++) {
            if (availableDirections.length === 0) break;
            
            let randomIndex = Math.floor(Math.random() * availableDirections.length);
            selectedDirections.push(availableDirections[randomIndex]);
            
            // 从可用方向中移除已选择的方向
            availableDirections.splice(randomIndex, 1);
        }
        
        // 为每个选中的方向生成粒子
        let k, targetPos, particle, r, g, b;
        for (k = 0; k < selectedDirections.length; k++) {
                // 计算粒子目标位置（机器位置 + 方向偏移1格）
                targetPos = machine.pos.offset(
                    selectedDirections[k].x, 
                    selectedDirections[k].y, 
                    selectedDirections[k].z
                );
                
                // 生成随机颜色
                r = Math.floor(Math.random() * 256);
                g = Math.floor(Math.random() * 256);
                b = Math.floor(Math.random() * 256);
                
                // 生成粒子，从机器位置飞向目标位置
                particle = new $EntityFollowProjectile(
                    level,
                    machine.pos,  // 从机器位置开始
                    targetPos,    // 飞向周围一格的位置
                    r, g, b       // 随机颜色
                );
                
                // 添加粒子到世界
                level.addFreshEntity(particle);
        }
    }
});

//人造恒星
MBDMachineEvents.onUseCatalyst('materialfactory:artificial_star', e => {
    let { machine } = e.getEvent();
    let { level } = machine;
    let aboveMachine = Java.loadClass('com.lowdragmc.mbd2.api.machine.IMachine')
        .ofMachine(level, machine.getPos().above(11))
        .orElse(null);
    let trait = aboveMachine.getTraitByName("forge_energy_storage") 
    let storage = trait.storage;
    let stored = storage.getEnergyStored();
    let maxStored = storage.getMaxEnergyStored();
    if (stored < maxStored) {
        level.getNearestPlayer(machine.pos.getX(), machine.pos.getY(), machine.pos.getZ(), 10, false).tell(Text.translate("message.artificial_star.not_enough_energy", stored, maxStored));
        e.event.setCanceled(true)
        e.cancel();
    }
});
MBDMachineEvents.onStructureFormed('materialfactory:artificial_star', e => {
    let { machine } = e.getEvent();
    let { level } = machine;
    let aboveMachine = Java.loadClass('com.lowdragmc.mbd2.api.machine.IMachine')
        .ofMachine(level, machine.getPos().above(11))
        .orElse(null);
    let belowMachine = Java.loadClass('com.lowdragmc.mbd2.api.machine.IMachine')
        .ofMachine(level, machine.getPos().below(14))
        .orElse(null);
    if (machine.customData.getBoolean('hasCollapsed')) {
        e.event.setCanceled(true)
        e.cancel();
    }
    let trait = machine.getTraitByName("catalyst_slot")
    let storage = trait.storage;
    aboveMachine.triggerGeckolibAnim('formed', 1);
    storage.insertItem(0, 'mekanismgenerators:hohlraum', false)
    Utils.server.scheduleInTicks(110, () => {
        let FEtrait = aboveMachine.getTraitByName("forge_energy_storage")
        let FEstorage = FEtrait.storage;
        let FEstored = FEstorage.getEnergyStored();
        let totalEnergy = FEstorage.getMaxEnergyStored();
        let HEATtrait = belowMachine.getTraitByName("mek_heat_container")
        let HEATcontainer = HEATtrait.container;
        let ticks = 70;
        let energyPerTick = Math.floor(totalEnergy / ticks);
        let totalHeatStored = HEATcontainer.getHeatCapacity(0);
        let totalHeat = 15000000 * totalHeatStored;
        let heatPerTick = Math.floor(totalHeat / ticks);
        level.playSound(null, machine.getPos().getX(), machine.getPos().getY(), machine.getPos().getZ(), "materialfactory:laser_shoot", "blocks", 10, 1);
        for (let i = 0; i < 30; i++) {
            Utils.server.scheduleInTicks(i * 4, () => {
                let particle1 = new $EntityFollowProjectile(
                    level,
                    machine.getPos().above(9),
                    machine.pos,
                    255, 255, 255
                );
                let particle2 = new $EntityFollowProjectile(
                    level,
                    machine.getPos().below(11),
                    machine.pos,
                    255, 255, 255
                );
                level.addFreshEntity(particle1);
                level.addFreshEntity(particle2);
            });
        }
        Utils.server.scheduleInTicks(50, () => {
            level.playSound(null, machine.getPos().getX(), machine.getPos().getY(), machine.getPos().getZ(), "materialfactory:star_spawn", "blocks", 10, 0.1);
            machine.triggerGeckolibAnim('formed', 1);
            if (machine.customData.getBoolean('hasFormedOnce')) return;
            level.runCommandSilent(`summon block_display ${machine.pos.getX()} ${machine.pos.getY() - 13.5} ${machine.pos.getZ()} {Tags:["eternal_singularity_display"],Passengers:[{id:"minecraft:item_display",item:{id:"avaritia:eternal_singularity",Count:1},item_display:"none",Tags:["eternal_singularity_display"],transformation:[1.0000f,0.0000f,0.0000f,0.0000f,0.0000f,0.0000f,-1.0000f,0.0000f,0.0000f,1.0000f,0.0000f,0.0000f,0.0000f,0.0000f,0.0000f,1.0000f]}]}`)
            level.runCommandSilent(`data modify entity @e[limit=1,tag=eternal_singularity_display,type=minecraft:item_display,x=${machine.pos.getX()},y=${machine.pos.getY()-13.5},z=${machine.pos.getZ()},distance=..1] interpolation_duration set value 100`)
            level.runCommandSilent(`data modify entity @e[limit=1,tag=eternal_singularity_display,type=minecraft:item_display,x=${machine.pos.getX()},y=${machine.pos.getY()-13.5},z=${machine.pos.getZ()},distance=..1] start_interpolation set value 0`)
            level.runCommandSilent(`data modify entity @e[limit=1,tag=eternal_singularity_display,type=minecraft:item_display,x=${machine.pos.getX()},y=${machine.pos.getY()-13.5},z=${machine.pos.getZ()},distance=..1] transformation set value [17.0000f,0.0000f,0.0000f,0.0000f,0.0000f,0.0000f,-16.0000f,0.0000f,0.0000f,17.0000f,0.0000f,0.0000f,0.0000f,0.0000f,0.0000f,1.0000f]`)
            for (let i = 0; i < ticks; i++) {
                Utils.server.scheduleInTicks(i, () => {
                    let energyToExtract = (i === ticks - 1) ?
                        (totalEnergy - energyPerTick * (ticks - 1)) :
                        energyPerTick;
                    let heatToAdd = (i === ticks - 1) ?
                        (totalHeat - heatPerTick * (ticks - 1)) :
                        heatPerTick;

                    FEstorage.extractEnergy(energyToExtract, false);
                    HEATcontainer.handleHeat(0, heatToAdd);
                });
            }
            Utils.server.scheduleInTicks(ticks, () => {
                FEstorage.extractEnergy(FEstored, false)
            })
            if (!machine.customData.getBoolean('hasFormedOnce')) {
                machine.customData.putBoolean('hasFormedOnce', true);
            }
        });
    });
});
const $IMultiController = Java.loadClass('com.lowdragmc.mbd2.api.machine.IMultiController');
MBDMachineEvents.onStructureInvalid('materialfactory:artificial_star', e => {
    let { machine } = e.getEvent();
    let { level } = machine;
    let lightningBoltEntity = level.getBlock(machine.pos).createEntity('lightning_bolt');
    let aboveMachine = Java.loadClass('com.lowdragmc.mbd2.api.machine.IMachine')
        .ofMachine(level, machine.getPos().above(11))
        .orElse(null);
    let belowMachine = Java.loadClass('com.lowdragmc.mbd2.api.machine.IMachine')
        .ofMachine(level, machine.getPos().below(14))
        .orElse(null);
    const controller = $IMultiController.ofController(level, machine.pos).orElse(null);
    level.runCommandSilent(`kill @e[tag=eternal_singularity_display,x=${machine.pos.getX()},y=${machine.pos.getY()-13.5},z=${machine.pos.getZ()},distance=..1]`);
    let HEATtrait = belowMachine.getTraitByName("mek_heat_container") 
    let HEATcontainer = HEATtrait.container;
    let totalHeatStored = HEATcontainer.getHeatCapacity(0);
    let HeatTemperature = HEATcontainer.getTemperature(0);
    let deleteHeat = (300-HeatTemperature) * totalHeatStored
    HEATcontainer.handleHeat(0, deleteHeat);
    if (machine.customData.getBoolean('hasCollapsed')) {
        e.event.setCanceled(true)
        e.cancel();
    }
    if (aboveMachine) {
        aboveMachine.triggerGeckolibAnim('unformed', 1);
    }   
    if (controller == null) return;
    machine.customData.putBoolean('hasCollapsed', true);
    machine.triggerGeckolibAnim('collapse', 1);
    Utils.server.scheduleInTicks(90, () => {
        lightningBoltEntity.setVisualOnly(true);
        lightningBoltEntity.moveTo(Vec3d.atCenterOf(machine.pos));
        lightningBoltEntity.spawn();
        level.getBlock(machine.pos).createEntity('lightning_bolt');
        
        // 创建RBH黑洞
        let blackHole = level.createEntity("rbh:test_black_hole");
        if (blackHole) {
            blackHole.setPos(machine.pos);
            blackHole.setSize(1.0);
            blackHole.setEffectSize(2.0);
            blackHole.setEffectExponent(3.6);
            blackHole.setColor(0x000000);
            blackHole.setRainbow(true);
            level.addFreshEntity(blackHole);
            level.playSound(null, machine.getPos().getX(), machine.getPos().getY(), machine.getPos().getZ(), "irons_spellbooks:entity.black_hole.loop", "blocks", 20, 0.7);
            
            // 启动成长和缩小过程
            startBlackHoleGrowthAndShrink(blackHole, machine.pos, level);
            // 启动吸引效果 - 在整个黑洞生命周期内持续运行
            startAttractionEffect(blackHole, machine.pos, level);
        }

        Utils.server.scheduleInTicks(5, () => {
            level.setBlock(machine.pos, Block.getBlock('air').defaultBlockState(), 2);
        });
    });
});

// 黑洞成长和缩小函数
function startBlackHoleGrowthAndShrink(blackHole, position, worldLevel) {
    let totalSteps = 10;
    
    // 强制加载区块
    let chunkPos = worldLevel.getChunk(position).getPos();
    worldLevel.chunkSource.updateChunkForced(chunkPos, true);

    // 成长阶段
    for (let i = 1; i <= totalSteps; i++) {
        createGrowthStep(i, totalSteps, blackHole, position, worldLevel);
    }
    
    // 缩小阶段 - 倒序执行
    for (let i = totalSteps; i >= 1; i--) {
        createShrinkStep(i, totalSteps, blackHole, position, worldLevel);
    }
    
    // 在缩小完成后执行爆炸和清理
    Utils.server.scheduleInTicks((totalSteps * 2 + 5) * 20, () => {
        // 执行爆炸
        worldLevel.getBlock(position).createExplosion().strength(100).explosionMode("block").explode();
        worldLevel.runCommandSilent(`kill @e[tag=eternal_singularity_display,x=${position.getX()},y=${position.getY()-13.5},z=${position.getZ()},distance=..1]`);
        
        // 丢弃黑洞实体
        if (blackHole && !blackHole.isRemoved()) {
            blackHole.discard();
        }
        
        // 取消强制加载
        worldLevel.chunkSource.updateChunkForced(chunkPos, false);
    });
}

// 创建成长步骤
function createGrowthStep(step, totalSteps, blackHole, position, worldLevel) {
    Utils.server.scheduleInTicks(step * 20, () => {
        if (!blackHole || blackHole.isRemoved()) {
            return;
        }
        
        let progress = Math.min(step / totalSteps, 1.0);
        let newSize = 1.0 + (8.0 - 1.0) * easeInOutCubic(progress);
        let newEffectSize = 2.0 + (16.0 - 2.0) * easeInOutCubic(progress);

        blackHole.setSize(newSize);
        blackHole.setEffectSize(newEffectSize);
    });
}

// 创建缩小步骤
function createShrinkStep(step, totalSteps, blackHole, position, worldLevel) {
    // 在成长阶段结束后开始缩小阶段
    Utils.server.scheduleInTicks((totalSteps + step) * 20, () => {
        if (!blackHole || blackHole.isRemoved()) {
            return;
        }
        
        // 倒序计算进度：从1到0
        let progress = Math.min(step / totalSteps, 1.0);
        let newSize = 8.0 - (8.0 - 1.0) * easeInOutCubic(progress);
        let newEffectSize = 16.0 - (16.0 - 2.0) * easeInOutCubic(progress);

        blackHole.setSize(newSize);
        blackHole.setEffectSize(newEffectSize);
    });
}

/**启动吸引效果
 * 
 * @param {Internal.Entity_} blackHole 
 * @param {BlockPos_} position 
 * @param {Internal.Level_} worldLevel 
 */
function startAttractionEffect(blackHole, position, worldLevel) {
    // 在整个黑洞生命周期内持续运行吸引力效果
    // 黑洞生命周期为405 ticks，我们每2 ticks执行一次，总共约203次
    for (let i = 1; i <= 203; i++) {
        Utils.server.scheduleInTicks(i * 2, () => {
            // 检查黑洞是否还存在
            if (!blackHole || blackHole.isRemoved()) {
                return;
            }

            let attractionRange = blackHole.nbt.size() + 15; // 增加吸引范围
            let aabb = AABB.of(
                position.x - attractionRange,
                position.y - attractionRange,
                position.z - attractionRange,
                position.x + attractionRange,
                position.y + attractionRange,
                position.z + attractionRange
            )
            let entities = worldLevel.getEntitiesWithin(aabb);
            for (let entity of entities) {
                if (!entity || entity.isRemoved()) continue;
                let machineCenter = Vec3d.atCenterOf(position);
                let diff = machineCenter.subtract(entity.position());
                let distance = diff.length();
                if (distance <= attractionRange) {
                    if (distance < blackHole.nbt.size() / 2) {
                        // 对实体造成伤害
                        let damageAmount = 16; // 基础伤害值
                        // 根据黑洞尺寸增加伤害
                        let blackHolesizeDamage = blackHole.nbt.size() * 0.5;
                        let totalDamage = damageAmount + blackHolesizeDamage - distance;
                        entity.attack(entity.damageSources().generic(), totalDamage);
                        entity.resetFallDistance;
                    }

                    // 万有引力公式 GMm/r^2
                    let blackholeDensity = 100; // 大幅增加黑洞密度
                    let blackholeVolume = blackHole.nbt.size() ** 3;
                    let blackholeMass = blackholeDensity * blackholeVolume;

                    let GravitationalConstant = 25; // 大幅增加引力常数

                    let entityDensty = 10; // 增加实体密度
                    let entityVolume = Math.max(
                        entity.boundingBox.getYsize() * entity.boundingBox.getXsize() * entity.boundingBox.getZsize(),
                        0.1 // 最小体积，避免除零
                    );
                    let entityMass = entityDensty * entityVolume;

                    // 计算引力，确保分母不为零
                    let minDistance = 0.5; // 最小距离限制
                    let effectiveDistance = Math.max(distance, minDistance);

                    let totalScale = GravitationalConstant * blackholeMass * entityMass / (effectiveDistance ** 2);

                    // 添加基础吸引力确保近距离有足够效果
                    let baseAttraction = 0.5;
                    totalScale += baseAttraction;

                    // 限制最大和最小吸引力
                    totalScale = Math.max(totalScale, 0.1); // 最小吸引力
                    totalScale = Math.min(totalScale, 5.0); // 最大吸引力

                    let attractionForce = diff.normalize().scale(totalScale);
                    entity.setDeltaMovement(attractionForce);
                    entity.hurtMarked = true;
                    entity.resetFallDistance();
                }
            }
        });
    }
}

// 缓动函数
function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
//人造恒星
MBDMachineEvents.onTick('materialfactory:artificial_star', e => {
    let { machine } = e.getEvent();
    let { level } = machine;
    let aboveMachine = Java.loadClass('com.lowdragmc.mbd2.api.machine.IMachine')
        .ofMachine(level, machine.getPos().above(11))
        .orElse(null);
    let belowMachine = Java.loadClass('com.lowdragmc.mbd2.api.machine.IMachine')
        .ofMachine(level, machine.getPos().below(14))
        .orElse(null);
    let controller = $IMultiController.ofController(level, machine.pos).orElse(null);
    if (controller.isFormed() == false) return;
    let currentTime = level.getDayTime().valueOf();
    if (!machine.customData.contains('lastValidTime')) {
        machine.customData.putInt('lastValidTime', currentTime);
    }
    let lastValidTime = machine.customData.getInt('lastValidTime')
    if (level.getDayTime().valueOf() - lastValidTime < 400) {
        return;
    }
    if (machine.customData.getBoolean('hasCollapsed')) return;
    if (level.time % 20 != 0) return;
    let HEATtrait = belowMachine.getTraitByName("mek_heat_container")
    let HEATcontainer = HEATtrait.container;
    let HeatTemperature = HEATcontainer.getTemperature(0);
    if (HeatTemperature >= 10000000 && HeatTemperature < 100000000) return;
    let player = level.getNearestPlayer(machine.pos.getX(), machine.pos.getY(), machine.pos.getZ(), 40, false)
    if (HeatTemperature < 10000000) {
        machine.customData.putBoolean('hasCollapsed', true);
        if (player !== null) {
            player.tell(Text.translate("message.artificial_star.not_enough_heat", HeatTemperature));
        }
        aboveMachine.triggerGeckolibAnim('unformed', 1);
        machine.triggerGeckolibAnim('collapse', 1);
        Utils.server.scheduleInTicks(60, () => {
            level.getBlock(machine.pos).set("materialfactory:extinguished_star")
            level.getBlock(machine.pos).createExplosion().strength(5).explosionMode("block").explode();
        })
    } else if (HeatTemperature >= 100000000) {
        if (player !== null) {
            player.tell(Text.translate("message.artificial_star.too_much_heat", HeatTemperature));
        }
        level.getBlock(machine.pos.below(11)).set('air')
    }
})
//红石信号输出
MBDMachineEvents.onTick('materialfactory:artificial_star', e => {
    let { machine } = e.getEvent();
    let { level } = machine;
    let controller = $IMultiController.ofController(level, machine.pos).orElse(null);
    if (controller.isFormed() == false) return;
    let belowMachine = Java.loadClass('com.lowdragmc.mbd2.api.machine.IMachine')
        .ofMachine(level, machine.getPos().below(14))
        .orElse(null);
    let HEATtrait = belowMachine.getTraitByName("mek_heat_container")
    let HEATcontainer = HEATtrait.container;
    let HeatTemperature = HEATcontainer.getTemperature(0);
    if (level.time % 7 != 0) return;
    // 计算当前应该输出的信号强度
    let currentSignal;
    
    // 边界温度处理
    if (HeatTemperature <= 10000000) {
        // 温度 ≤ 10,000,000 时输出红石信号3
        currentSignal = 3;
    } else if (HeatTemperature >= 100000000) {
        // 温度 ≥ 100,000,000 时输出最大红石信号15
        currentSignal = 15;
    } else {
        // 温度在10,000,001到99,999,999之间的处理
        let tenMillions = Math.floor(HeatTemperature / 10000000); // 获取千万位数
        
        // 根据千万位数设置红石信号，温度越高信号越强
        switch(tenMillions) {
            case 1: // 10,000,001 - 19,999,999
                currentSignal = 5;
                break;
            case 2: // 20,000,000 - 29,999,999
                currentSignal = 6;
                break;
            case 3: // 30,000,000 - 39,999,999
                currentSignal = 7;
                break;
            case 4: // 40,000,000 - 49,999,999
                currentSignal = 8;
                break;
            case 5: // 50,000,000 - 59,999,999
                currentSignal = 9;
                break;
            case 6: // 60,000,000 - 69,999,999
                currentSignal = 10;
                break;
            case 7: // 70,000,000 - 79,999,999
                currentSignal = 11;
                break;
            case 8: // 80,000,000 - 89,999,999
                currentSignal = 12;
                break;
            case 9: // 90,000,000 - 99,999,999
                currentSignal = 13;
                break;
            default:
                currentSignal = 5; // 默认值
        }
    }
    
    // 检查信号是否发生变化，避免重复输出
    let lastSignal = machine.customData.getInt('lastRedstoneSignal');
    if (lastSignal === undefined || lastSignal !== currentSignal) {
        // 信号发生变化，更新所有方向的输出
        Direction.values().forEach(dir => machine.setOutputSignal(currentSignal, dir));
        // 存储当前信号值供下次比较
        machine.customData.putInt('lastRedstoneSignal', currentSignal);
    }
});
//GUI冷却加热开关
MBDMachineEvents.onUI('materialfactory:artificial_star', e => {
    let { machine, root } = e.getEvent();
    let { level } = machine
    let controller = $IMultiController.ofController(level, machine.pos).orElse(null);
    let ControllerParts = controller.getParts()
    let fluidDumpButton = root.getFirstWidgetById('fluid_dump')
    let gasDumpButton = root.getFirstWidgetById('gas_dump')
    let tank = root.getFirstWidgetById('ui:fluid_tank_0')
    let heatButton = root.getFirstWidgetById('energy_heat')
    let coolingButton = root.getFirstWidgetById('fluid_cooling')
    if (machine.customData.getBoolean('heatModeButton')) {
        heatButton.setPressed(true)
        coolingButton.setPressed(false)
    } else if (machine.customData.getBoolean('coolingModeButton')) {
        coolingButton.setPressed(true)
        heatButton.setPressed(false)
    }
    heatButton.setOnPressCallback((clickData, state) => {
        if (state == true) {
            machine.customData.putBoolean('heatMode', true);
            machine.customData.putBoolean('heatModeButton', true);
            machine.customData.putBoolean('coolingMode', false);
            machine.customData.putBoolean('coolingModeButton', false);
            coolingButton.setPressed(false)
        } else {
            machine.customData.putBoolean('heatMode', false);
            machine.customData.putBoolean('heatModeButton', false);
        }
    });
    coolingButton.setOnPressCallback((clickData, state) => {
        if (state == true) {
            machine.customData.putBoolean('coolingMode', true);
            machine.customData.putBoolean('coolingModeButton', true);
            machine.customData.putBoolean('heatMode', false);
            machine.customData.putBoolean('heatModeButton', false);
            heatButton.setPressed(false)
        } else {
            machine.customData.putBoolean('coolingMode', false);
            machine.customData.putBoolean('coolingModeButton', false);
        }
    });
    fluidDumpButton.setOnPressCallback(clickData => {
        if (!clickData.isRemote) {
            tank.fluid.amount = 0
        }
    })
    gasDumpButton.setOnPressCallback(clickData => {
        if (!clickData.isRemote) {
            for (let gasmachine of ControllerParts) {
                let Gastrait = gasmachine.getTraitByName("mek_gas_container");
                // 添加空值检查
                if (!Gastrait) {
                    continue; // 跳过这个机器，继续下一个
                }
                let Gasstorages = Gastrait.storages;
                Gasstorages[0].getStack().setAmount(0);
            }
        }
    });
})
//物品槽加热冷却开关
MBDMachineEvents.onTick('materialfactory:artificial_star', e => {
    let { machine } = e.getEvent()
    let { level } = machine
    let itemTrait = machine.getTraitByName("temperaturemode_slot")
    let itemStorage = itemTrait.storage
    let itemStored = itemStorage.getStackInSlot(0).getId()
    let heatButtonOn = machine.customData.getBoolean('heatModeButton')
    let coolingButtonOn = machine.customData.getBoolean('coolingModeButton')
    if (heatButtonOn || coolingButtonOn) return;
    if( level.time % 5 != 0 ) return;
    if (itemStored == 'cookingforblockheads:heating_unit') {
        machine.customData.putBoolean('heatMode', true);
        machine.customData.putBoolean('coolingMode', false);
    } else if (itemStored == 'cookingforblockheads:ice_unit') {
        machine.customData.putBoolean('coolingMode', true);
        machine.customData.putBoolean('heatMode', false);
    } else if (itemStorage.getStackInSlot(0).isEmpty()) {
        if (machine.customData.getBoolean('heatMode') || machine.customData.getBoolean('coolingMode')) {
            machine.customData.putBoolean('coolingMode', false);
            machine.customData.putBoolean('heatMode', false);
        }
    }
})
//终极激光动画
MBDMachineEvents.onBeforeRecipeWorking('materialfactory:artificial_star', e=>{
    let { machine, recipe } = e.getEvent()
    let { level } = machine
    let aboveMachine = Java.loadClass('com.lowdragmc.mbd2.api.machine.IMachine')
        .ofMachine(level, machine.getPos().above(11))
        .orElse(null);
    let recipeId = recipe.getId().toString()
    if (recipeId == 'materialfactory:star/cooling_of_sodium' || recipeId == 'materialfactory:star/cooling_of_water' || recipeId == 'materialfactory:star/heat_of_power') return;
    aboveMachine.triggerGeckolibAnim("working", 1)
})
MBDMachineEvents.onAfterRecipeWorking('materialfactory:artificial_star', e=>{
    let { machine } = e.getEvent()
    let { level } = machine
    let aboveMachine = Java.loadClass('com.lowdragmc.mbd2.api.machine.IMachine')
        .ofMachine(level, machine.getPos().above(11))
        .orElse(null);
    aboveMachine.triggerGeckolibAnim("idle", 1)
})
//开关加热冷却bug修复
MBDMachineEvents.onRecipeWaiting('materialfactory:artificial_star', e=>{
    let { machine, recipe } = e.getEvent()
    let { recipeLogic } = machine
    if (recipe.checkConditions(recipeLogic).isSuccess() == false) {
        recipeLogic.setStatus("idle")
        recipeLogic.setProgress(0)
    }
})

//熄灭的恒星
MBDMachineEvents.onRightClick('materialfactory:extinguished_star', e => {
    let { machine, player, heldItem, hand } = e.getEvent();
    let { level } = machine;
    let FEtrait = machine.getTraitByName("forge_energy_storage") 
    let FEstorage = FEtrait.storage;
    let FEstored = FEstorage.getEnergyStored();
    let totalEnergy = FEstorage.getMaxEnergyStored();
    let Gastrait = machine.getTraitByName("mek_gas_container") 
    let Gasstorages = Gastrait.storages;
    let Gassstored = Gasstorages[0].getStack().getAmount()
    let totalGas = Gasstorages[0].getCapacity()
    if (hand != 'MAIN_HAND') return;
    if (!heldItem.isEmpty()) return;
    if (level.isClientSide()) return;
    player.setStatusMessage(Text.translate("message.materialfactory.extinguished_star", FEstored, totalEnergy, Gassstored, totalGas));
    player.swing()
});
MBDMachineEvents.onRecipeFinish('materialfactory:extinguished_star', e=>{
    let { machine } = e.getEvent();
    let { level } = machine;
    level.playSound(null, machine.getPos().getX(), machine.getPos().getY(), machine.getPos().getZ(), "minecraft:entity.experience_orb.pickup", "blocks", 20, 0.1);
})