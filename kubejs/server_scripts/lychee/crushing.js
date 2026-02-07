ServerEvents.recipes(event => {
    //atm锭
    event.custom({
        "type": "lychee:block_crushing",
        "item_in": [{
            "item": 'minecraft:netherite_ingot',
        }, {
            "item": 'tconstruct:manyullyn_ingot',
        }, {
            "tag": 'forge:ingots/signalum',
        }],
        "post": [{
            "type": "drop_item",
            "item": 'allthemodium:allthemodium_ingot'
        }]
    })

    //振金锭
    event.custom({
        "type": "lychee:block_crushing",
        "item_in": [{
            "item": 'allthemodium:allthemodium_ingot',
        }, {
            "item": 'mekanism:ingot_refined_obsidian',
        }, {
            "tag": 'forge:ingots/enderium',
        }],
        "post": [{
            "type": "drop_item",
            "item": 'allthemodium:vibranium_ingot'
        }]
    })

    //难得素锭
    event.custom({
        "type": "lychee:block_crushing",
        "item_in": [{
            "item": 'allthemodium:vibranium_ingot',
        }, {
            "item": 'enderio:end_steel_ingot',
        }, {
            "item": 'thermal_extra:dragonsteel_ingot',
        }],
        "post": [{
            "type": "drop_item",
            "item": 'allthemodium:unobtainium_ingot'
        }]
    })

    //通量粉尘
    event.custom({
        "type": "lychee:block_crushing",
        "item_in": [{
            "item": 'minecraft:netherite_ingot',
        }],
        "post": [{
            "type": "drop_item",
            "item": 'fluxnetworks:flux_dust'
        }]
    })

    //奥术平台
    event.custom({
        "type": "lychee:block_crushing",
        "item_in": [{
            "item": "ars_nouveau:arcane_pedestal",
        }],
        "post": [{
            "type": "drop_item",
            "item": "ars_nouveau:arcane_platform"
        }]
    }).id("ars_nouveau:arcane_platform")
    event.custom({
        "type": "lychee:block_crushing",
        "item_in": [{
            "item": 'tconstruct:queens_slime_block',
        },{
            "item":"tconstruct:cinderslime_block"
        },{
            "item":'tconstruct:necrotic_bone'
        },{
            "item":'tconstruct:dragon_scale'
        },{
            "type": "forge:nbt",
            "item":'tconstruct:repair_kit',
            "nbt": {"Material":"tconstruct:hepatizon"}
        },{
            "type": "forge:nbt",
            "item":'tconstruct:large_plate',
            "nbt":{"Material":"tconstruct:queens_slime"}
        },{
            "type": "forge:nbt",
            "item":'tconstruct:pick_head',
            "nbt":{"Material":"allthemodium:vibranium"}
        },{
            "type": "forge:nbt",
            "item":'tconstruct:broad_blade',
            "nbt":{"Material":"allthemodium:unobtainium"}
        },{
            "type": "forge:nbt",
            "item":'tconstruct:tough_handle',
            "nbt":{"Material":"mysticalagradditions:supremium"}
        },{
            "item":'tconstruct:pig_iron_block'
        }

        ],
        "post": [{
            "type": "drop_item",
            "item": 'fumo:eiki_item'
        }]
    })
})