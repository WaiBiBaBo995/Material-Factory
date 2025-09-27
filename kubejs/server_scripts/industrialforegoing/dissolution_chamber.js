ServerEvents.recipes(event => {
    //灵魂镭射基座
    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
            "tag": "forge:plastic"
            },
            {
            "item": 'minecraft:sculk_shrieker'
            },
            {
            "tag": "forge:plastic"
            },
            {
            "tag": 'forge:rods/plastic'
            },
            {
            "tag": 'forge:rods/plastic'
            },
            {
            "item": 'allthemodium:unobtainium_gear'
            },
            {
            "tag": 'ifeu:machine_frame/ultimate'
            },
            {
            "item": 'allthemodium:unobtainium_gear'
            }
        ],
        "inputFluid": "{Amount:4000,FluidName:\"ifeu:liquid_sculk_matter\"}",
        "output": {
            "count": 1,
            "item": 'industrialforegoingsouls:soul_laser_base'
        },
        "processingTime": 300
    })

    //灵魂促速器
    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
            "tag": 'forge:rods/plastic'
            },
            {
            "item": 'minecraft:sculk_catalyst'
            },
            {
            "tag": 'forge:rods/plastic'
            },
            {
            "item": 'megacells:cable_mega_interface'
            },
            {
            "item": 'mekanism:ultimate_pressurized_tube'
            },
            {
            "tag": 'forge:rods/plastic'
            },
            {
            "item": 'minecraft:sculk_catalyst'
            },
            {
            "tag": 'forge:rods/plastic'
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"ifeu:liquid_sculk_matter\"}",
        "output": {
            "count": 1,
            "item": 'industrialforegoingsouls:soul_surge'
        },
        "processingTime": 200
    })

    //灵魂管道
    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
            "tag": 'forge:plastic'
            },
            {
            "item": 'minecraft:echo_shard'
            },
            {
            "tag": 'forge:plastic'
            },
            {
            "tag": 'forge:rods/plastic'
            },
            {
            "tag": 'forge:rods/plastic'
            },
            {
            "tag": 'forge:plastic'
            },
            {
            "item": 'minecraft:echo_shard'
            },
            {
            "tag": 'forge:plastic'
            }
        ],
        "inputFluid": "{Amount:500,FluidName:\"ifeu:liquid_sculk_matter\"}",
        "output": {
            "count": 4,
            "item": 'industrialforegoingsouls:soul_network_pipe'
        },
        "processingTime": 100
    })

    //钢制外壳
    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
            "tag": 'forge:ingots/steel'
            },
            {
            "tag": 'forge:ingots/osmium'
            },
            {
            "tag": 'forge:ingots/steel'
            },
            {
            "tag": 'forge:ingots/osmium'
            },
            {
            "tag": 'forge:ingots/osmium'
            },
            {
            "tag": 'forge:ingots/steel'
            },
            {
            "tag": 'forge:ingots/osmium'
            },
            {
            "tag": 'forge:ingots/steel'
            }
        ],
        "inputFluid": "{Amount:200,FluidName:\"industrialforegoing:latex\"}",
        "output": {
            "count": 1,
            "item": 'mekanism:steel_casing'
        },
        "processingTime": 100
    })

    //彩虹粘液球
    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
            "item": 'slimeoverhaul:earth_slime_ball'
            },
            {
            "item": 'minecraft:slime_ball'
            },
            {
            "item": 'slimeoverhaul:water_slime_ball'
            },
            {
            "item": 'minecraft:slime_ball'
            },
            {
            "item": 'minecraft:slime_ball'
            },
            {
            "item": 'slimeoverhaul:air_slime_ball'
            },
            {
            "item": 'minecraft:slime_ball'
            },
            {
            "item": 'slimeoverhaul:flame_slime_ball'
            }
        ],
        "inputFluid": "{Amount:250,FluidName:\"industrialforegoing:pink_slime\"}",
        "output": {
            "count": 1,
            "item": 'materialfactory:rainbow_slimeball'
        },
        "processingTime": 100
    })

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
            "item": 'expatternprovider:assembler_matrix_speed'
            },
            {
            "item": 'expatternprovider:ex_io_port'
            },
            {
            "item": 'expatternprovider:assembler_matrix_speed'
            },
            {
            "item": 'advanced_ae:shattered_singularity'
            },
            {
            "item": 'advanced_ae:shattered_singularity'
            },
            {
            "item": 'expatternprovider:assembler_matrix_speed'
            },
            {
            "item": 'crazyae2addons:entity_ticker'
            },
            {
            "item": 'expatternprovider:assembler_matrix_speed'
            }
        ],
        "inputFluid": "{Amount:16000,FluidName:\"ifeu:liquid_dragon_breath\"}",
        "output": {
            "count": 1,
            "item": 'extendedae_plus:entity_speed_ticker'
        },
        "processingTime": 20*30
    }).id('extendedae_plus:entity_speed_ticker')
})