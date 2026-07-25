ServerEvents.recipes(event => {
    //虚空机器框架
    event.custom({
        "type": "enderio:alloy_smelting",
        "energy": 3600,
        "experience": 0.3,
        "inputs": [
            {
                "count": 1,
                "ingredient": {
                    "item": 'materialfactory:industrial_dye_blend'
                }
            },
            {
                "count": 1,
                "ingredient": {
                    "item": 'materialfactory:simple_machine_chassis'
                }
            }
        ],
        "result": {
            "item": 'enderio:void_chassis'
        }
    }).id('enderio:void_chassis')

    //注魂框架
    event.custom({
        "type": "enderio:alloy_smelting",
        "energy": 3600,
        "experience": 0.3,
        "inputs": [
            {
                "count": 1,
                "ingredient": {
                    "item": 'materialfactory:soul_attuned_dye_blend'
                }
            },
            {
                "count": 1,
                "ingredient": {
                    "item": 'materialfactory:simple_machine_chassis'
                }
            }
        ],
        "result": {
            "item": 'enderio:ensouled_chassis'
        }
    }).id('enderio:ensouled_chassis')

    //恒星锭
    event.custom({
        "type": "enderio:alloy_smelting",
        "energy": 64000,
        "experience": 3.0,
        "inputs": [
            {
                "count": 4,
                "ingredient":
                {
                    "tag": "forge:ingots/netherite"
                }
            },
            {
                "count": 1,
                "ingredient":
                {
                    "item": "minecraft:nether_star"
                }
            },
            {
                "count": 2,
                "ingredient":
                {
                    "tag": "forge:ingots/melodium"
                }
            }
        ],
        "result":
        {
            "count": 2,
            "item": "thermalendergy:stellarium_ingot"
        }
    }).id('enderio_evolution:alloy_smelting/stellar_alloy_ingot')

    //旋律锭
    event.custom({
        "type": "enderio:alloy_smelting",
        "energy": 32000,
        "experience": 1.5,
        "inputs": [
            {
                "count": 1,
                "ingredient":
                {
                    "item": "enderio_evolution:crystalline_pink_slime_ingot"
                }
            },
            {
                "count": 1,
                "ingredient":
                {
                    "item": "minecraft:popped_chorus_fruit"
                }
            },
            {
                "count": 1,
                "ingredient":
                {
                    "item": "enderio:end_steel_ingot"
                }
            }
        ],
        "result":
        {
            "count": 1,
            "item": "thermalendergy:melodium_ingot"
        }
    }).id('enderio_evolution:alloy_smelting/melodic_alloy_ingot')
})