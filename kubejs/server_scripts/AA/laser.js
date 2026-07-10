ServerEvents.recipes(event => {
    event.custom({
        "type": "actuallyadditions:laser",
        "energy": 100000,
        "ingredient": {
            "tag": 'forge:leather'
        },
        "result": {
            "item": 'minecraft:phantom_membrane'
        }
    })

    event.custom({
        "type": "actuallyadditions:laser",
        "energy": 100,
        "ingredient": {
            "item": 'botania:quartz_dark'
        },
        "result": {
            "item": 'actuallyadditions:black_quartz'
        }
    })
})