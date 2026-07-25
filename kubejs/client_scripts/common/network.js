const Minecraft = Java.loadClass('net.minecraft.client.Minecraft')
const CelesteConfig = Java.loadClass('org.infernalstudios.celesteconfig.Constants')
const ItemStack = Java.loadClass('net.minecraft.world.item.ItemStack')
const $PatchouliAPI = Java.loadClass('vazkii.patchouli.api.PatchouliAPI');

NetworkEvents.dataReceived("sunandmoon", event =>{
    const SunSize = event.data.getDouble("Size")
    console.log(SunSize)
    CelesteConfig.sunHeight = SunSize;
    CelesteConfig.sunWidth = SunSize;
})

NetworkEvents.dataReceived("item_render", event=>{
    const itemId = event.data.get("item")
    const itemStack = new ItemStack(itemId)
    Minecraft.getInstance().gameRenderer.displayItemActivation(itemStack)
})

NetworkEvents.dataReceived("clear_multiblock", event=>{
    $PatchouliAPI.get().clearMultiblock()
})

NetworkEvents.dataReceived("show_multiblock", event=>{
    const multiblockName = event.data.getString("MultiblockName")
    const blockPosX = event.data.getInt("BlockPosX")
    const blockPosY = event.data.getInt("BlockPosY")
    const blockPosZ = event.data.getInt("BlockPosZ")
    const rotation = event.data.getString("Rotation")
    $PatchouliAPI.get().showMultiblock($PatchouliAPI.get().getMultiblock(multiblockName), null, new BlockPos(blockPosX, blockPosY, blockPosZ), rotation)
})

NetworkEvents.dataReceived('camera_shake', event => {
    const shakenumber = event.data.getInt('number')
    global.addShake(shakenumber)
})