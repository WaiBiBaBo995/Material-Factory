ServerEvents.recipes(event => {
    
    //焦黑砖
        event.custom({
        "type": "lychee:item_inside",
        "item_in": {
            "item": 'supplementaries:ash_brick',
        },
        "block_in": { "blocks": ["minecraft:lava"] },
        "post": [{
            "type": "drop_item",
            "item": 'tconstruct:seared_brick'
        },
        {
            "type": "place",
            "block": "air"
        }]
    })

    //粘液球
        event.custom({
        "type": "lychee:item_inside",
        "item_in": {
            "item": 'slimeoverhaul:earth_slime_ball',
        },
        "block_in": { "blocks": ["minecraft:water"] },
        "post": [{
            "type": "drop_item",
            "item": 'minecraft:slime_ball'
        }]
    })

    //冰
        event.custom({
        "type": "lychee:item_inside",
        "item_in": {
            "item": 'minecraft:snowball',
        },
        "block_in": { "blocks": ["minecraft:water"] },
        "post": [{
            "type": "drop_item",
            "item": 'minecraft:ice'
        },{
            "type": "place",
            "block": "air"
        }]
    })

    //地狱岩
        event.custom({
        "type": "lychee:item_inside",
        "item_in": {
            "item": 'minecraft:magma_block',
        },
        "block_in": { "blocks": ["minecraft:water"] },
        "post": [{
            "type": "drop_item",
            "item": 'minecraft:netherrack'
        }]
    })

    //灵魂熔岩
        event.custom({
        "type": "lychee:item_inside",
        "item_in": {
            "item": 'allthemodium:allthemodium_ingot',
        },
        "block_in": { "blocks": ["tconstruct:liquid_soul_fluid"] },
        "post": [{
            "type": "place",
            "block": "allthemodium:soul_lava"
        }]
    })

    //远古圆石
    event.custom({
        "type": "lychee:item_inside",
        "item_in": {
            "item": 'minecraft:cobblestone',
        },
        "block_in": { "blocks": ["allthemodium:soul_lava"] },
        "post": [{
            "type": "drop_item",
            "item": 'allthemodium:ancient_stone'
        },{
            "type": "execute",
            "command": 'particle minecraft:ash ~ ~1 ~ 0.5 0.5 0.5 0 20',
            "hide": true
        },{
            "type": "execute",
            "command": 'playsound minecraft:block.lava.extinguish blocks @a ~ ~ ~ 1 1',
            "hide": true
        }]
    })

    //火史莱姆球
    event.custom({
        type: 'lychee:item_inside',
        ghost: false,
        time: 10,
        comment: 'comment.lychee.canseeskynoon',
        contextual: [
            {
                type: 'weather',
                weather: 'clear',
            },
            {
                type: 'custom',
                id: 'can_see_sky',
            },
            {
                type: 'custom',
                id: 'is_noon',
            },
        ],
        post: [
            {
                type: 'drop_item',
                item: 'slimeoverhaul:flame_slime_ball',
            },
        ],
        item_in: [
            {
                item: 'slimeoverhaul:earth_slime_ball',
            },
        ],
        block_in: '*',
    });

    //风史莱姆球
    event.custom({
        type: 'lychee:item_inside',
        ghost: false,
        time: 10,
        comment: 'comment.lychee.canseeskymidnight',
        contextual: [
            {
                type: 'weather',
                weather: 'clear',
            },
            {
                type: 'custom',
                id: 'can_see_sky',
            },
            {
                type: 'custom',
                id: 'is_midnight',
            },
        ],
        post: [
            {
                type: 'drop_item',
                item: 'slimeoverhaul:air_slime_ball',
            },
        ],
        item_in: [
            {
                item: 'slimeoverhaul:earth_slime_ball',
            },
        ],
        block_in: '*',
    });
/*
    //水蒸发
    event.custom({
        type: 'lychee:item_inside',
        time: 60,
        contextual: [
            {
                type: 'custom',
                id: 'can_see_sky',
            },
            {
                type: 'custom',
                id: 'is_noon',
            },
        ],
        post: [
            {
                type: 'place',
                block: 'minecraft:flowing_water',
            },
            {
                type: 'execute',
                command: 'particle minecraft:poof ~ ~1 ~ 1 1 1 0 20',
                hide: true,
            },
        ],
        item_in: [
            {
                item: 'minecraft:air',
            },
        ],
        block_in: 'minecraft:water',
    });

    //水结冰
    event.custom({
        type: 'lychee:item_inside',
        time: 60,
        contextual: [
            {
                type: 'custom',
                id: 'can_see_sky',
            },
            {
                type: 'custom',
                id: 'is_midnight',
            },
        ],
        post: [
            {
                type: 'place',
                block: 'minecraft:ice',
            },
            {
                type: 'execute',
                command: 'particle minecraft:electric_spark ~ ~1 ~ 1 1 1 0 20',
                hide: true,
            },
        ],
        item_in: [
            {
                item: 'minecraft:air',
            },
        ],
        block_in: 'minecraft:water',
    });
*/
    //电荷线圈
    event.custom({
        "type": "lychee:item_inside",
        "item_in": {
            "item": 'createaddition:copper_spool',
        },
        "block_in": { "blocks": ["materialfactory:electric_fluid"] },
        "post": [{
            "type": "drop_item",
            "item": 'materialfactory:charge_spool'
        },{
            "type": "place",
            "block": "air"
        }]
    })

    //带电流体
    event.custom({
        "type": "lychee:item_inside",
        "item_in": {
            "item": 'materialfactory:crushed_capacitor',
        },
        "block_in": { "blocks": ["water"] },
        "post": [{
            "type": "place",
            "block": "materialfactory:electric_fluid"
        },{
            "type": 'execute',
            "command": 'particle cofh_core:spark ~ ~ ~ 0.5 0.75 0.5 0.025 20',
            "hide": true
        },{
            "type": 'execute',
            "command": 'particle cofh_core:plasma_ball ~ ~0.9 ~',
            "hide": true
        },{
            "type": "execute",
            "command": 'playsound createaddition:loud_zap block @p ~ ~ ~ 1 2',
            "hide": true
        }
    ]
    })

    let dyes = ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "light_gray", "cyan", "purple", "blue", "brown", "green", "red", "black"];
    dyes.forEach(dye => {
    event.custom({
        "type": "lychee:item_inside",
        "time": 5,
        "item_in": {
            "item": `minecraft:${dye}_dye`,
        },
        "block_in": { "blocks": ["water"] },
        "post": [{
            "type": "place",
            "block": `materialfactory:${dye}_paint_fluid`
        },{
            "type": 'execute',
            "command": 'particle minecraft:end_rod ~ ~ ~ 0.5 1 0.5 0.05 10',
            "hide": true
        },{
            "type": "execute",
            "command": 'playsound block.pointed_dripstone.drip_water_into_cauldron block @p ~ ~ ~ 10',
            "hide": true
        }
    ]
    })
    event.custom({
        "type": "lychee:item_inside",
        "item_in": {
            "item": 'ae2:matter_ball',
        },
        "block_in": { "blocks": [`materialfactory:${dye}_paint_fluid`] },
        "post": [{
            "type": "drop_item",
            "item": `ae2:${dye}_paint_ball`
        },{
            "type": 'execute',
            "command": 'particle minecraft:enchant ~ ~ ~ 0.5 0.8 0.5 0.1 10',
            "hide": true
        },{
            "type": "execute",
            "command": 'playsound block.brewing_stand.brew block @p ~ ~ ~ 0.3 2',
            "hide": true
        }]
    })})
})