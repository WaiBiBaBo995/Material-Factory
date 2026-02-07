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