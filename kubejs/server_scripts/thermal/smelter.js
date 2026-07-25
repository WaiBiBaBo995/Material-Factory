ServerEvents.recipes(event => {

    //ad压缩机
    event.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
                "item": 'thermal:machine_press',
                "count": 1
            },
            {
                "item": 'mekanism:ultimate_compressing_factory',
                "count": 1
            }
        ],
        "result": [
            {
                "item": 'ad_astra:compressor',
                "count": 1
            }
        ],
        "energy": 2000000
    })

    //恒星锭
    event.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
                "value":
                    [
                        { "tag": "forge:ingots/netherite" },
                        { "tag": "forge:dusts/netherite" }
                    ], "count": 4
            },
            { "tag": "forge:nether_stars", "count": 1 },
            {
                "value":
                    [
                        { "tag": "forge:ingots/melodium" }
                    ],
                "count": 2
            }
        ],
        "result":
            [
                {
                    "item": "thermalendergy:stellarium_ingot",
                    "count": 2
                }
            ],
        "energy": 64000
    }).id('thermalendergy:machine/smelter/stellarium_ingot')

    //旋律锭
    event.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
                "item": "enderio_evolution:crystalline_pink_slime_ingot",
                "count": 1
            },
            {
                "item": "minecraft:popped_chorus_fruit",
                "count": 1
            },
            {
                "item": "enderio:end_steel_ingot",
                "count": 1
            }
        ],
        "result": [
            {
                "item": "thermalendergy:melodium_ingot",
                "count": 1
            }
        ],
        "energy": 32000
    }).id('thermalendergy:machine/smelter/melodium_ingot')
})