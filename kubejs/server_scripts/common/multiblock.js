const $PatchouliAPI = Java.loadClass('vazkii.patchouli.api.PatchouliAPI');

BlockEvents.rightClicked("ars_nouveau:arcane_platform", (event) => {
    const { item, level, block, player } = event
    if (item == "ars_nouveau:source_jar" && !level.isClientSide()) {
        //预览多方块结构
        $PatchouliAPI.get().showMultiblock($PatchouliAPI.get().getMultiblock("materialfactory:source_fluid_tank"), null, block.pos.offset(0, -1, 0), "none")
    }
    if (item != "ars_nouveau:source_jar" && !level.isClientSide() && block.entityData.itemStack.id == "ars_nouveau:source_jar") {
        $PatchouliAPI.get().clearMultiblock()
    }
    if (global.MULTIBLOCK.SourceFluidTank().validate(level, block.pos) != null && item.isEmpty()) {
        player.setStatusMessage(Text.translatable("message.multiblock.source_fluid.form"))
        player.playNotifySound("minecraft:entity.experience_orb.pickup", "blocks", 5, 1)
    }
    if (global.MULTIBLOCK.SourceFluidTank().validate(level, block.pos) == null && item.isEmpty()) {
        player.setStatusMessage(Text.translatable("message.multiblock.source_fluid_tank.unform"))
        player.playNotifySound("minecraft:block.note_block.didgeridoo", "blocks", 5, 1)
    }
})

BlockEvents.rightClicked("ars_nouveau:arcane_pedestal", (event) => {
    const { item, level, block, player } = event
    if (item == "ars_nouveau:arcane_core" && !level.isClientSide()) {
        //预览多方块结构
        $PatchouliAPI.get().showMultiblock($PatchouliAPI.get().getMultiblock("materialfactory:source_fluid_extractor"), null, block.pos.offset(0, -1, 0), "counterclockwise_90")
    }
    if (item != "ars_nouveau:arcane_core" && !level.isClientSide() && block.entityData.itemStack.id == "ars_nouveau:arcane_core") {
        $PatchouliAPI.get().clearMultiblock()
    }
    if (global.MULTIBLOCK.SourceFluidExtractor().validate(level, block.pos) != null && item.isEmpty()) {
        player.setStatusMessage(Text.translatable("message.multiblock.source_fluid.form"))
        player.playNotifySound("minecraft:entity.experience_orb.pickup", "blocks", 5, 1)
    }
    if (global.MULTIBLOCK.SourceFluidExtractor().validate(level, block.pos) == null && item.isEmpty()) {
        player.setStatusMessage(Text.translatable("message.multiblock.source_fluid_tank.unform"))
        player.playNotifySound("minecraft:block.note_block.didgeridoo", "blocks", 5, 1)
    }
})

