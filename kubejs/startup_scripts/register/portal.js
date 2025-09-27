const $CustomPortalBuilder = Java.loadClass("net.kyrptonaught.customportalapi.api.CustomPortalBuilder")
const $BuiltinDimensionTypes = Java.loadClass("net.minecraft.world.level.dimension.BuiltinDimensionTypes")

StartupEvents.postInit(event=>{
    $CustomPortalBuilder
        .beginPortal()
        ["frameBlock(net.minecraft.world.level.block.Block)"](Blocks.GLOWSTONE)
        .forcedSize(2,3)
        .destDimID($BuiltinDimensionTypes.NETHER_EFFECTS)
        .tintColor(0x87CEFA)
        .lightWithFluid("industrialforegoing:ether_gas")
        .registerPortal();
})