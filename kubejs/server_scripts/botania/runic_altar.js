ServerEvents.recipes(event =>{
    //魔源石
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
            "item": 'ars_nouveau:source_gem'
            },
            {
            "tag": 'forge:stone'
            },
            {
            "tag": 'forge:stone'
            },
            {
            "tag": 'forge:stone'
            },
            {
            "tag": 'forge:stone'
            },
            {
            "tag": 'forge:stone'
            },
            {
            "tag": 'forge:stone'
            },
            {
            "tag": 'forge:stone'
            },
            {
            "tag": 'forge:stone'
            }
        ],
        "mana": 1000,
        "output": {
            "count": 8,
            "item": 'ars_nouveau:sourcestone'
        }
    })

    //灌注室
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
            "item": 'botania:terrasteel_ingot'
            },
            {
            "item": 'minecraft:gold_ingot'
            },
            {
            "item": 'ars_nouveau:sourcestone'
            },
            {
            "item": 'ars_nouveau:source_gem'
            },
            {
            "item": 'ars_nouveau:sourcestone'
            },
            {
            "item": 'minecraft:gold_ingot'
            }
        ],
        "mana": 25000,
        "output": {
            "count": 1,
            "item": 'ars_nouveau:imbuement_chamber'
        }
    })

    //附魔装置
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
            "item": 'ars_nouveau:sourcestone'
            },
            {
            "item": 'ars_nouveau:source_gem'
            },
            {
            "item": 'minecraft:gold_ingot'
            },
            {
            "item": 'minecraft:gold_ingot'
            },
            {
            "item": 'ars_nouveau:source_gem'
            },
            {
            "item": 'industrialforegoing:machine_frame_advanced'
            },
            {
            "item": 'ars_nouveau:source_gem'
            },
            {
            "item": 'minecraft:gold_ingot'
            },
            {
            "item": 'minecraft:gold_ingot'
            },
            {
            "item": 'ars_nouveau:source_gem'
            }
        ],
        "mana": 50000,
        "output": {
            "count": 1,
            "item": 'ars_nouveau:enchanting_apparatus'
        }
    })
    //奥术核心
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
            "item": 'ars_nouveau:sourcestone'
            },
            {
            "item": 'minecraft:gold_block'
            },
            {
            "item": 'ars_nouveau:source_gem'
            },
            {
            "item": 'minecraft:gold_block'
            },
            {
            "item": 'industrialforegoing:machine_frame_simple'
            },
            {
            "item": 'minecraft:gold_block'
            },
            {
            "item": 'ars_nouveau:source_gem'
            },
            {
            "item": 'minecraft:gold_block'
            }
        ],
        "mana": 25000,
        "output": {
            "count": 1,
            "item": 'ars_nouveau:arcane_core'
        }
    })

    //仪式火盆
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
            "item": 'ars_nouveau:source_gem_block'
            },
            {
            "item": 'ars_nouveau:sourcestone'
            },
            {
            "item": 'minecraft:gold_block'
            },
            {
            "item": 'minecraft:gold_block'
            },
            {
            "item": 'ars_nouveau:arcane_pedestal'
            },
            {
            "item": 'minecraft:gold_block'
            },
            {
            "item": 'minecraft:gold_block'
            },
            {
            "item": 'ars_nouveau:sourcestone'
            }
        ],
        "mana": 50000,
        "output": {
            "count": 1,
            "item": 'ars_nouveau:ritual_brazier'
        }
    })

    //难得素-振金合金
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
            "item": 'allthemodium:vibranium_clump'
            },
            {
            "item": 'allthemodium:vibranium_crystal'
            },
            {
            "item": 'allthemodium:vibranium_dust'
            },
            {
            "item": 'allthemodium:vibranium_crystal'
            },
            {
            "item": 'allthemodium:vibranium_clump'
            },
            {
            "item": 'allthemodium:vibranium_crystal'
            },
            {
            "item": 'allthemodium:vibranium_dust'
            },
            {
            "item": 'allthemodium:vibranium_crystal'
            }
        ],
        "mana": 100000,
        "output": {
            "count": 2,
            "item": 'materialfactory:vibranium_mass'
        }
    })
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
            "item": 'allthemodium:unobtainium_clump'
            },
            {
            "item": 'allthemodium:unobtainium_crystal'
            },
            {
            "item": 'allthemodium:unobtainium_dust'
            },
            {
            "item": 'allthemodium:unobtainium_crystal'
            },
            {
            "item": 'allthemodium:unobtainium_clump'
            },
            {
            "item": 'allthemodium:unobtainium_crystal'
            },
            {
            "item": 'allthemodium:unobtainium_dust'
            },
            {
            "item": 'allthemodium:unobtainium_crystal'
            }
        ],
        "mana": 100000,
        "output": {
            "count": 2,
            "item": 'materialfactory:unobtainium_mass'
        }
    })
})