ServerEvents.recipes(event => {
    event.custom({
        "type":"thermal:press",
        "ingredients":[
            {"item":"mysticalagriculture:nature_essence"}
        ],
        "result":
        [
            {"fluid":"thermal:latex","amount":250}
        ],
        "energy":1000,
        "experience":0
    })
})