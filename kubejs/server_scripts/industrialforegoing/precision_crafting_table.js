ServerEvents.recipes(event => {
    //热力机器框架
    event.custom({
        "type": "ifeu:precision_shaped",
        "chance": 0.8,
        "inputs": [
            { "item": "thermal:silver_coin" },
            { "item": "thermal:iron_coin" },
            { "item": "thermal:tin_coin" },
            { "item": "thermal:rf_coil" },
            { "item": "industrialforegoing:machine_frame_simple" },
            { "item": "thermal:rf_coil" },
            { "item": "thermal:tin_coin" },
            { "item": "thermal:iron_coin" },
            { "item": "thermal:silver_coin" }
        ],
        "output": {
            "count": 1,
            "item": "thermal:machine_frame"
        }
    }).id('thermal:machine_frame')
})