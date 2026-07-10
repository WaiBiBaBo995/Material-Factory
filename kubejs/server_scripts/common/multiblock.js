const $PatchouliAPI = Java.loadClass('vazkii.patchouli.api.PatchouliAPI');

BlockEvents.rightClicked("ars_nouveau:arcane_platform", (event) => {
    const { item, level, block, player } = event
    if (item == "ars_nouveau:source_jar" && !level.isClientSide()) {
        //预览多方块结构
        player.sendData("show_multiblock", {MultiblockName: "materialfactory:source_fluid_tank", BlockPosX: block.pos.offset(0, -1, 0).x, BlockPosY: block.pos.offset(0, -1, 0).y, BlockPosZ: block.pos.offset(0, -1, 0).z, Rotation: "none"})
    }
    if (item != "ars_nouveau:source_jar" && !level.isClientSide() && block.entityData.itemStack.id == "ars_nouveau:source_jar") {
        player.sendData("clear_multiblock", {})
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
        player.sendData("show_multiblock", {MultiblockName: "materialfactory:source_fluid_extractor", BlockPosX: block.pos.offset(0, -1, 0).x, BlockPosY: block.pos.offset(0, -1, 0).y, BlockPosZ: block.pos.offset(0, -1, 0).z, Rotation: "counterclockwise_90"})
    }
    if (item != "ars_nouveau:arcane_core" && !level.isClientSide() && block.entityData.itemStack.id == "ars_nouveau:arcane_core") {
        player.sendData("clear_multiblock", {})
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