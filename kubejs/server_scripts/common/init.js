ServerEvents.loaded(event=>{
    if (!event.server.persistentData.getBoolean('has_loaded')) {
    event.server.gameRules.set("artifacts.diggingClaws.toolTier", "4")
    event.server.gameRules.set("doInsomnia", "false")
    event.server.persistentData.putBoolean('has_loaded', true)
    }
})