ServerEvents.recipes(event => {
    event.custom({
    "type": "notreepunching:tool_damaging_shaped",
    "recipe": {
        "type": "minecraft:crafting_shaped",
        "pattern": [
        "AS",
        "BA"
        ],
        "key": {
        "S": {
            "tag": "notreepunching:weak_saws"
        },
        "A": {
            "tag": "minecraft:planks"
        },
        "B": {
            "tag": "forge:shears"
        }
        },
        "result": {
        "item": 'minecraft:crafting_table',
        "count": 1
        }
    }
    })

    event.custom({
    "type": "notreepunching:tool_damaging_shaped",
    "recipe": {
        "type": "minecraft:crafting_shaped",
        "pattern": [
        "BA"
        ],
        "key": {
        "A": {
            "tag": 'forge:plates/copper'
        },
        "B": {
            "tag": "forge:shears"
        }
        },
        "result": {
        "item": 'createaddition:copper_wire',
        "count": 2
        }
    }
    })

    event.custom({
    "type": "notreepunching:tool_damaging_shaped",
    "recipe": {
        "type": "minecraft:crafting_shaped",
        "pattern": [
        "BA"
        ],
        "key": {
        "A": {
            "tag": 'forge:plates/gold'
        },
        "B": {
            "tag": "forge:shears"
        }
        },
        "result": {
        "item": 'createaddition:gold_wire',
        "count": 2
        }
    }
    })

    event.custom({
    "type": "notreepunching:tool_damaging_shaped",
    "recipe": {
        "type": "minecraft:crafting_shaped",
        "pattern": [
        "BA"
        ],
        "key": {
        "A": {
            "tag": 'forge:plates/electrum'
        },
        "B": {
            "tag": "forge:shears"
        }
        },
        "result": {
        "item": 'createaddition:electrum_wire',
        "count": 2
        }
    }
    })
})