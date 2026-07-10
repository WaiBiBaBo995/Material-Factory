ServerEvents.recipes(event => {
    //金棒
    event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "tag": "tconstruct:casts/multi_use/rod"
        },
        "conditions": [
            {
            "type": "mantle:tag_filled",
            "tag": "forge:rods/gold"
            }
        ],
        "cooling_time": 43,
        "fluid": {
            "amount": 45,
            "tag": "forge:molten_gold"
        },
        "result": {
            "tag": "forge:rods/gold"
        }
    })
    
    event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item": "minecraft:amethyst_shard"
        },
        "cast_consumed": true,
        "cooling_time": 100,
        "fluid": {
            "amount": 250,
            "tag": "tconstruct:magma"
        },
        "result": "tconstruct:ichor_slime_crystal"
    })
})