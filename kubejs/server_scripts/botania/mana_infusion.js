ServerEvents.recipes(event => {
    //魔源宝石
    event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
            "type": "block",
            "block": "mythicbotany:mana_collector"
        },
        "input": {
            "item": 'minecraft:lapis_lazuli'
        },
        "mana": 500,
        "output": {
            "count": 1,
            "item": 'ars_nouveau:source_gem'
        }
    })

    event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
            "type": "block",
            "block": "mythicbotany:mana_collector"
        },
        "input": {
            "item": 'minecraft:amethyst_shard'
        },
        "mana": 500,
        "output": {
            "count": 1,
            "item": 'ars_nouveau:source_gem'
        }
    })

    //奥术残骸
    event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
            "type": "block",
            "block": "extrabotany:dimension_catalyst"
        },
        "input": {
            "item": 'minecraft:ancient_debris'
        },
        "mana": 1000,
        "output": {
            "count": 1,
            "item": 'irons_spellbooks:arcane_debris'
        }
    })

    //难得素-振金合金
    event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
            "type": "block",
            "block": 'mysticalagriculture:awakened_supremium_ingot_block'
        },
        "input": {
            "item": 'allthemodium:vibranium_dust'
        },
        "mana": 20000,
        "output": {
            "count": 2,
            "item": 'allthemodium:vibranium_crystal'
        }
    })
    event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
            "type": "block",
            "block": 'mysticalagriculture:awakened_supremium_ingot_block'
        },
        "input": {
            "item": 'allthemodium:unobtainium_dust'
        },
        "mana": 20000,
        "output": {
            "count": 2,
            "item": 'allthemodium:unobtainium_crystal'
        }
    })

    //污浊下界合金碎片
    event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
            "type": "block",
            "block": "botania:alchemy_catalyst"
        },
        "input": {
            "item": 'mekanism:dirty_netherite_scrap'
        },
        "mana": 4000,
        "output": {
            "count": 1,
            "item": 'minecraft:netherite_scrap'
        }
    })
})
//污浊矿粉
ServerEvents.recipes(event => {
    function oresdust(result, inputTag) {
        event.custom({
            "type": "botania:mana_infusion",
            "catalyst": {
                "type": "block",
                "block": "botania:alchemy_catalyst"
            },
            "group": "atc:dust_cycle",
            "input": {
                "tag": inputTag
            },
            "output": {
                "item": result
            },
            "mana": 4000,
            "conditions": [
                {
                    "type": "forge:mod_loaded",
                    "modid": "botania"
                },
                {
                    "type": "forge:tag_empty",
                    "tag": inputTag,
                    "invert": true
                }
            ]
        }).id(`kubejs:botania/mana_infusion/${result.replace(':', '/')}`);
    }
    oresdust('enderio:powdered_cobalt', 'mekanism:dirty_dusts/cobalt');
    oresdust('alltheores:silver_dust', 'mekanism:dirty_dusts/silver');
    oresdust('alltheores:nickel_dust', 'mekanism:dirty_dusts/nickel');
    oresdust('alltheores:iridium_dust', 'mekanism:dirty_dusts/iridium');
    oresdust('alltheores:platinum_dust', 'mekanism:dirty_dusts/platinum');
    oresdust('thermal:cinnabar_dust', 'mekanism:dirty_dusts/cinnabar');
    oresdust('thermal:sulfur_dust', 'mekanism:dirty_dusts/sulfur');
    oresdust('thermal:apatite_dust', 'mekanism:dirty_dusts/apatite');
    oresdust('alltheores:aluminum_dust', 'mekanism:dirty_dusts/aluminum');
    oresdust('alltheores:zinc_dust', 'mekanism:dirty_dusts/zinc');
    oresdust('thermal:emerald_dust', 'mekanism:dirty_dusts/emerald');
    oresdust('alltheores:diamond_dust', 'mekanism:dirty_dusts/diamond');
});
