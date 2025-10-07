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
        "processingTime": 200
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

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
            "tag": 'forge:glass'
            },
            {
            "item": 'utilitarian:fluid_hopper'
            },
            {
            "tag": 'forge:glass'
            },
            {
            "tag": 'forge:glass'
            },
            {
            "tag": 'forge:glass'
            },
            {
            "tag": 'forge:glass'
            },
            {
            "item": 'avaritia:double_compressed_crafting_table'
            },
            {
            "tag": 'forge:glass'
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:latex\"}",
        "output": {
            "count": 1,
            "item": 'ifeu:fluid_crafting_table'
        },
        "processingTime": 100
    }).id('ifeu:dissolution_chamber/fluid_crafting_table')

    //速度插件
    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
            "item": 'mekanism:enriched_redstone'
            },
            {
            "item": 'mekanism:enriched_redstone'
            },
            {
            "tag": 'forge:glass_panes'
            },
            {
            "tag": 'forge:glass_panes'
            },
            {
            "tag": 'forge:gears/gold'
            },
            {
            "tag": 'forge:gears/gold'
            },
            {
            "item": 'minecraft:sugar'
            },
            {
            "item": 'minecraft:sugar'
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:pink_slime\"}",
        "output": {
            "count": 1,
            "item": 'industrialforegoing:speed_addon_1'
        },
        "processingTime": 20*10
    }).id('industrialforegoing:dissolution_chamber/speed_addon_1')

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
            "item": 'actuallyadditions:restonia_crystal'
            },
            {
            "item": 'actuallyadditions:restonia_crystal'
            },
            {
            "tag": 'forge:glass_panes'
            },
            {
            "tag": 'forge:glass_panes'
            },
            {
            "tag": 'forge:gears/diamond'
            },
            {
            "item": 'industrialforegoing:speed_addon_1'
            },
            {
            "item": 'minecraft:clock'
            },
            {
            "item": 'minecraft:clock'
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:ether_gas\"}",
        "output": {
            "count": 1,
            "item": 'industrialforegoing:speed_addon_2'
        },
        "processingTime": 20*10
    }).id('industrialforegoing:dissolution_chamber/speed_addon_2')

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
            "item": 'enderio:redstone_alloy_ingot'
            },
            {
            "item": 'enderio:redstone_alloy_ingot'
            },
            {
            "tag": 'forge:glass_panes'
            },
            {
            "tag": 'forge:glass_panes'
            },
            {
            "tag": 'forge:gears/dark_steel'
            },
            {
            "item": 'industrialforegoing:speed_addon_2'
            },
            {
            "item": 'ironfurnaces:augment_speed'
            },
            {
            "item": 'ironfurnaces:augment_speed'
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:sludge\"}",
        "output": {
            "count": 1,
            "item": 'ifeu:speed_addon_3'
        },
        "processingTime": 20*10
    }).id('ifeu:dissolution_chamber/speed_addon_3')

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
            "item": 'appflux:redstone_crystal'
            },
            {
            "item": 'appflux:redstone_crystal'
            },
            {
            "item": 'ae2:quartz_glass'
            },
            {
            "item": 'ae2:quartz_glass'
            },
            {
            "tag": 'forge:gears/sculk'
            },
            {
            "item": 'ifeu:speed_addon_3'
            },
            {
            "item": 'botania:rune_air'
            },
            {
            "item": 'botania:rune_air'
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"ifeu:liquid_sculk_matter\"}",
        "output": {
            "count": 1,
            "item": 'ifeu:speed_addon_4'
        },
        "processingTime": 20*15
    }).id('ifeu:dissolution_chamber/speed_addon_4')

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
            "item": 'appflux:charged_redstone'
            },
            {
            "item": 'appflux:charged_redstone'
            },
            {
            "item": 'ae2:quartz_vibrant_glass'
            },
            {
            "item": 'ae2:quartz_vibrant_glass'
            },
            {
            "tag": 'forge:gears/stellarium'
            },
            {
            "item": 'ifeu:speed_addon_4'
            },
            {
            "item": 'mysticalagriculture:speed_i_augment'
            },
            {
            "item": 'mysticalagriculture:speed_i_augment'
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"ifeu:liquid_malic_acid\"}",
        "output": {
            "count": 1,
            "item": 'ifeu:speed_addon_5'
        },
        "processingTime": 20*20
    }).id('ifeu:dissolution_chamber/speed_addon_5')
        //苹果酸
            event.custom({
                    "type": "industrialforegoing:dissolution_chamber",
                    "input": [
                        {
                        "item": 'create:honeyed_apple'
                        },
                        {
                        "item": 'create:honeyed_apple'
                        },
                        {
                        "item": 'create:honeyed_apple'
                        },
                        {
                        "item": 'create:honeyed_apple'
                        },
                        {
                        "item": 'create:honeyed_apple'
                        },
                        {
                        "item": 'create:honeyed_apple'
                        },
                        {
                        "item": 'create:honeyed_apple'
                        },
                        {
                        "item": 'create:honeyed_apple'
                        }
                    ],
                    "inputFluid": "{Amount:100,FluidName:\"industrialforegoing:biofuel\"}",
                    "output": {
                        "count": 8,
                        "item": "ifeu:apple_core"
                    },
                    "outputFluid": "{Amount:100,FluidName:\"ifeu:liquid_malic_acid\"}",
                    "processingTime": 100
                }).id('ifeu:dissolution_chamber/liquid_malic_acid')
    
    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
            "item": 'actuallyadditions:empowered_restonia_crystal'
            },
            {
            "item": 'actuallyadditions:empowered_restonia_crystal'
            },
            {
            "item": 'botania:bifrost_pane'
            },
            {
            "item": 'botania:bifrost_pane'
            },
            {
            "tag": 'forge:gears/dragonsteel'
            },
            {
            "item": 'ifeu:speed_addon_5'
            },
            {
            "item": 'botanicalextramachinery:catalyst_speed'
            },
            {
            "item": 'botanicalextramachinery:catalyst_speed'
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"ifeu:liquid_dragon_breath\"}",
        "output": {
            "count": 1,
            "item": 'ifeu:speed_addon_6'
        },
        "processingTime": 20*30
    }).id('ifeu:dissolution_chamber/speed_addon_6')

    //效率插件
    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
            "item": 'mekanism:enriched_redstone'
            },
            {
            "item": 'mekanism:enriched_redstone'
            },
            {
            "tag": 'forge:glass_panes'
            },
            {
            "tag": 'forge:glass_panes'
            },
            {
            "tag": 'forge:gears/gold'
            },
            {
            "tag": 'forge:gears/gold'
            },
            {
            "item": 'minecraft:blaze_powder'
            },
            {
            "item": 'minecraft:blaze_powder'
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:pink_slime\"}",
        "output": {
            "count": 1,
            "item": 'industrialforegoing:efficiency_addon_1'
        },
        "processingTime": 20*10
    }).id('industrialforegoing:dissolution_chamber/efficiency_addon_1')

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
            "item": 'actuallyadditions:restonia_crystal'
            },
            {
            "item": 'actuallyadditions:restonia_crystal'
            },
            {
            "tag": 'forge:glass_panes'
            },
            {
            "tag": 'forge:glass_panes'
            },
            {
            "tag": 'forge:gears/diamond'
            },
            {
            "item": 'industrialforegoing:efficiency_addon_1'
            },
            {
            "item": 'minecraft:blaze_rod'
            },
            {
            "item": 'minecraft:blaze_rod'
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:ether_gas\"}",
        "output": {
            "count": 1,
            "item": 'industrialforegoing:efficiency_addon_2'
        },
        "processingTime": 20*10
    }).id('industrialforegoing:dissolution_chamber/efficiency_addon_2')

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
            "item": 'enderio:redstone_alloy_ingot'
            },
            {
            "item": 'enderio:redstone_alloy_ingot'
            },
            {
            "tag": 'forge:glass_panes'
            },
            {
            "tag": 'forge:glass_panes'
            },
            {
            "tag": 'forge:gears/dark_steel'
            },
            {
            "item": 'industrialforegoing:efficiency_addon_2'
            },
            {
            "item": 'botania:quartz_blaze'
            },
            {
            "item": 'botania:quartz_blaze'
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:sludge\"}",
        "output": {
            "count": 1,
            "item": 'ifeu:efficiency_addon_3'
        },
        "processingTime": 20*10
    }).id('ifeu:dissolution_chamber/efficiency_addon_3')

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
            "item": 'appflux:redstone_crystal'
            },
            {
            "item": 'appflux:redstone_crystal'
            },
            {
            "item": 'ae2:quartz_glass'
            },
            {
            "item": 'ae2:quartz_glass'
            },
            {
            "tag": 'forge:gears/sculk'
            },
            {
            "item": 'ifeu:efficiency_addon_3'
            },
            {
            "item": 'powah:crystal_blazing'
            },
            {
            "item": 'powah:crystal_blazing'
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"ifeu:liquid_sculk_matter\"}",
        "output": {
            "count": 1,
            "item": 'ifeu:efficiency_addon_4'
        },
        "processingTime": 20*15
    }).id('ifeu:dissolution_chamber/efficiency_addon_4')

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
            "item": 'appflux:charged_redstone'
            },
            {
            "item": 'appflux:charged_redstone'
            },
            {
            "item": 'ae2:quartz_vibrant_glass'
            },
            {
            "item": 'ae2:quartz_vibrant_glass'
            },
            {
            "tag": 'forge:gears/stellarium'
            },
            {
            "item": 'ifeu:efficiency_addon_4'
            },
            {
            "item": 'botania:rune_fire'
            },
            {
            "item": 'botania:rune_fire'
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"ifeu:liquid_malic_acid\"}",
        "output": {
            "count": 1,
            "item": 'ifeu:efficiency_addon_5'
        },
        "processingTime": 20*20
    }).id('ifeu:dissolution_chamber/efficiency_addon_5')

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
            "item": 'actuallyadditions:empowered_restonia_crystal'
            },
            {
            "item": 'actuallyadditions:empowered_restonia_crystal'
            },
            {
            "item": 'botania:bifrost_pane'
            },
            {
            "item": 'botania:bifrost_pane'
            },
            {
            "tag": 'forge:gears/dragonsteel'
            },
            {
            "item": 'ifeu:efficiency_addon_5'
            },
            {
            "item": 'tconstruct:blazing_bone'
            },
            {
            "item": 'tconstruct:blazing_bone'
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"ifeu:liquid_dragon_breath\"}",
        "output": {
            "count": 1,
            "item": 'ifeu:efficiency_addon_6'
        },
        "processingTime": 20*30
    }).id('ifeu:dissolution_chamber/efficiency_addon_6')

    //处理插件
    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
            "item": 'mekanism:enriched_redstone'
            },
            {
            "item": 'mekanism:enriched_redstone'
            },
            {
            "tag": 'forge:glass_panes'
            },
            {
            "tag": 'forge:glass_panes'
            },
            {
            "tag": 'forge:gears/gold'
            },
            {
            "tag": 'forge:gears/gold'
            },
            {
            "item": 'minecraft:furnace'
            },
            {
            "item": 'minecraft:crafting_table'
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:pink_slime\"}",
        "output": {
            "count": 1,
            "item": 'industrialforegoing:processing_addon_1'
        },
        "processingTime": 20*10
    }).id('industrialforegoing:dissolution_chamber/processing_addon_1')

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
            "item": 'actuallyadditions:restonia_crystal'
            },
            {
            "item": 'actuallyadditions:restonia_crystal'
            },
            {
            "tag": 'forge:glass_panes'
            },
            {
            "tag": 'forge:glass_panes'
            },
            {
            "tag": 'forge:gears/diamond'
            },
            {
            "item": 'industrialforegoing:processing_addon_1'
            },
            {
            "item": 'ironfurnaces:iron_furnace'
            },
            {
            "item": 'ifeu:precision_crafting_table'
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:ether_gas\"}",
        "output": {
            "count": 1,
            "item": 'industrialforegoing:processing_addon_2'
        },
        "processingTime": 20*10
    }).id('industrialforegoing:dissolution_chamber/processing_addon_2')

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
            "item": 'enderio:redstone_alloy_ingot'
            },
            {
            "item": 'enderio:redstone_alloy_ingot'
            },
            {
            "tag": 'forge:glass_panes'
            },
            {
            "tag": 'forge:glass_panes'
            },
            {
            "tag": 'forge:gears/dark_steel'
            },
            {
            "item": 'industrialforegoing:processing_addon_2'
            },
            {
            "item": 'ironfurnaces:emerald_furnace'
            },
            {
            "item": 'avaritia:sculk_crafting_table'
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:sludge\"}",
        "output": {
            "count": 1,
            "item": 'ifeu:processing_addon_3'
        },
        "processingTime": 20*10
    }).id('ifeu:dissolution_chamber/processing_addon_3')

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
            "item": 'appflux:redstone_crystal'
            },
            {
            "item": 'appflux:redstone_crystal'
            },
            {
            "item": 'ae2:quartz_glass'
            },
            {
            "item": 'ae2:quartz_glass'
            },
            {
            "tag": 'forge:gears/sculk'
            },
            {
            "item": 'ifeu:processing_addon_3'
            },
            {
            "item": 'ironfurnaces:obsidian_furnace'
            },
            {
            "item": 'avaritia:nether_crafting_table'
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"ifeu:liquid_sculk_matter\"}",
        "output": {
            "count": 1,
            "item": 'ifeu:processing_addon_4'
        },
        "processingTime": 20*15
    }).id('ifeu:dissolution_chamber/processing_addon_4')

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
            "item": 'appflux:charged_redstone'
            },
            {
            "item": 'appflux:charged_redstone'
            },
            {
            "item": 'ae2:quartz_vibrant_glass'
            },
            {
            "item": 'ae2:quartz_vibrant_glass'
            },
            {
            "tag": 'forge:gears/stellarium'
            },
            {
            "item": 'ifeu:processing_addon_4'
            },
            {
            "item": 'ironfurnaces:netherite_furnace'
            },
            {
            "item": 'avaritia:end_crafting_table'
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"ifeu:liquid_malic_acid\"}",
        "output": {
            "count": 1,
            "item": 'ifeu:processing_addon_5'
        },
        "processingTime": 20*20
    }).id('ifeu:dissolution_chamber/processing_addon_5')

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
            "item": 'actuallyadditions:empowered_restonia_crystal'
            },
            {
            "item": 'actuallyadditions:empowered_restonia_crystal'
            },
            {
            "item": 'botania:bifrost_pane'
            },
            {
            "item": 'botania:bifrost_pane'
            },
            {
            "tag": 'forge:gears/dragonsteel'
            },
            {
            "item": 'ifeu:processing_addon_5'
            },
            {
            "tag": 'forge:furnaces/rainbow'
            },
            {
            "item": 'avaritia:extreme_crafting_table'
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"ifeu:liquid_dragon_breath\"}",
        "output": {
            "count": 1,
            "item": 'ifeu:processing_addon_6'
        },
        "processingTime": 20*30
    }).id('ifeu:dissolution_chamber/processing_addon_6')
})