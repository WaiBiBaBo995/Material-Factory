ServerEvents.recipes(event => {
    event.custom({
        "type": "mythicbotany:rune_ritual",
        "center": { "item": "megacells:portable_mana_cell_256m" },
        "group": "rune_rituals",
        "inputs": [
            { "item": "extrabotany:pandoras_box" },
            { "item": "extrabotany:achilles_shield" },
            { "item": "extrabotany:rhein_hammer" },
            { "item": "extrabotany:annoyingflower" },
            { "item": "extrabotany:excalibur" },
            { "item": "mythicbotany:mjoellnir" },
        ],
        "mana": 1000000,
        "outputs": [{"count":1,"item":"fumo:cirno_item"}],
        "runes": [
            {
                "consume": true,
                "rune": { "item": "extrabotany:spirit_fragment" },
                "x": 1, "z": -1
            }, {
                "consume": true,
                "rune": { "item": "extrabotany:spirit_fragment" },
                "x": 1, "z": 1
            }, {
                "consume": true,
                "rune": { "item": "extrabotany:spirit_fragment" },
                "x": -1, "z": 1
            }, {
                "consume": true,
                "rune": { "item": "extrabotany:spirit_fragment" },
                "x": -1, "z": -1
            }, {
                "consume": true,
                "rune": { "item": "extrabotany:spirit_fragment" },
                "x": 0, "z": -1
            }, {
                "consume": true,
                "rune": { "item": "extrabotany:spirit_fragment" },
                "x": 0, "z": 1
            }, {
                "consume": true,
                "rune": { "item": "extrabotany:spirit_fragment" },
                "x": 1, "z": 0
            }, {
                "consume": true,
                "rune": { "item": "extrabotany:spirit_fragment" },
                "x": -1, "z": 0
            }, {
                "consume": false,
                "rune": { "item": "botania:rune_wrath" },
                "x": -5, "z": 0
            }, {
                "consume": false,
                "rune": { "item": "botania:rune_wrath" },
                "x": 5, "z": 0
            }, {
                "consume": false,
                "rune": { "item": "botania:rune_wrath" },
                "x": 0, "z": -5
            }, {
                "consume": false,
                "rune": { "item": "botania:rune_wrath" },
                "x": 0, "z": 5
            }, {
                "consume": false,
                "rune": { "item": "botania:rune_pride" },
                "x": -4, "z": -4
            }, {
                "consume": false,
                "rune": { "item": "botania:rune_pride" },
                "x": -4, "z": 4
            }, {
                "consume": false,
                "rune": { "item": "botania:rune_pride" },
                "x": 4, "z": -4
            }, {
                "consume": false,
                "rune": { "item": "botania:rune_pride" },
                "x": 4, "z": 4
            }, {
                "consume": false,
                "rune": { "item": "botania:rune_air" },
                "x": -3, "z": 2
            }, {
                "consume": false,
                "rune": { "item": "botania:rune_air" },
                "x": 3, "z": 2
            }, {
                "consume": false,
                "rune": { "item": "botania:rune_air" },
                "x": -2, "z": 3
            }, {
                "consume": false,
                "rune": { "item": "botania:rune_air" },
                "x": 2, "z": 3
            }, {
                "consume": false,
                "rune": { "item": "botania:rune_earth" },
                "x": -3, "z": -2
            }, {
                "consume": false,
                "rune": { "item": "botania:rune_earth" },
                "x": 3, "z": -2
            }, {
                "consume": false,
                "rune": { "item": "botania:rune_earth" },
                "x": -2, "z": -3
            }, {
                "consume": false,
                "rune": { "item": "botania:rune_earth" },
                "x": 2, "z": -3
            }, {
                "consume": false,
                "rune": { "item": "mythicbotany:nidavellir_rune" },
                "x": -2, "z": 0
            }, {
                "consume": false,
                "rune": { "item": "mythicbotany:nidavellir_rune" },
                "x": 2, "z": 0
            }, {
                "consume": false,
                "rune": { "item": "mythicbotany:asgard_rune" },
                "x": 0, "z": 2
            }, {
                "consume": false,
                "rune": { "item": "mythicbotany:joetunheim_rune" },
                "x": 0, "z": -2
            }
        ],
        "ticks": 200
    })
})