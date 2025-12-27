LycheeEvents.customAction('add_antimatter', (event) => {
    event.action.applyFunc = (recipe, ctx, times) => {
        /**@type {Internal.ItemEntity} */
        let itemEntity = ctx.getParam('this_entity');
        let count = itemEntity.item.count;

        if (!itemEntity.nbt.Item.tag) {
            itemEntity.mergeNbt({
                Item: {
                    Count: count,
                    id: "materialfactory:unfilled_antimatter_ball",
                    tag: {
                        Antimatter: 0,
                    },
                },
            });
        }

        let amount = itemEntity.nbt.Item.tag.Antimatter;
        if (amount >= 100) {
            itemEntity.mergeNbt({
                Item: {
                    Count: count,
                    id: "materialfactory:filled_antimatter_ball",
                },
            });
            const { x, y, z } = itemEntity;
            let random = Utils.getRandom();
            let deltaMovement = new Vec3d(
                random.nextGaussian() * 0.01 + 0.03,
                random.nextGaussian() * 0.05 + 0.1,
                random.nextGaussian() * 0.01 + 0.03
            );

            itemEntity.setDeltaMovement(deltaMovement);
            itemEntity.setNoGravity(true);
            itemEntity.setGlowing(true);
            itemEntity.level.spawnParticles('end_rod', true, x, y, z, 0, 0, 0, 20, 0.1);
            ctx.level.broadcastEntityEvent(itemEntity, 35);
            let lightningBoltEntity = ctx.level.getBlock(itemEntity.blockPosition()).createEntity('lightning_bolt');
            lightningBoltEntity.setVisualOnly(true);
            lightningBoltEntity.moveTo(Vec3d.atCenterOf(itemEntity.blockPosition()));
            lightningBoltEntity.spawn();
            itemEntity.setPickupDelay(35)
            return;
        }

        itemEntity.mergeNbt({
            Item: {
                Count: count,
                id: "materialfactory:unfilled_antimatter_ball",
                tag: {
                    Antimatter: amount + 1,
                },
            },
        });
    };
});

LycheeEvents.customAction("consume_cauldron", (event) => {
    event.action.applyFunc = (recipe, ctx, times) => {
        /**@type {Internal.ItemEntity} */
        let itemEntity = ctx.getParam('this_entity');
        let blockPos = itemEntity.blockPosition()
        ctx.level.getBlock(blockPos).set("minecraft:cauldron")
        ctx.level.playSound(null, blockPos.x, blockPos.y, blockPos.z, "minecraft:item.bucket.fill", "ambient", 0.5, 1)
    }
})

