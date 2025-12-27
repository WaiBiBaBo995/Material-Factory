LycheeEvents.customCondition('can_see_sky', (event) => {
    event.condition.testFunc = (recipe, ctx, times) => {
        return ctx.level.getBlock(ctx.getParam('lychee:block_pos')).canSeeSky ? times : 0;
    };
});

LycheeEvents.customCondition('is_noon', (event) => {
    event.condition.testFunc = (recipe, ctx, times) => {
        const timeOfDay = ctx.level.getDayTime() % 24000;
        const isNoon = timeOfDay >= 5500 && timeOfDay <= 6500;

        return isNoon ? times : 0;
    };
});

LycheeEvents.customCondition('is_midnight', (event) => {
    event.condition.testFunc = (recipe, ctx, times) => {
        const timeOfDay = ctx.level.getDayTime() % 24000;
        const isMidnight = timeOfDay >= 17500 && timeOfDay <= 18500;

        return isMidnight ? times : 0;
    };
});

LycheeEvents.customCondition('is_cauldron', (event) => {
    event.condition.testFunc = (recipe, ctx, times) => {
        /** @type {Internal.ItemEntity}*/
        let itemEntity = ctx.getParam('this_entity')
        const block = ctx.level.getBlock(itemEntity.blockPosition())
        const cauldron = block.id == "amendments:liquid_cauldron" && block.entityData.get("FluidHolder").get("id") == "crazyae2addons:research_fluid"
        return cauldron ? times : 0;
    }
})

LycheeEvents.customCondition('source_fluid_tank', (event) => {
    event.condition.testFunc = (recipe, ctx, times) => {
        let itemEntity = ctx.getParam('this_entity');
        const { level, block } = itemEntity;
        const multiblock = global.MULTIBLOCK.SourceFluidTank()
        let currentValue = block.entity.persistentData.getInt("power")
        let player = level.getNearestPlayer(block.pos.x, block.pos.y, block.pos.z, 20, false)
        if (block.entityData.itemStack.id != "ars_nouveau:source_jar") return;
        if (multiblock.validate(level, block.pos, 'none')) {
            return times;
        }
        if (currentValue == 9) {
            return 0;
        }
        player.setStatusMessage(Text.translatable("message.multiblock.source_fluid_tank.unform"))
        return 0;
    };
});

LycheeEvents.customCondition('source_fluid_extractor', (event) => {
    event.condition.testFunc = (recipe, ctx, times) => {
        /** @type {Internal.ItemEntity}*/
        let itemEntity = ctx.getParam('this_entity');
        const { level, block } = itemEntity;
        const rotation = global.MULTIBLOCK.SourceFluidExtractor().validate(level, block.pos)
        let player = level.getNearestPlayer(block.pos.x, block.pos.y, block.pos.z, 30, false)
        if (block.id != "ars_nouveau:arcane_pedestal") return 0;
        if (block.entityData.itemStack.id != "ars_nouveau:arcane_core") return;
        if (level.isClientSide()) return;
        if (!player) {
            console.log("can't find player")
            return 0;
        } else {
            if (rotation === null) {
                player.setStatusMessage(Text.translatable("message.multiblock.source_fluid_tank.unform"))
                return 0;
            }

            let allLit = checkAllCandlesLit(global.MULTIBLOCK.SourceFluidExtractor(), level, block.pos, rotation)
            player.setStatusMessage(allLit ? Text.translatable("message.multiblock.source_fluid.candle_fired") : Text.translatable("message.multiblock.source_fluid.candle_unfired"))
            if (allLit) {
                let BrazierPositions = getMultiblockCharacterPositions(global.MULTIBLOCK.SourceFluidExtractor(), level, block.pos, rotation, 'I')
                let allRitualsValid = checkBrazierRituals(level, BrazierPositions, player)
                if (allRitualsValid) {
                    player.tell(Text.translatable("message.multiblock.source_fluid.ritual_valid"))
                    return times;
                } else {
                    return 0;
                }
            }
        }
    }
});

//验证蜡烛点燃
function checkAllCandlesLit(multiblock, level, anchorPos, rotation) {
    if (!rotation) return false

    let simulation = multiblock.simulate(level, anchorPos, rotation, false)
    if (!simulation) return false

    let allLit = true

    simulation.getSecond().forEach(result => {
        let char = result.getCharacter()
        if (char === 'B' || char === 'C') {
            let worldPos = result.getWorldPosition()
            let blockState = level.getBlock(worldPos)

            if (blockState.id.includes("candle") && blockState.properties.lit !== 'true') {
                allLit = false
            }
        }
    })

    return allLit
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

// 检查仪式火盆
function checkBrazierRituals(level, brazierPositions, player) {
    for (let brazierPos of brazierPositions) {
        //获取的位置不知道为什么是该方块下方4格
        let brazierBlock = level.getBlock(brazierPos.above(4))
        let ArchWood = level.getBlock(brazierPos)

        // 调试信息
        //console.log(`检查祭坛: ${brazierPos}, 木头: ${ArchWood.id}, 仪式: ${brazierBlock.entityData.ritualID}`)

        let expectedRitual = null
        let ritualName = Text

        switch (ArchWood.id) {
            case "ars_nouveau:red_archwood_wood":
                expectedRitual = "ars_nouveau:ritual_sunrise"
                ritualName = Text.translatable("item.ars_nouveau.ritual_sunrise")
                break
            case "ars_nouveau:blue_archwood_wood":
                expectedRitual = "ars_nouveau:ritual_moonfall"
                ritualName = Text.translatable("item.ars_nouveau.ritual_moonfall")
                break
            case "ars_nouveau:purple_archwood_wood":
                expectedRitual = "ars_nouveau:ritual_gravity"
                ritualName = Text.translatable("item.ars_nouveau.ritual_gravity")
                break
            case "ars_nouveau:green_archwood_wood":
                expectedRitual = "ars_nouveau:ritual_awakening"
                ritualName = Text.translatable("item.ars_nouveau.ritual_awakening")
                break
            default:
                return false
        }

        if (brazierBlock.entityData.ritualID !== expectedRitual) {
            let ArchWoodName = Text.translatable(`block.ars_nouveau.${ArchWood.id.split(':')[1]}`)
            let BrazierPos = brazierPos.above(4)
            if (!brazierBlock.entityData.ritualID) {
                player.tell(Text.translatable("message.multiblock.source_fluid.ritual_mismatch1", ritualName, ArchWoodName, BrazierPos))
            } else {
                let actualRitual = Text.translatable(`item.ars_nouveau.${brazierBlock.entityData.ritualID.split(':')[1]}`)
                player.tell(Text.translatable("message.multiblock.source_fluid.ritual_mismatch2", ritualName, actualRitual, ArchWoodName, BrazierPos))
            }
            player.playNotifySound("minecraft:block.note_block.didgeridoo", "blocks", 5, 1)
            return false
        }
    }

    return true
}