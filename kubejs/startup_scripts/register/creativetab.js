StartupEvents.modifyCreativeTab('kubejs:tab', (event) => {
    event.setDisplayName('Material Factory');
    event.setIcon(Item.of('materialfactory:anon_chihaya'))
    event.remove("thermal_parallel:argument_parallel_4")
    event.remove("thermal_parallel:argument_parallel_5")
    event.remove("thermal_parallel:argument_parallel_6")
})

StartupEvents.modifyCreativeTab("thermal:thermal.items", (event) => {
    event.add("thermal_parallel:argument_parallel_4")
    event.add("thermal_parallel:argument_parallel_5")
    event.add("thermal_parallel:argument_parallel_6")
})