PlayerEvents.loggedIn(event => {
    event.server.scheduleInTicks(20, () => {

    })
})
MEJSEvents.standOnFluid(event => {
    /** @type {Internal.Player_} */
    let player = event.entity
    let { level } = player
    if (player.isPlayer() && player.isInFluidType(Fluid.of('materialfactory:electric_fluid').fluid.fluidType)) {
        let SOUND_COOLDOWN = 40
        let persistantData = player.persistentData
        let lastPlayed = persistantData.lastZapSound || 0
        let currentTime = level.time
        if (currentTime - lastPlayed >= SOUND_COOLDOWN) {
            persistantData.lastZapSound = currentTime
            player.potionEffects.add('createaddition:shocking', 60, 0)
            player.potionEffects.add('minecraft:instant_damage', 1, 0)
            player.potionEffects.add('cofh_core:shocked', 60, 2)
            level.playSound(null, player.x, player.y, player.z, "createaddition:loud_zap", "blocks", 1, 1)
            let particleCount = 15;
            let speedFactor = 0.2;
            for (let i = 0; i < particleCount; i++) {
                level.spawnParticles("minecraft:electric_spark", true,
                    player.x + (Math.random() - 0.5) * 0.5,
                    player.y + Math.random() * 1.8,
                    player.z + (Math.random() - 0.5) * 0.5,
                    (Math.random() - 0.5) * speedFactor,
                    (Math.random() - 0.5) * speedFactor,
                    (Math.random() - 0.5) * speedFactor,
                    5,
                    0.5
                )
            }
        }
    }
})

PlayerEvents.tick(event => {
    let { player } = event
    let { level } = player
    if (level.time % 20 != 0) return;
    player.inventory.items.forEach((stack) => {
        if (stack.id == "materialfactory:annulus") {
            if (!stack.nbt) {
                stack.setNbt({
                    "up": 0,
                    "down": 0,
                    "left": 0,
                    "right": 0
                })
            }
            if (player.isFallFlying()) {
                let upcount = stack.nbt.getDouble('up') || 0
                if (upcount >= 100) {
                    level.broadcastEntityEvent(player, 35)
                    player.sendData("item_render", { item: "materialfactory:arrow_up" })
                    stack.count--
                    player.give("materialfactory:arrow_up")
                } else {
                    stack.nbt.putDouble('up', upcount + 1)
                }
            } else if (player.isVisuallyCrawling()) {
                let downcount = stack.nbt.getDouble('down') || 0
                if (downcount >= 100) {
                    level.broadcastEntityEvent(player, 35)
                    player.sendData("item_render", { item: "materialfactory:arrow_down" })
                    stack.count--
                    player.give("materialfactory:arrow_down")
                } else {
                    stack.nbt.putDouble('down', downcount + 1)
                }
            } else if (player.isScoping()) {
                let leftcount = stack.nbt.getDouble('left') || 0
                if (leftcount >= 100) {
                    level.broadcastEntityEvent(player, 35)
                    player.sendData("item_render", { item: "materialfactory:arrow_left" })
                    stack.count--
                    player.give("materialfactory:arrow_left")
                } else {
                    stack.nbt.putDouble('left', leftcount + 1)
                }
            } else if (player.isSwimming()) {
                let rightcount = stack.nbt.getDouble('right') || 0
                if (rightcount >= 100) {
                    level.broadcastEntityEvent(player, 35)
                    player.sendData("item_render", { item: "materialfactory:arrow_right" })
                    stack.count--
                    player.give("materialfactory:arrow_right")
                } else {
                    stack.nbt.putDouble('right', rightcount + 1)
                }
            }
        }
    })
})