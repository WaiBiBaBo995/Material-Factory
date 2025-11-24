ServerEvents.recipes(event => {
    // 灰烬
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "tag": "minecraft:shovels"
        },
        "block_in": 'minecraft:cobblestone',
        "post": [{
            "type": "damage_item"
        },
        {
            "type": "drop_item",
            "item": 'supplementaries:ash'
        }]
    })

    //绯红菌岩
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": 'minecraft:crimson_fungus'
        },
        "block_in": 'minecraft:netherrack',
        "post": [
        {
            "type": "place",
            "block": 'minecraft:crimson_nylium'
        }]
    })

    //诡异菌岩
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": 'minecraft:warped_fungus'
        },
        "block_in": 'minecraft:netherrack',
        "post": [
        {
            "type": "place",
            "block": 'minecraft:warped_nylium'
        }]
    })

    //草方块
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": 'minecraft:wheat_seeds'
        },
        "block_in": 'minecraft:dirt',
        "post": [
        {
            "type": "place",
            "block": 'minecraft:grass_block'
        }]
    })

    //菌丝
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": 'minecraft:poisonous_potato'
        },
        "block_in": 'minecraft:dirt',
        "post": [
        {
            "type": "place",
            "block": 'minecraft:mycelium'
        }]
    })

    //千早爱音
    event.custom({
        "type": "lychee:block_interacting",
        "hide_in_viewer": true,
        "item_in": {
            "item": 'avaritia:infinity_catalyst'
        },
        "block_in": 'materialfactory:anon_chihaya',
        "post": [{
            "type": "execute",
            "command": "summon darkdoppelganger:dark_doppelganger",
            "hide": true
        },
        {
            "type": "execute",
            "command": "playsound darkdoppelganger:boss_laugh hostile @s",
            "hide": true
        }]
    })

    event.custom({
        "type": "lychee:block_interacting",
        "hide_in_viewer": true,
        "item_in": {
            "item": 'minecraft:air'
        },
        "block_in": 'materialfactory:anon_chihaya',
        "post": [{
            "type": "execute",
            "command": "playsound darkdoppelganger:boss_laugh player @s",
            "hide": true
        }]
    })

    event.custom({
        "type": "lychee:block_interacting",
        "hide_in_viewer": true,
        "item_in": {
            "item": 'materialfactory:anon'
        },
        "block_in": 'materialfactory:anon_chihaya',
        "post": [{
            "type": "prevent_default"
            },
            {
            "type": "execute",
            "command": "playsound darkdoppelganger:boss_stun player @s",
            "hide": true
        }]
    })

    //灵魂耕地提示
    event.custom({
        "type": "lychee:block_interacting",
        "ghost": true,
        "comment": "comment.lychee.soul_farmland",
        "item_in": {
            "item": 'avaritia:blaze_hoe'
        },
        "block_in": "minecraft:soul_soil",
        "post": [
        {
            "type": "place",
            "block": "avaritia:soul_farmland"
        }]
    })
})