BlockEvents.leftClicked("ars_nouveau:arcane_pedestal", (event) => {
    const { item, level, block, player } = event;
    if (item.id != "minecraft:golden_sword") return;
    let rotation = global.MULTIBLOCK.SourceFluidExtractor().validate(level, block.pos);
    if (!rotation) return;

    let startPos = block.pos.below(3);
    if (level.getBlock(startPos).id != "botania:bifrost_perm") return;

    // BFS 收集同一层（只按东西南北方向）的连接方块，并记录距离
    let queue = [{ pos: startPos, dist: 0 }];
    let visited = new Set();
    const keyOf = (p) => `${p.x},${p.y},${p.z}`;
    visited.add(keyOf(startPos));
    let results = [];

    while (queue.length > 0) {
        let cur = queue.shift();
        results.push(cur);
        let p = cur.pos;
        let d = cur.dist;

        let adjacentPositions = [p.offset(1,0,0), p.offset(-1,0,0), p.offset(0,0,1), p.offset(0,0,-1)];
        for (let np of adjacentPositions) {
            let k = keyOf(np);
            if (visited.has(k)) continue;
            visited.add(k);
            let nb = level.getBlock(np);
            if (nb.id === "botania:bifrost_perm") {
                queue.push({ pos: np, dist: d + 1 });
            }
        }
    }
    // 立即销毁中心块，并为其余方块按距离延迟销毁，产生逐渐扩散的效果
    // 中心先销毁
    level.destroyBlock(startPos, false);

    // 对其它位置按距离延迟（每层 6 ticks）执行销毁
    results.forEach((result) => {
        if (result.dist === 0) return; // 中心已处理
        const delay = result.dist * 10; // 每层间隔 6 ticks（约 0.3s）
        level.server.scheduleInTicks(delay, () => {
            // 再次确认该位置仍然为目标方块（防止其他事件已改变）
            if (level.getBlock(result.pos).id === "botania:bifrost_perm") {
                level.destroyBlock(result.pos, false);
            }
        });
    });
})
const $Boolean = Java.loadClass("java.lang.Boolean")
BlockEvents.leftClicked("ars_nouveau:arcane_pedestal", (event) => {
    const { item, level, block, player } = event;
    if (item.id != "minecraft:stone_sword") return;
    
    let rotation = global.MULTIBLOCK.SourceFluidExtractor().validate(level, block.pos);
    if (!rotation) return;
    // 获取所有蜡烛位置（字符 'B' 和 'C'）
        let charPositions = getMultiblockCharPositions(
            global.MULTIBLOCK.SourceFluidTank(),
            level,
            block.pos,
            rotation,
            ['B', 'C']
        )

        // 合并所有需要点燃的位置（B和C）
        let allCandlePositions = []

        // 处理字符 'B' 的位置（蜡烛座）
        if (charPositions.B && charPositions.B.length > 0) {
            charPositions.B.forEach(bData => {
                allCandlePositions.push({
                    pos: bData.pos,
                    type: 'B',  // 标记为B类型（蜡烛座）
                    isValid: bData.isValid
                })
            })
        }

        // 处理字符 'C' 的位置（单独的蜡烛）
        if (charPositions.C && charPositions.C.length > 0) {
            charPositions.C.forEach(cData => {
                allCandlePositions.push({
                    pos: cData.pos,
                    type: 'C',  // 标记为C类型（单独的蜡烛）
                    isValid: cData.isValid
                })
            })
        }
    const items = [
        "ars_nouveau:alchemists_crown", 
        "ars_nouveau:jump_ring", 
        "ars_nouveau:enchanters_eye", 
        "ars_nouveau:redstone_relay", 
        "ars_nouveau:scryers_oculus", 
        "ars_nouveau:potion_melder"
    ];

    const centerX = 0;
    const centerZ = 0;
    const radius = 2;
    const totalTime = 200; // 总时间
    const updateInterval = 2;
    let displays = [];
    let isSpawningParticles = true; // 控制粒子生成

    items.forEach((itemId, index) => {
        let display = level.createEntity("minecraft:item_display");
        
        // 计算初始位置
        let startAngle = (index / items.length) * 2 * KMath.PI;
        let x = centerX + radius * Math.cos(startAngle);
        let z = centerZ + radius * Math.sin(startAngle);
        
        // 计算初始旋转角度β，使物品面朝中心轴
        // 第一个物品旋转90度（π/2弧度），其他物品按等比例旋转
        let initialBeta = (index / items.length) * 2 * KMath.PI + KMath.PI / 2;

        display.moveTo(Vec3d.atBottomCenterOf(block.pos.above(1)));
        display.mergeNbt({
            Tags: ["item_display", "rotating_display"],
            item: { id: itemId, Count: 1 },
            billboard: "fixed",
            glow_color_override: 0xEE82EE,
            Glowing: true,
            item_display: "ground",
            transformation: [Math.cos(initialBeta), 0, Math.sin(initialBeta), 0.0,
                             0.0, 1.0, 0.0, 0.0,
                             -Math.sin(initialBeta), 0, Math.cos(initialBeta), 0.0,
                             0.0, 0.0, 0.0, 1.0]
        });
        display.spawn();
        
        displays.push({display: display, startAngle: startAngle});
        
        // 移动到圆周初始位置
        level.server.scheduleInTicks(10, () => {
            display.mergeNbt({
                transformation: [Math.cos(initialBeta), 0, Math.sin(initialBeta), x,
                                 0, 1, 0, 1,
                                 -Math.sin(initialBeta), 0, Math.cos(initialBeta), z,
                                 0, 0, 0, 1],
                interpolation_duration: 20,
                start_interpolation: 0
            });
        });
    });
    
    // 开始螺旋运动
    level.server.scheduleInTicks(30, () => {
        startSpiralMotion(level, displays, radius, centerX, centerZ, totalTime, updateInterval, block);
        level.playSound(null, block.x, block.y, block.z, "ars_nouveau:ea_channel", "blocks", 5, 1)
        
        // 190ticks后熄灭蜡烛并执行后续动作
        level.server.scheduleInTicks(170, () => {
            isSpawningParticles = false; // 停止生成粒子
            allCandlePositions.forEach(candle => {
                    let candlePos = candle.pos
                    let candleBlock = level.getBlock(candlePos)
                    // 检查蜡烛是否已点燃
                    if (candleBlock.id.includes("candle") && candleBlock.properties.lit === 'true') {
                        // 熄灭蜡烛
                        let newBlockState = candleBlock.blockState.setValue(BlockProperties.LIT, $Boolean.FALSE)
                        level.setBlockAndUpdate(candlePos, newBlockState);
                        let particle = new $EntityFollowProjectile(
                            level,
                            candlePos,
                            block.pos.above(2),
                            255, 128, 0
                        );
                        level.addFreshEntity(particle);
                        // 熄灭时的粒子效果
                        level.spawnParticles(
                            "large_smoke",
                            false,
                            candlePos.x + 0.5,
                            candlePos.y + 0.5,
                            candlePos.z + 0.5,
                            0.1,
                            0.1,
                            0.1,
                            3,
                            0.02
                        )

                        // 熄灭时的声音
                        level.playSound(
                            null,
                            candlePos.x,
                            candlePos.y,
                            candlePos.z,
                            "minecraft:block.candle.extinguish",
                            "blocks",
                            0.5,
                            1.0
                        )
                    }
                })
            level.server.scheduleInTicks(20, () => {
                let directions = [
                    {x: 1, y: 0, z: 0},    // 东
                    {x: -1, y: 0, z: 0},   // 西
                    {x: 0, y: 0, z: 1},    // 南
                    {x: 0, y: 0, z: -1},   // 北
                    {x: 1, y: 0, z: 1},   // 东北
                    {x: -1, y: 0, z: 1},  // 西北
                    {x: 1, y: 0, z: -1},  // 东南
                    {x: -1, y: 0, z: -1}, // 西南
                    {x: 0, y: 1, z: 0},    // 上
                    {x: 0, y: -1, z: 0},    // 下
                    {x: 1, y: 1, z: 1},   // 东北
                    {x: -1, y: 1, z: 1},  // 西北
                    {x: 1, y: 1, z: -1},  // 东南
                    {x: -1, y: 1, z: -1}, // 西南
                    {x: 1, y: -1, z: 1},   // 东北
                    {x: -1, y: -1, z: 1},  // 西北
                    {x: 1, y: -1, z: -1},  // 东南
                    {x: -1, y: -1, z: -1}, // 西南
                ];

                directions.forEach((dir) => {
                    let particle2 = new $EntityFollowProjectile(
                        level,
                        block.pos.above(2), // 起始点
                        block.pos.above(2).offset(dir.x, dir.y, dir.z), // 终点：从中心向该方向偏移1格
                        255, 128, 0
                    );
                    level.addFreshEntity(particle2);
                });
                level.spawnParticles(
                    "amendments:fireball_explosion", 
                    true, 
                    block.pos.above(2).x,
                    block.pos.above(2).y,
                    block.pos.above(2).z, 
                    0, 0, 0, // 速度向量
                    1,        // 粒子数量
                    0         // 速度
                );
                level.playSound(null, block.pos.above(2).x, block.pos.above(2).y, block.pos.above(2).z, "block.fire.extinguish", "ambient", 5, 1)
                level.server.scheduleInTicks(20, () => {
                    let lightningBoltEntity = level.getBlock(block.pos).createEntity('lightning_bolt');
                    lightningBoltEntity.setVisualOnly(true);
                    lightningBoltEntity.moveTo(Vec3d.atBottomCenterOf(block.pos));
                    lightningBoltEntity.spawn();
                    level.playSound(null, block.x, block.y, block.z, "ars_nouveau:ea_finish", "blocks", 8, 1)
                    level.spawnParticles(
                        'end_rod',
                        true,
                        block.x, block.y, block.z,
                        0.1, 0.05, 0.1,
                        50,
                        0.3
                    );
                    level.server.scheduleInTicks(20, () => {
                        level.playSound(null, block.x, block.y, block.z, "minecraft:block.beacon.activate", "blocks", 15, 0.8)
                    })
                    if (block.id == "ars_nouveau:arcane_pedestal" && block.entityData.itemStack.id == "ars_nouveau:arcane_core") {
                        level.getBlock(block.pos).set("materialfactory:source_fluid_extractor")
                    }
                })
            })
        })
    });
});

