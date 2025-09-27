ServerEvents.recipes(event =>{
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
})