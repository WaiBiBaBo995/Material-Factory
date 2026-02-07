const $SkyblockCreateTeamEvent = Java.loadClass("de.melanx.skyblockbuilder.events.SkyblockCreateTeamEvent")
NativeEvents.onEvent($SkyblockCreateTeamEvent, event=>{
    console.log("sky server")
})