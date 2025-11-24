StartupEvents.init(event=>{
    Java.loadClass('cofh.thermal.core.common.config.ThermalCoreConfig').deviceAugments = 5
    Java.loadClass('cofh.thermal.core.common.config.ThermalCoreConfig').dynamoAugments = 12
    Java.loadClass('cofh.thermal.core.common.config.ThermalCoreConfig').machineAugments = 9
    Java.loadClass('cofh.thermal.core.common.config.ThermalCoreConfig').storageAugments = 4
    Java.loadClass('cofh.thermal.core.common.config.ThermalCoreConfig').toolAugments = 4
})