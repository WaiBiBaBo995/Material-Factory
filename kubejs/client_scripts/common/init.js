ClientEvents.init(event => {
    const { player } = event
    let playtimeDay = player.stats.playTime / 24000

    const lastScale = player.persistentData.getDouble('celestial_sun_scale')
    const currentScale = calculateSunScale(playtimeDay)

    if (Math.abs(currentScale - lastScale) > 0.01) {
        const CelestialConfigOptions = Java.loadClass('org.infernalstudios.celesteconfig.config.CelestialConfigOptions')
        CelestialConfigOptions.sunWidthScalar = currentScale
        CelestialConfigOptions.sunHeightScalar = currentScale
        
        player.persistentData.putDouble('celestial_sun_scale', currentScale)
        console.log(`太阳缩放等级已更新: ${currentScale} (游戏天数: ${playtimeDay.toFixed(2)})`)
    }
})

function calculateSunScale(playtimeDay) {
    const scaleConfig = [
        { threshold: 100, scale: 6 },
        { threshold: 90, scale: 5.5 },
        { threshold: 80, scale: 5 },
        { threshold: 70, scale: 4.5 },
        { threshold: 60, scale: 4 },
        { threshold: 50, scale: 3.5 },
        { threshold: 40, scale: 3 },
        { threshold: 30, scale: 2.5 },
        { threshold: 20, scale: 2 },
        { threshold: 10, scale: 1.5 }
    ]
    
    let scale = 1.0
    for (const config of scaleConfig) {
        if (playtimeDay >= config.threshold) {
            scale = config.scale
            break
        }
    }
    return scale
}