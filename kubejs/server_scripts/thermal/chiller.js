ServerEvents.recipes(event => {
    event.custom({
        "type": "thermal:chiller",
        "input": [
            { "fluid": "tconstruct:molten_silver", "amount": 1000 },
            { "item": "industrialforegoing:machine_frame_simple" }
        ], "result":
        {
            "item": "thermal:machine_frame",
        },
        "energy": 10000,
    })
})