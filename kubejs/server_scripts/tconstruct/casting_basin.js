ServerEvents.recipes(event => {
    event.custom({
        "type": "tconstruct:casting_basin",
        "cooling_time": 141,
        "fluid": {
            "amount": 750,
            "tag": "minecraft:lava"
        },
        "result": "minecraft:magma_block"
    })
})