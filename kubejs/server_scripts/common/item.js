ColdSweatEvents.registries(event =>
{
    event.addInsulator(insulator =>
        insulator.items("materialfactory:thermostat_charm")
                 // Insulation that the item provides (cold, heat)
                 .insulation(1000, 1000)
                 // Adaptive insulation that the item provides (insulation, adaptSpeed)
                 .adaptiveInsulation(1000, 1)
                 // Insulation type (item, armor, or curio)
                 .slot("curio")
                 // Adds immunity to a temperature modifier
                 .immuneToModifier("cold_sweat:on_fire", 1)
                 // true: items with more than 2 total insulation will take up multiple slots
                 // false: item will take up only one slot, no matter how much insulation it has
                 // Only used for the "item" insulation type
                 .fillSlots(false))
})

//电荷线圈
let Minecraft = Java.loadClass('net.minecraft.client.Minecraft')
ItemEvents.rightClicked('materialfactory:charge_spool', event =>{
    let itemStack = event.getItem()
    let player = event.player
    if (!player) return;
    if (itemStack.damageValue >= 128) {
            player.cooldowns.addCooldown(itemStack.item, 40)
            Minecraft.getInstance().gameRenderer.displayItemActivation(itemStack)
            event.level.playSound(null,event.player.x,event.player.y,event.player.z,"minecraft:item.totem.use","players",1.0,1.0)
        if (!player.isCreative()) {
            event.server.scheduleInTicks(40, () => {
                itemStack.shrink(1)
                player.potionEffects.add('createaddition:shocking', 60, 0)
                player.potionEffects.add('minecraft:instant_damage', 1, 0)
                player.potionEffects.add('cofh_core:shocked', 60, 2)
                event.level.playSound(null,player.x,player.y,player.z,"entity.generic.explode","players",1,2)
            })
        }
    }
})

//千早精华
ItemEvents.rightClicked('materialfactory:anon', event =>{
    let itemStack = event.getItem()
    let player = event.player
    if (!player) return;
    Minecraft.getInstance().gameRenderer.displayItemActivation(itemStack)
    event.server.scheduleInTicks(12, () => {
    event.level.playSound(null,event.player.x,event.player.y,event.player.z,"darkdoppelganger:boss_stun","players",1,1)
    })
})