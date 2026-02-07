ServerEvents.recipes(event => {
    event.custom({
        "type": "tconstruct:entity_melting",
        "damage": 2,
        "entity": { "type": "slimeoverhaul:flame_slime" },
        "result": { "amount": 25, "tag": "minecraft:lava" }
    })
})