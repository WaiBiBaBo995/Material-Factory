ServerEvents.recipes(event =>{
    event.custom({
        "type": "compactcrafting:miniaturization",
        "recipeSize": 3,
        "layers": [
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A"],
            ["A", "A", "A"],
            ["A", "A", "A"]]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A"],
            ["A", "B", "A"],
            ["A", "A", "A"]]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A"],
            ["A", "A", "A"],
            ["A", "A", "A"]]}
        ],
        "catalyst": { "id": 'enderio:clayed_glowstone',"Count":1 },
        "components": {
            "A": {
                "type": "compactcrafting:block",
                "block": 'compactmachines:wall'
                },
            "B": {
                "type": "compactcrafting:block",
                "block": 'minecraft:copper_block'
                }
        },
        "outputs": [{
            "id": 'compactmachines:machine_tiny',
            "Count": 1
        }]
    }).id('compactmachines:machine_tiny')

    event.custom({
        "type": "compactcrafting:miniaturization",
        "recipeSize": 5,
        "layers": [
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A"],
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A"],
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A"],
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A"],
          ]},
          {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A"],
          ]}
        ],
        "catalyst": { "id": 'enderio:clayed_glowstone',"Count":1 },
        "components": {
            "A": {
                "type": "compactcrafting:block",
                "block": 'compactmachines:wall'
                },
            "B": {
                "type": "compactcrafting:block",
                "block": 'minecraft:iron_block'
                }
        },
        "outputs": [{
            "id": 'compactmachines:machine_small',
            "Count": 1
        }]
    }).id('compactmachines:machine_small')

    event.custom({
        "type": "compactcrafting:miniaturization",
        "recipeSize": 7,
        "layers": [
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A"]
          ]},
          {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A"]
          ]},
          {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A"]
          ]},
          {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A"]
          ]}
        ],
        "catalyst": { "id": 'enderio:clayed_glowstone',"Count":1 },
        "components": {
            "A": {
                "type": "compactcrafting:block",
                "block": 'compactmachines:wall'
                },
            "B": {
                "type": "compactcrafting:block",
                "block": 'minecraft:gold_block'
                }
        },
        "outputs": [{
            "id": 'compactmachines:machine_normal',
            "Count": 1
        }]
    }).id('compactmachines:machine_normal')

    event.custom({
        "type": "compactcrafting:miniaturization",
        "recipeSize": 9,
        "layers": [
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]}
        ],
        "catalyst": { "id": 'enderio:clayed_glowstone',"Count":1 },
        "components": {
            "A": {
                "type": "compactcrafting:block",
                "block": 'compactmachines:wall'
                },
            "B": {
                "type": "compactcrafting:block",
                "block": 'minecraft:obsidian'
                }
        },
        "outputs": [{
            "id": 'compactmachines:machine_large',
            "Count": 1
        }]
    }).id('compactmachines:machine_large')

    event.custom({
        "type": "compactcrafting:miniaturization",
        "recipeSize": 11,
        "layers": [
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]}
        ],
        "catalyst": { "id": 'enderio:clayed_glowstone',"Count":1 },
        "components": {
            "A": {
                "type": "compactcrafting:block",
                "block": 'compactmachines:wall'
                },
            "B": {
                "type": "compactcrafting:block",
                "block": 'minecraft:diamond_block'
                }
        },
        "outputs": [{
            "id": 'compactmachines:machine_giant',
            "Count": 1
        }]
    }).id('compactmachines:machine_giant')

    event.custom({
        "type": "compactcrafting:miniaturization",
        "recipeSize": 13,
        "layers": [
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
          {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
          {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
          {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
          {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
          {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
          {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
          {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
          {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            // 最后外层A模式
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]}
        ],
        "catalyst": { "id": 'enderio:clayed_glowstone',"Count":1 },
        "components": {
            "A": {
                "type": "compactcrafting:block",
                "block": 'compactmachines:wall'
                },
            "B": {
                "type": "compactcrafting:block",
                "block": 'minecraft:netherite_block'
                }
        },
        "outputs": [{
            "id": 'compactmachines:machine_maximum',
            "Count": 1
        }]
    }).id('compactmachines:machine_maximum')
})