const $AnvilUpdateEvent = Java.loadClass("net.minecraftforge.event.AnvilUpdateEvent");
NativeEvents.onEvent($AnvilUpdateEvent, event => {
    const left = event.left;
    const right = event.right;
    if (!left || !right) return;
    if (left.id == "materialfactory:charge_spool" && right.id == "minecraft:enchanted_book") {
        event.setCanceled(true);
    }
})