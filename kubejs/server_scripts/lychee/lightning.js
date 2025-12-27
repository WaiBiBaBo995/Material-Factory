ServerEvents.recipes(event => {
    //魔源催化剂
    event.custom({
    "type": "lychee:lightning_channeling",
    "item_in": [{
            "item": 'ars_nouveau:earth_essence',
        },{
            "item": 'ars_nouveau:fire_essence',
        },{
            "item": 'ars_nouveau:air_essence',
        },{
            "item": 'ars_nouveau:water_essence',
        },{
            "item": 'ars_nouveau:conjuration_essence',
        },{
            "item": 'ars_nouveau:manipulation_essence',
        },{
            "item": 'ars_nouveau:abjuration_essence',
        },{
            "item": 'ifeu:rough_dragon_star',
        }],
    "post": [{
            "type": "drop_item",
            "item": 'materialfactory:incomplete_source_catalyst'
        }]
    })
    event.custom({
    "type": "lychee:lightning_channeling",
    "item_in": [{
            "item": 'materialfactory:incomplete_source_catalyst',
        },{
            "item": 'ars_nouveau:starbuncle_charm',
        },{
            "item": 'ars_nouveau:drygmy_charm',
        },{
            "item": 'ars_nouveau:whirlisprig_charm',
        },{
            "item": 'ars_nouveau:amethyst_golem_charm',
        },{
            "item": 'ars_nouveau:wixie_charm',
        },{
            "item": 'ars_nouveau:bookwyrm_charm',
        }],
    "post": [{
            "type": "drop_item",
            "item": 'materialfactory:source_catalyst'
        }]
    })

    //液态魔源罐
    event.custom({
        type: 'lychee:lightning_channeling',
        ghost: false,
        hide_in_viewer: true,
        contextual: [
            {
                type: 'custom',
                id: 'source_fluid_tank',
            }
        ],
        post: [
            {
                type: 'custom',
                id: 'arcane_platform_transform',
            }
        ],
        item_in: [
            {
                item: "ars_nouveau:source_gem_block",
            },
        ],
        block_in: "ars_nouveau:arcane_platform",
    });

    //液态魔源提取器
    event.custom({
        type: 'lychee:lightning_channeling',
        ghost: false,
        hide_in_viewer: false,
        contextual: [
            {
                type: 'custom',
                id: 'source_fluid_extractor',
            }
        ],
        post: [
            {
                type: 'custom',
                id: 'fire_brazier',
            },
            {
                type: 'custom',
                id: 'itemdisplay_place',
            },
            {
                type: 'custom',
                id: 'break_bifrost',
            }
        ],
        item_in: [
            {
                item: "ars_nouveau:alchemists_crown",
            },
            {
                item: "ars_nouveau:jump_ring",
            },
            {
                item: "ars_nouveau:enchanters_eye",
            },
            {
                item: "ars_nouveau:redstone_relay",
            },
            {
                item: "ars_nouveau:scryers_oculus",
            },
            {
                item: "ars_nouveau:potion_melder",
            },
        ],
        block_in: "ars_nouveau:arcane_pedestal",
    });
})