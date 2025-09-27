ServerEvents.recipes(event => {
    //灰烬源质
    event.custom({
    "type": "lychee:item_burning",
    "item_in": {
        "item": 'irons_spellbooks:arcane_essence'
    },
    "post": [{
        "type": "drop_item",
        "item": 'irons_spellbooks:cinder_essence'
    }]
    })

    //圆石
    event.custom({
    "type": "lychee:item_burning",
    "item_in": {
        "item": 'minecraft:sandstone'
    },
    "post": [{
        "type": "drop_item",
        "item": 'minecraft:cobblestone'
    }]
    })

    //石子
    event.custom({
    "type": "lychee:item_burning",
    "item_in": {
        "item": 'notreepunching:sandstone_loose_rock'
    },
    "post": [{
        "type": "drop_item",
        "item": 'notreepunching:stone_loose_rock'
    }]
    })
})