// 螺旋运动函数（带旋转和粒子效果）
function startSpiralMotion(level, displays, radius, centerX, centerZ, totalTime, updateInterval, block) {
    let tickCount = 0;
    let totalUpdates = totalTime / updateInterval;
    
    function updateAllDisplays() {
        let progress = Math.min(tickCount / totalUpdates, 1);
        
        // 使用缓动函数
        let easedProgress;
        if (progress < 0.7) {
            // 前70%：加速旋转
            easedProgress = progress / 0.7; // 0到1之间
            // 使用二次缓入
            easedProgress = easedProgress * easedProgress;
        } else {
            // 后30%：螺旋返回
            easedProgress = (progress - 0.7) / 0.3; // 0到1之间
            // 使用二次缓出
            easedProgress = 1 - (1 - easedProgress) * (1 - easedProgress);
        }
        
        if (progress < 0.7) {
            // 阶段1：加速旋转
            let rotationProgress = easedProgress;
            let currentAngle = rotationProgress * 3 * 2 * KMath.PI; // 旋转三周
            
            displays.forEach(function(displayData) {
                let display = displayData.display;
                let startAngle = displayData.startAngle;
                
                let angle = startAngle + currentAngle;
                let x = centerX + radius * Math.cos(angle);
                let z = centerZ + radius * Math.sin(angle);
                
                // 计算旋转角度β，使物品面朝中心轴
                // 随着旋转，β角度也相应变化，保持面向中心
                let beta = angle + KMath.PI / 2;
                let cosBeta = Math.cos(beta);
                let sinBeta = Math.sin(beta);
                
                display.mergeNbt({
                    transformation: [cosBeta, 0, sinBeta, x,
                                     0, 1, 0, 1,
                                     -sinBeta, 0, cosBeta, z,
                                     0, 0, 0, 1],
                    interpolation_duration: updateInterval,
                    start_interpolation: 0
                });
                
                // 在旋转过程中生成掉落的enchant粒子
                if (tickCount % 3 === 0) { // 每3个tick生成一次，避免粒子过多
                    level.spawnParticles(
                        "enchant", // 粒子类型
                        false,     // 强制渲染
                        block.x + x + 0.5,      // X坐标
                        block.y + 2,    // Y坐标（稍高位置）
                        block.z + z + 0.5,      // Z坐标
                        0.2,       // X方向速度
                        -0.1,      // Y方向速度（向下）
                        0.2,       // Z方向速度
                        5,         // 粒子数量
                        0      // 速度随机性
                    );
                }
            });
        } else {
            // 阶段2：螺旋返回
            let spiralProgress = easedProgress;
            let currentAngle = 3 * 2 * KMath.PI + spiralProgress * 0.5 * 2 * KMath.PI; // 继续旋转半圈
            let currentRadius = radius * (1 - spiralProgress); // 半径逐渐减小
            
            displays.forEach(function(displayData) {
                let display = displayData.display;
                let startAngle = displayData.startAngle;
                
                let angle = startAngle + currentAngle;
                let x = centerX + currentRadius * Math.cos(angle);
                let z = centerZ + currentRadius * Math.sin(angle);
                
                // 计算旋转角度β，使物品面朝中心轴
                let beta = angle + KMath.PI / 2;
                let cosBeta = Math.cos(beta);
                let sinBeta = Math.sin(beta);
                
                display.mergeNbt({
                    transformation: [cosBeta, 0, sinBeta, x,
                                     0, 1, 0, 1,
                                     -sinBeta, 0, cosBeta, z,
                                     0, 0, 0, 1],
                    interpolation_duration: updateInterval,
                    start_interpolation: 0
                });
                
                // 在返回过程中也生成粒子
                if (tickCount % 4 === 0 && currentRadius > 0.5) { // 半径较小时停止生成粒子
                    level.spawnParticles(
                        "enchant",
                        false,
                        block.x + x + 0.5,
                        block.y + 2,
                        block.z + z + 0.5,
                        0.1,
                        -0.05,
                        0.1,
                        1,
                        0.03
                    );
                }
            });
            
            // 如果返回完成，确保最终在原点
            if (progress >= 1) {
                level.server.scheduleInTicks(updateInterval, () => {
                    displays.forEach(function(displayData) {
                        let display = displayData.display;
                        let finalBeta = KMath.PI / 2; // 最终角度保持90度
                        let cosFinalBeta = Math.cos(finalBeta);
                        let sinFinalBeta = Math.sin(finalBeta);
                        
                        display.mergeNbt({
                            glow_color_override: 0xFF8000,
                            transformation: [cosFinalBeta, 0, sinFinalBeta, 0,
                                             0, 1, 0, 0,
                                             -sinFinalBeta, 0, cosFinalBeta, 0,
                                             0, 0, 0, 1],
                            interpolation_duration: 10,
                            start_interpolation: 0
                        });
                        level.server.scheduleInTicks(10, () => {
                            level.broadcastEntityEvent(display, 35)
                            display.kill()
                        })
                    });
                });
                return; // 停止更新
            }
        }
        
        tickCount++;
        // 继续下一次更新
        level.server.scheduleInTicks(updateInterval, updateAllDisplays);
    }
    
    updateAllDisplays();
}

