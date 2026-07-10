ServerEvents.recipes(event => {
    event.custom({
        "type": "thoriumreactors:thorium_crafting",
        "key": {
            "A": { "tag": "forge:ingots/gold" },
            "B": { "tag": "forge:nuggets/gold" },
            "C": { "tag": "forge:ingots/iron" },
            "D": { "tag": "forge:nuggets/iron" },
            "E": { "item": "minecraft:redstone" },
            "F": { "item": "thoriumreactors:machine_casing" },
            "G": { "item": "thoriumreactors:module_sensor" },
            "H": { "tag": "forge:nuggets/aluminum" },
            "I": { "tag": "forge:nuggets/molybdenum" },
            "J": { "tag": "forge:nuggets/fluorite" },
            "K": { "tag": "forge:nuggets/nickel" }
        },
        "pattern": [
            " BAB ",
            "DEHED",
            "CKFIC",
            "DEJGD",
            " BAB "
        ],
        "result": { "item": "thoriumreactors:blast_furnace_block" }
    }).id('thoriumreactors:thorium_crafting/blast_furnace')

    event.custom({
        "type": "thoriumreactors:thorium_crafting",
        "key": {
            "A": { "tag": "forge:nuggets/aluminum" },
            "B": { "tag": "forge:ingots/steel" },
            "C": { "item": "minecraft:redstone" },
            "D": { "tag": "forge:ingots/iron" },
            "E": { "item": "thoriumreactors:simple_energy_tank" },
            "F": { "tag": "forge:nuggets/molybdenum" }
        },
        "pattern": [
            " DDD ",
            " BAB ",
            " CEC ",
            " BFB ",
            " DDD "
        ],
        "result": { "item": "thoriumreactors:generic_energy_tank" }
    }).id('thoriumreactors:thorium_crafting/generic_energy_tank')

    event.custom({
        "type": "thoriumreactors:thorium_crafting",
        "key": {
            "A": { "tag": "forge:ingots/iron" },
            "B": { "tag": "forge:nuggets/iron" },
            "C": { "item": "minecraft:coal" },
            "D": { "item": "thoriumreactors:machine_casing" },
            "E": { "tag": "forge:nuggets/aluminum" }
        },
        "pattern": [
            " BAB ",
            "BCECB",
            "AEDEA",
            "BCECB",
            " BAB "
        ],
        "result": { "item": "thoriumreactors:generator_block" }
    }).id('thoriumreactors:thorium_crafting/generator')
})