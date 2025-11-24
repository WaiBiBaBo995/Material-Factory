ServerEvents.recipes(event => {
    event.custom({
        "type": "thermal_extra:fluid_mixer",
        "energy": 10000,
        "ingredients": [
            { "amount": 100, "fluid_tag": 'forge:molten_steel' },
            { "amount": 100, "fluid_tag": 'forge:molten_osmium' }
        ],
        "result": [
            { "amount": 100, "fluid": "materialfactory:molten_steel_osmium_alloy" }
        ]
    })
})