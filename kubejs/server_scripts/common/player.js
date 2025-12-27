PlayerEvents.loggedIn(event => {
    event.server.scheduleInTicks(20, () => {
        
    })
})
MEJSEvents.standOnFluid(event=>{
    /** @type {Internal.Player_} */
    let player = event.entity
    let { level } = player
    if ( player.isPlayer() && player.isInFluidType(Fluid.of('materialfactory:electric_fluid').fluid.fluidType)) {
        let SOUND_COOLDOWN = 40
        let persistantData = player.persistentData
        let lastPlayed = persistantData.lastZapSound || 0
        let currentTime = level.time
        if (currentTime - lastPlayed >= SOUND_COOLDOWN) {
            persistantData.lastZapSound = currentTime
            player.potionEffects.add('createaddition:shocking', 60, 0)
            player.potionEffects.add('minecraft:instant_damage', 1, 0)
            player.potionEffects.add('cofh_core:shocked', 60, 2)
            level.playSound(null,player.x,player.y,player.z,"createaddition:loud_zap","blocks",1,1)
            let particleCount = 15;
            let speedFactor = 0.2;
            for (let i = 0; i < particleCount; i++) {
                level.spawnParticles("minecraft:electric_spark",true,
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