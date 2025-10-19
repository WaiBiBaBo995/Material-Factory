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
})