const $Boolean = Java.loadClass("java.lang.Boolean")
const $EntityFollowProjectile = Java.loadClass('com.hollingsworth.arsnouveau.common.entity.EntityFollowProjectile');
LycheeEvents.customAction("arcane_platform_transform", (event) => {
    event.action.applyFunc = (recipe, ctx, times) => {
        /**@type {Internal.ItemEntity} */
        let itemEntity = ctx.getParam('this_entity');
        let pos = itemEntity.blockPosition()
        let level = ctx.level
        let block = level.getBlock(pos)
        let player = level.getNearestPlayer(pos.x, pos.y, pos.z, 20, false)
        let rotation1 = global.MULTIBLOCK.SourceFluidTank().validate(level, pos)
        // 获取所有蜡烛位置（字符 'B' 和 'C'）
        let charPositions = getMultiblockCharPositions(
            global.MULTIBLOCK.SourceFluidTank(),
            level,
            pos,
            rotation1,
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

        // 按位置排序（确保每次顺序一致）
        allCandlePositions.sort((a, b) => {
            if (a.pos.y !== b.pos.y) return a.pos.y - b.pos.y
            if (a.pos.x !== b.pos.x) return a.pos.x - b.pos.x
            return a.pos.z - b.pos.z
        })

        // 获取当前激活进度
        let currentValue = block.entity.persistentData.getInt("power")
        if (!currentValue) {
            block.entity.persistentData.putInt("power", 0)
        }

        // 找到当前应该点燃的蜡烛索引（根据进度）
        let candleToLightIndex = currentValue % allCandlePositions.length

        // 检查并点燃指定的蜡烛
        let candleLit = false
        for (let i = 0; i < allCandlePositions.length; i++) {
            if (i === candleToLightIndex) {
                let candle = allCandlePositions[i]
                let worldPos = candle.pos
                let candleBlock = level.getBlock(worldPos)

                // 检查是否需要点燃
                if (candleBlock.id.includes("candle") && candleBlock.properties.lit !== 'true' && currentValue < 9) {
                    let particle = new $EntityFollowProjectile(
                        level,
                        pos,
                        worldPos,
                        255, 128, 0
                    );
                    level.addFreshEntity(particle);
                    level.server.scheduleInTicks(15, () => {
                        let newBlockState = candleBlock.blockState.setValue(BlockProperties.LIT, $Boolean.TRUE)
                        level.setBlockAndUpdate(worldPos, newBlockState);
                        // 粒子效果
                        level.spawnParticles(
                            "flame",
                            false,
                            worldPos.x + 0.5,
                            worldPos.y + 1,
                            worldPos.z + 0.5,
                            0.2,
                            0.2,
                            0.2,
                            10,
                            0.05
                        )

                        // 烟雾效果
                        level.spawnParticles(
                            "smoke",
                            false,
                            worldPos.x + 0.5,
                            worldPos.y + 0.8,
                            worldPos.z + 0.5,
                            0.1,
                            0.1,
                            0.1,
                            5,
                            0.02
                        )

                        // 通用点燃声音
                        level.playSound(
                            null,
                            worldPos.x,
                            worldPos.y,
                            worldPos.z,
                            "minecraft:item.flintandsteel.use",
                            "blocks",
                            1.0,
                            1.0
                        )

                        level.playSound(
                            null,
                            worldPos.x,
                            worldPos.y,
                            worldPos.z,
                            "minecraft:block.candle.ambient",
                            "blocks",
                            0.8,
                            1.2
                        )
                    })
                    candleLit = true
                    break
                }
            }
        }

        // 更新激活进度
        if (currentValue < 9) {
            let newValue = currentValue + 1
            block.entity.persistentData.putInt("power", newValue)
            if (player) {
                player.setStatusMessage(Text.translatable("message.multiblock.source_fluid_tank.activate", newValue.toFixed()))
            }

            // 如果这是第9次激活，完成多方块转换
            if (newValue === 9) {
                // 使用延时确保效果能显示
                level.server.scheduleInTicks(15, () => {
                    // 转换方块
                    block.set("materialfactory:source_fluid_tank")

                    // 创建视觉效果
                    let displayEntity = block.createEntity("item_display")
                    displayEntity.moveTo(Vec3d.atCenterOf(block.pos))
                    displayEntity.spawn()
                    level.broadcastEntityEvent(displayEntity, 35)
                    displayEntity.discard()

                    // 激活时的粒子效果
                    level.spawnParticles(
                        "happy_villager",
                        false,
                        block.pos.x + 0.5,
                        block.pos.y + 1.5,
                        block.pos.z + 0.5,
                        0.5,
                        0.5,
                        0.5,
                        50,
                        0.5
                    )

                    // 激活时的声音
                    level.playSound(
                        null,
                        block.pos.x,
                        block.pos.y,
                        block.pos.z,
                        "minecraft:block.beacon.activate",
                        "blocks",
                        4,
                        0.8
                    )
                })
                // 将所有蜡烛重新设置为未点燃状态
                allCandlePositions.forEach(candle => {
                    let worldPos = candle.pos
                    let candleBlock = level.getBlock(worldPos)

                    let particle = new $EntityFollowProjectile(
                        level,
                        worldPos,
                        pos,
                        255, 25, 180
                    );
                    level.addFreshEntity(particle);
                    // 检查蜡烛是否已点燃
                    if (candleBlock.id.includes("candle") && candleBlock.properties.lit === 'true') {
                        // 熄灭蜡烛
                        let newBlockState = candleBlock.blockState.setValue(BlockProperties.LIT, $Boolean.FALSE)
                        level.setBlockAndUpdate(worldPos, newBlockState);

                        // 熄灭时的粒子效果
                        level.spawnParticles(
                            "large_smoke",
                            false,
                            worldPos.x + 0.5,
                            worldPos.y + 0.5,
                            worldPos.z + 0.5,
                            0.1,
                            0.1,
                            0.1,
                            3,
                            0.02
                        )

                        // 熄灭时的声音
                        level.playSound(
                            null,
                            worldPos.x,
                            worldPos.y,
                            worldPos.z,
                            "minecraft:block.candle.extinguish",
                            "blocks",
                            0.5,
                            1.0
                        )
                    }
                })
            }
        }
    }
})

LycheeEvents.customAction("break_bifrost", (event) => {
    event.action.applyFunc = (recipe, ctx, times) => {
        /**@type {Internal.ItemEntity} */
        let itemEntity = ctx.getParam('this_entity');
        let pos = itemEntity.blockPosition()
        let level = ctx.level
        let block = level.getBlock(pos)
        let startPos = block.pos.below(3);
        if (level.getBlock(startPos).id != "botania:bifrost_perm") return;

        // 收集同一层（只按东西南北方向）的连接方块，并记录距离
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

            let adjacentPositions = [p.offset(1, 0, 0), p.offset(-1, 0, 0), p.offset(0, 0, 1), p.offset(0, 0, -1)];
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

        // 对其它位置按距离延迟（每层 10 ticks）执行销毁
        results.forEach((result) => {
            if (result.dist === 0) return; // 中心已处理
            const delay = result.dist * 10; // 每层间隔 10 ticks（约 0.5s）
            level.server.scheduleInTicks(delay, () => {
                // 再次确认该位置仍然为目标方块（防止其他事件已改变）
                if (level.getBlock(result.pos).id === "botania:bifrost_perm") {
                    level.destroyBlock(result.pos, false);
                }
            });
        });
    }
})

LycheeEvents.customAction("fire_brazier", (event) => {
    event.action.applyFunc = (recipe, ctx, times) => {
        /**@type {Internal.ItemEntity} */
        let SourceItemEntities = ctx.getParam('this_entity');
        let { level, block } = SourceItemEntities
        let rotation = global.MULTIBLOCK.SourceFluidExtractor().validate(level, block.pos);
        let BrazierPositions = getMultiblockCharacterPositions(global.MULTIBLOCK.SourceFluidExtractor(), level, block.pos, rotation, 'I');
        for (let brazierPos of BrazierPositions) {
            let brazierPosAbove = brazierPos.above(4);
            let x = brazierPosAbove.x;
            let y = brazierPosAbove.y;
            let z = brazierPosAbove.z;

            level.runCommandSilent(`data modify block ${x} ${y} ${z} context.started set value 1.0`);
            level.server.scheduleInTicks(100, () => {
                level.getBlock(brazierPosAbove).set("air");
                level.getBlock(brazierPosAbove).set("ars_nouveau:ritual_brazier");
                level.playSound(null, brazierPosAbove.x, brazierPosAbove.y, brazierPosAbove.z, "minecraft:block.fire.extinguish", "blocks", 0.5, 1.0);
            });
        }
    }
})

LycheeEvents.customAction("itemdisplay_place", (event) => {
    event.action.applyFunc = (recipe, ctx, times) => {
        /**@type {Internal.ItemEntity} */
        let itemEntity = ctx.getParam('this_entity');
        let { level, block } = itemEntity
        let rotation = global.MULTIBLOCK.SourceFluidExtractor().validate(level, block.pos);
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

            displays.push({ display: display, startAngle: startAngle });

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
                        {x: 1, y: 0, z: 0},
                        {x: -1, y: 0, z: 0},
                        {x: 0, y: 0, z: 1},
                        {x: 0, y: 0, z: -1},
                        {x: 1, y: 0, z: 1},
                        {x: -1, y: 0, z: 1},
                        {x: 1, y: 0, z: -1},
                        {x: -1, y: 0, z: -1},
                        {x: 0, y: 1, z: 0},
                        {x: 0, y: -1, z: 0},
                        {x: 1, y: 1, z: 1},
                        {x: -1, y: 1, z: 1},
                        {x: 1, y: 1, z: -1},
                        {x: -1, y: 1, z: -1},
                        {x: 1, y: -1, z: 1},
                        {x: -1, y: -1, z: 1},
                        {x: 1, y: -1, z: -1},
                        {x: -1, y: -1, z: -1}
                    ];

                    directions.forEach((dir) => {
                        let particle2 = new $EntityFollowProjectile(
                            level,
                            block.pos.above(2), // 起始点
                            block.pos.above(2).offset(dir.x, dir.y, dir.z),
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
                        0, 0, 0,
                        1,
                        0
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
    }
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

            displays.forEach(function (displayData) {
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

            displays.forEach(function (displayData) {
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
                    displays.forEach(function (displayData) {
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

// 辅助函数：获取多方块中特定字符的所有位置并排序
function getMultiblockCharPositions(multiblock, level, anchorPos, rotation, targetChars) {
    let simulation = multiblock.simulate(level, anchorPos, rotation, false)
    if (!simulation) return {}

    let positions = {}
    // 初始化每个字符的位置数组
    targetChars.forEach(char => {
        positions[char] = []
    })

    simulation.getSecond().forEach(result => {
        let char = result.getCharacter()
        if (char && positions[char] !== undefined) {
            positions[char].push({
                pos: result.getWorldPosition(),
                isValid: result.test(level, rotation)
            })
        }
    })

    // 对每个字符的位置排序（确保每次顺序一致）
    Object.keys(positions).forEach(char => {
        positions[char].sort((a, b) => {
            if (a.pos.y !== b.pos.y) return a.pos.y - b.pos.y
            if (a.pos.x !== b.pos.x) return a.pos.x - b.pos.x
            return a.pos.z - b.pos.z
        })
    })

    return positions
}