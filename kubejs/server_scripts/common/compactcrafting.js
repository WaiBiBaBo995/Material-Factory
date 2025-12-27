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
            ["A", "B", "C", "B", "A"],
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
                },
            "C": {
                "type": "compactcrafting:block",
                "block": "compactmachines:machine_tiny"
                }
        },
        "outputs": [{
            "id": 'compactmachines:machine_small',
            "Count": 1
        }]
    }).id('compactmachines:machine_small')

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
            ["A", "B", "C", "B", "A"],
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
                "block": "minecraft:gold_block"
                },
            "C": {
                "type": "compactcrafting:block",
                "block": "compactmachines:machine_small"
                }
        },
        "outputs": [{
            "id": "compactmachines:machine_normal",
            "Count": 1
        }]
    }).id("compactmachines:machine_normal")

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
            ["A", "B", "C", "B", "A"],
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
                "block": "minecraft:obsidian"
                },
            "C": {
                "type": "compactcrafting:block",
                "block": "compactmachines:machine_normal"
                }
        },
        "outputs": [{
            "id": "compactmachines:machine_large",
            "Count": 1
        }]
    }).id("compactmachines:machine_large")

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
            ["A", "B", "C", "B", "A"],
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
                "block": "minecraft:diamond_block"
                },
            "C": {
                "type": "compactcrafting:block",
                "block": "compactmachines:machine_large"
                }
        },
        "outputs": [{
            "id": "compactmachines:machine_giant",
            "Count": 1
        }]
    }).id("compactmachines:machine_giant")

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
            ["A", "B", "C", "B", "A"],
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
                "block": "minecraft:netherite_block"
                },
            "C": {
                "type": "compactcrafting:block",
                "block": "compactmachines:machine_giant"
                }
        },
        "outputs": [{
            "id": "compactmachines:machine_maximum",
            "Count": 1
        }]
    }).id("compactmachines:machine_maximum")

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
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "D", "X", "D", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
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
        "catalyst": { "id": "mekmm:uu_matter","Count":1 },
        "components": {
            "A": {
                "type": "compactcrafting:block",
                "block": "avaritia:infinity"
                },
            "B": {
                "type": "compactcrafting:block",
                "block": "mekanism_extras:supreme_thermodynamic_conductor"
                },
            "C": {
                "type": "compactcrafting:block",
                "block": "mekanism_extras:cosmic_thermodynamic_conductor"
                },
            "D": {
                "type": "compactcrafting:block",
                "block": "mekanism_extras:infinite_thermodynamic_conductor"
                },
            "X": {
                "type": "compactcrafting:block",
                "block": "mekanism_extras:naquadah_reactor_port"
                }
        },
        "outputs": [{
            "id": "materialfactory:infinity_heat_output",
            "Count": 1
        }]
    }).id("materialfactory:infinity_heat_output")

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
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "D", "X", "D", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
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
        "catalyst": { "id": "mekmm:uu_matter","Count":1 },
        "components": {
            "A": {
                "type": "compactcrafting:block",
                "block": "avaritia:infinity"
                },
            "B": {
                "type": "compactcrafting:block",
                "block": "mekanism_extras:supreme_mechanical_pipe"
                },
            "C": {
                "type": "compactcrafting:block",
                "block": "mekanism_extras:cosmic_mechanical_pipe"
                },
            "D": {
                "type": "compactcrafting:block",
                "block": "mekanism_extras:infinite_mechanical_pipe"
                },
            "X": {
                "type": "compactcrafting:block",
                "block": "mekanism_extras:naquadah_reactor_port"
                }
        },
        "outputs": [{
            "id": "materialfactory:infinity_fluid_input",
            "Count": 1
        }]
    }).id("materialfactory:infinity_fluid_input")

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
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "D", "X", "D", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
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
        "catalyst": { "id": "mekmm:uu_matter","Count":1 },
        "components": {
            "A": {
                "type": "compactcrafting:block",
                "block": "avaritia:infinity"
                },
            "B": {
                "type": "compactcrafting:block",
                "block": "mekanism_extras:supreme_logistical_transporter"
                },
            "C": {
                "type": "compactcrafting:block",
                "block": "mekanism_extras:cosmic_logistical_transporter"
                },
            "D": {
                "type": "compactcrafting:block",
                "block": "mekanism_extras:infinite_logistical_transporter"
                },
            "X": {
                "type": "compactcrafting:block",
                "block": "materialfactory:entropy_matrix_item_output"
                }
        },
        "outputs": [{
            "id": "materialfactory:infinity_item_output",
            "Count": 1
        }]
    }).id("materialfactory:infinity_item_output")

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
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "D", "X", "D", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
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
        "catalyst": { "id": "mekmm:uu_matter","Count":1 },
        "components": {
            "A": {
                "type": "compactcrafting:block",
                "block": "avaritia:infinity"
                },
            "B": {
                "type": "compactcrafting:block",
                "block": "mekanism_extras:supreme_logistical_transporter"
                },
            "C": {
                "type": "compactcrafting:block",
                "block": "mekanism_extras:cosmic_logistical_transporter"
                },
            "D": {
                "type": "compactcrafting:block",
                "block": "mekanism_extras:infinite_logistical_transporter"
                },
            "X": {
                "type": "compactcrafting:block",
                "block": "materialfactory:entropy_matrix_item_input"
                }
        },
        "outputs": [{
            "id": "materialfactory:infinity_item_input",
            "Count": 1
        }]
    }).id("materialfactory:infinity_item_input")

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
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "D", "X", "D", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
          ]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
            ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
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
        "catalyst": { "id": "mekmm:uu_matter","Count":1 },
        "components": {
            "A": {
                "type": "compactcrafting:block",
                "block": "avaritia:infinity"
                },
            "B": {
                "type": "compactcrafting:block",
                "block": "mekanism_extras:supreme_pressurized_tube"
                },
            "C": {
                "type": "compactcrafting:block",
                "block": "mekanism_extras:cosmic_pressurized_tube"
                },
            "D": {
                "type": "compactcrafting:block",
                "block": "mekanism_extras:infinite_pressurized_tube"
                },
            "X": {
                "type": "compactcrafting:block",
                "block": "mekanism_extras:naquadah_reactor_port"
                }
        },
        "outputs": [{
            "id": "materialfactory:infinity_gas_output",
            "Count": 1
        }]
    }).id("materialfactory:infinity_gas_output")
})