//获取多方块结构中指定字符的所有方块位置
function getMultiblockCharacterPositions(multiblock, level, anchorPos, rotation, targetChar) {
    if (!rotation) return []
    let simulation = multiblock.simulate(level, anchorPos, rotation, false)
    if (!simulation) return []

    let positions = []

    let simulateResults = simulation.getSecond()

    simulateResults.forEach(result => {
        let char = result.getCharacter()
        if (char === targetChar) {
            positions.push(result.getWorldPosition())
        }
    })

    return positions
}

// 辅助函数：获取多方块中特定字符的所有位置并排序
function getMultiblockCharPositions(multiblock, level, anchorPos, rotation, targetChars) {
    let simulation = multiblock.simulate(level, anchorPos, rotation, false)
    if(!simulation) return {}
    
    let positions = {}
    // 初始化每个字符的位置数组
    targetChars.forEach(char => {
        positions[char] = []
    })
    
    simulation.getSecond().forEach(result => {
        let char = result.getCharacter()
        if(char && positions[char] !== undefined) {
            positions[char].push({
                pos: result.getWorldPosition(),
                isValid: result.test(level, rotation)
            })
        }
    })
    
    // 对每个字符的位置排序（确保每次顺序一致）
    Object.keys(positions).forEach(char => {
        positions[char].sort((a, b) => {
            if(a.pos.y !== b.pos.y) return a.pos.y - b.pos.y
            if(a.pos.x !== b.pos.x) return a.pos.x - b.pos.x
            return a.pos.z - b.pos.z
        })
    })
    
    return positions
}