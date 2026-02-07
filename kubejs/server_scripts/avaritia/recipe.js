ServerEvents.recipes(event => {
    //幽匿尖啸体
    event.custom({
    "type": "avaritia:shaped_table",
    "category": "misc",
    "key": {
        "a": {
        "item": 'ifeu:sculk_gear'
        },
        "b": {
        "item": 'ifeu:laser_lens_sculk'
        },
        "c": {
        "item": 'ifeu:liquid_sculk_matter_bucket'
        },
        "d": {
        "item": 'extendedcrafting:flux_star'
        },
        "e": {
        "item": 'minecraft:sculk_catalyst'
        }
    },
    "pattern": [
        "aba",
        "cdc",
        "eee"
    ],
    "result": {
        "item": "minecraft:sculk_shrieker"
    },
    "show_notification": true,
    "tier": 1
    });

    //颓残之书
    event.custom({
    "type": "avaritia:shaped_table",
    "category": "misc",
    "key": {
        "a": {
        "item": 'irons_spellbooks:diamond_spell_book'
        },
        "b": {
        "item": 'minecraft:sculk'
        },
        "c": {
        "item": 'ifeu:sculk_gear'
        }
    },
    "pattern": [
        "cbc",
        "bab",
        "cbc"
    ],
    "result": {
        "item": 'irons_spellbooks:ruined_book'
    },
    "show_notification": true,
    "tier": 1
    });

    //创造化学品罐
    event.remove({id: 'avaritia:mek_creative_chemical_tank'});
    event.custom({
            "type": "avaritia:shaped_table",
            "category": "equipment",
            "pattern": [
                "MMMABAMMM",
                "CCDEFEDCC",
                "CGGHIHGGC",
                "CGJKLKJGC",
                "CGJKNKJGC",
                "CGJKKKJGC",
                "CGJJJJJGC",
                "CGGGGGGGC",
                "CCCCCCCCC"
            ],
            "key": {
                "A": {
                "item": "mekanism:dynamic_tank"
                },
                "B": {
                "item": "tconstruct:scorched_proxy_tank"
                },
                "C": {
                "item": "avaritia:infinity_ingot"
                },
                "D": {
                "item": "thoriumreactors:module_io"
                },
                "E": {
                "item": "appmek:chemical_p2p_tunnel"
                },
                "F": {
                "item": "mekanism:dynamic_valve"
                },
                "G": {
                "item": "mekanism_extras:infinite_chemical_tank"
                },
                "H": {
                "item": "megacells:radioactive_chemical_cell"
                },
                "I": {
                "item": "mekanism_extras:infinite_pressurized_tube"
                },
                "J": {
                "item": "enderio:ender_chemical_conduit"
                },
                "K": {
                "item": "megacells:portable_chemical_cell_256m"
                },
                "L": {
                "item": "avaritia:infinity_catalyst"
                },
                "M": {
                "item": "mekanism_extras:infinite_tier_installer"
                },
                "N": {
                "item": 'materialfactory:anon'
                }
            },
            "result": {
            "item": "mekanism:creative_chemical_tank"
            },
            "show_notification": true,
            "tier": 4
    })

    //创造箱柜
    event.remove({id: 'avaritia:mek_creative_bin'});
    event.custom({
            "type": "avaritia:shaped_table",
            "category": "equipment",
            "key": {
            "A": {
                "item": 'mekanism_extras:naquadah_reactor_casing'
            },
            "B": {
                "item": 'mekanism_extras:infinite_energy_cube'
            },
            "C": {
                "item": 'mekanism_extras:infinite_fluid_tank'
            },
            "D": {
                "item": "mekanism_extras:infinite_chemical_tank"
            },
            "E": {
                "item": 'mekanism_extras:infinite_bin'
            },
            "I": {
                "item": "avaritia:infinity_ingot"
            },
            "S": {
                "item": "avaritia:infinity_catalyst"
            },
            "F": {
                "item": 'mekanism_extras:infinite_induction_cell'
            },
            "G": {
                "item": 'mekanism_extras:infinite_induction_provider'
            },
            "H": {
                "item": 'materialfactory:anon'
            },
            "J": {
                "item": 'megacells:portable_item_cell_256m'
            }
            },
            "pattern": [
            "AAAAAAAAA",
            "AFIIIIIGA",
            "AFIIHIIGA",
            "AFIIIIIGA",
            "AFEESJJGA",
            "AFJJJEEGA",
            "AFBCDCBGA",
            "AFBCDCBGA",
            "AAAAAAAAA"
            ],
            "result": {
            "item": "mekanism:creative_bin"
            },
            "show_notification": true,
            "tier": 4
    })

    //创造能量立方
    event.remove({id: 'avaritia:mek_creative_energy_cube'});
    event.custom({
            "type": "avaritia:shaped_table",
            "category": "equipment",
            "key": {
            "A": {
                "item": "mekanism_extras:infinite_energy_cube"
            },
            "B": {
                "item": 'mekanism_extras:reinforced_induction_casing'
            },
            "C": {
                "item": 'mekanism_extras:reinforced_induction_casing'
            },
            "D": {
                "item": "mekanism_extras:infinite_induction_cell"
            },
            "E": {
                "item": "mekanism_extras:infinite_induction_provider"
            },
            "I": {
                "item": "avaritia:infinity_ingot"
            },
            "S": {
                "item": "avaritia:infinity_catalyst"
            },
            "F": {
                "item": 'materialfactory:anon'
            },
            "G": {
                "item": 'mekanism_extras:infinite_control_circuit'
            },
            "H": {
                "item": 'appflux:fe_256m_portable_cell'
            }
        },
            "pattern": [
            "GBBCECBBG",
            "BDDDAHHHB",
            "BDSDAHSHB",
            "CDDDIHHHC",
            "EAAIFIAAE",
            "CHHHIDDDC",
            "BHSHADSDB",
            "BHHHADDDB",
            "GBBCECBBG"
            ],
            "result": {
            "item": "mekanism:creative_energy_cube",
            "nbt": "{mekData:{EnergyContainers:[{Container:0b,stored:\"18446744073709551615.9999\"}]}}"
            },
            "show_notification": true,
            "tier": 4
    })

    //创造流体罐
    event.remove({id: 'avaritia:mek_creative_fluid_tank'});
    event.custom({
            "type": "avaritia:shaped_table",
            "category": "equipment",
            "pattern": [
            "ABBBCBBBA",
            "BDEEFEEDB",
            "BEGGHGGEB",
            "BEGGHGGEB",
            "BEHHIHHEB",
            "BEGGHGGEB",
            "BEGGHGGEB",
            "BDEEJEEDB",
            "ABBBBBBBA"
        ],
        "key": {
            "A": {
            "item": "avaritia:infinity_catalyst"
            },
            "B": {
            "item": "avaritia:infinity_ingot"
            },
            "C": {
            "item": "mekanism_extras:advance_electric_pump"
            },
            "D": {
            "item": "mekanism_extras:infinite_mechanical_pipe"
            },
            "E": {
            "item": "mekanism_extras:infinite_fluid_tank"
            },
            "F": {
            "item": "xycraft_machines:valve"
            },
            "G": {
            "item": "megacells:portable_fluid_cell_256m"
            },
            "H": {
            "item": "mekanism_extras:lead_coated_glass"
            },
            "I": {
            "item": "materialfactory:anon"
            },
            "J": {
            "item": "mekanism_extras:naquadah_reactor_port"
            }
        },
            "result": {
            "item": 'mekanism:creative_fluid_tank'
            },
            "show_notification": true,
            "tier": 4
    })

    //创造魔力池
    event.remove({id: 'avaritia:botania_creative_pool'});
    event.custom({
            "type": "avaritia:shaped_table",
            "category": "equipment",
            "key": {
            "C": {
                "item": "botania:mana_pool"
            },
            "E": {
                "item": "botania:dragonstone_block"
            },
            "F": {
                "item": "botania:mana_tablet",
                "nbt": "{creative:1b,mana:500000}"
            },
            "N": {
                "item": "avaritia:neutron_ingot"
            },
            "X": {
                "item": "avaritia:infinity_catalyst"
            },
            "Y": {
                "item": "botania:fabulous_pool"
            }
            },
            "pattern": [
            "NNNNNNNNN",
            "NXCXYXCXN",
            "NCXEYEXCN",
            "NXEEYEEXN",
            "YYYYFYYYY",
            "NXEEYEEXN",
            "NCXEYEXCN",
            "NXCXYXCXN",
            "NNNNNNNNN"
            ],
            "result": {
            "item": "botania:creative_pool"
            },
            "show_notification": true,
            "tier": 4
    })

    //ae创造能源
    event.remove({id: 'avaritia:ae2_creative_energy_cell'});
    event.custom({
            "type": "avaritia:shaped_table",
            "category": "equipment",
            "key": {
            "A": {
                "item": "ae2omnicells:quantum_crafting_storage_256m_block"
            },
            "B": {
                "item": 'advanced_ae:quantum_alloy_plate'
            },
            "C": {
                "item": "avaritia:infinity_ingot"
            },
            "D": {
                "item": 'advanced_ae:quantum_core'
            },
            "E": {
                "item": "crazyae2addons:super_singularity"
            },
            "X": {
                "item": "ae2:singularity"
            },
            "Y": {
                "item": "crazyae2addons:dense_energy_storage_256k"
            }
            },
            "pattern": [
            "YYYYXYYYY",
            "YCACXCACY",
            "YACBEBCAY",
            "YCBBEBBCY",
            "XXEEDEEXX",
            "YCBBEBBCY",
            "YACBEBCAY",
            "YCACXCACY",
            "YYYYXYYYY"
            ],
            "result": {
            "item": "ae2:creative_energy_cell"
            },
            "show_notification": true,
            "tier": 4
    })
    event.custom({
            "type": "avaritia:shaped_table",
            "category": "equipment",
            "key": {
                "A": { "item": 'advanced_ae:quantum_alloy_plate' },
                "E": { "item": 'mekanism:hdpe_stick' },
                "G": { "item": 'avaritia:infinity' },
                "H": { "item": 'ae2:creative_energy_cell' },
                "B": { "item": 'mekanism_extras:infinite_induction_cell' },
                "D": { "item": 'mekanism_extras:infinite_induction_provider' },
                'I': { "item": 'mekanism_extras:infinite_control_circuit' },
                'C': { "item": 'crazyae2addons:super_singularity' },
                "K": { "item": 'mekanism:supercharged_coil'}
            },
            "pattern": [
            "AAAAAAAAA", 
            "AAAAEAAAA",
            "    E    ",
            "GGGGGGGGG",
            "GHBICIDHG",
            "GHBICIDHG",
            "GHBICIDHG",
            "GGGGGGGGG",  
            "    K    " 
            ],
            "result": {
                "item": 'materialfactory:ultimate_laser'
            },
            "show_notification": true,
            "tier": 4
    })

    event.custom({
        "type": "avaritia:no_consume_catalyst_shaped",
        "category": "equipment",
        "key": {
            "A": {
            "item": "mysticalagriculture:neutronium_essence"
            },
            "B": {
            "item": "mysticalagriculture:infinity_essence"
            },
            "C": {
            "item": "avaritia:infinity_catalyst"
            }
        },
        "pattern": [
            "AAAAAAAAA",
            "ABBBBBBBA",
            "ABBBBBBBA",
            "ABBBBBBBA",
            "ABBBCBBBA",
            "ABBBBBBBA",
            "ABBBBBBBA",
            "ABBBBBBBA",
            "AAAAAAAAA",
        ],
        "result": {
            "count": 1,
            "item": 'avaritia:infinity_nugget'
        },
        "tier": 4
    })
    
    event.custom({
        "type": "avaritia:infinity_catalyst",
        "category": "misc",
        "group": "default",
        "ingredients": [
            {
            "item": 'thermalendergy:prismalium_block'
            },
            {
            "item": 'thermalendergy:melodium_block'
            },
            {
            "item": 'thermalendergy:stellarium_block'
            },
            {
            "item": 'thermal_extra:twinite_block'
            },
            {
            "item": 'thermal_extra:dragonsteel_block'
            },
            {
            "item": 'thermal_extra:abyssal_block'
            },
            {
            "item": "avaritia:crystal_matrix_ingot"
            },
            {
            "item": "avaritia:neutron_ingot"
            },
            {
            "item": "avaritia:cosmic_meatballs"
            },
            {
            "item": "avaritia:ultimate_stew"
            },
            {
            "item": "avaritia:endest_pearl"
            },
            {
            "item": "avaritia:record_fragment"
            }
        ]
    }).id('avaritia:infinity_catalyst')
    event.custom({
        "type": "avaritia:infinity_catalyst",
        "category": "misc",
        "group": "eternal_singularity",
        "ingredients": [
            {
            "item": 'thermalendergy:prismalium_block'
            },
            {
            "item": 'thermalendergy:melodium_block'
            },
            {
            "item": 'thermalendergy:stellarium_block'
            },
            {
            "item": 'thermal_extra:twinite_block'
            },
            {
            "item": 'thermal_extra:dragonsteel_block'
            },
            {
            "item": 'thermal_extra:abyssal_block'
            },
            {
            "item": "avaritia:crystal_matrix_ingot"
            },
            {
            "item": "avaritia:neutron_ingot"
            },
            {
            "item": "avaritia:cosmic_meatballs"
            },
            {
            "item": "avaritia:ultimate_stew"
            },
            {
            "item": "avaritia:endest_pearl"
            },
            {
            "item": "avaritia:record_fragment"
            },
            {
            "item": "avaritia:eternal_singularity"
            }
        ]
    }).id('avaritia:infinity_catalyst_eternal')
})
