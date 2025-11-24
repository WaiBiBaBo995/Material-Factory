ServerEvents.recipes(event => {
    //水史莱姆球
    event.custom({
        "type": "thermal:bottler",
        "ingredients": [
            {
                "item": 'slimeoverhaul:earth_slime_ball'
            },
            {
                "fluid": "minecraft:water",
                "amount": 250
            }
        ],
        "result": [
            {
                "item": 'slimeoverhaul:water_slime_ball'
            }
        ],
        "energy": 1000,
        "experience": 0.1
    })

    //红石通量线圈
    event.custom({
        "type": "thermal:bottler",
        "ingredients": [
            {
                "tag": 'forge:plates/gold'
            },
            {
                "fluid": "thermal:redstone",
                "amount": 250
            }
        ],
        "result": [
            {
                "item": "thermal:rf_coil"
            }
        ],
        "energy": 1000,
        "experience": 0.1
    })
})