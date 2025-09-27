ServerEvents.recipes(event => {
    //atm锭
        event.custom({
        "type": "lychee:block_crushing",
        "item_in": [{
            "item": 'minecraft:netherite_ingot',
        },{
            "item": 'tconstruct:manyullyn_ingot',
        },{
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
        },{
            "item": 'mekanism:ingot_refined_obsidian',
        },{
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
        },{
            "item": 'enderio:end_steel_ingot',
        },{
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
})