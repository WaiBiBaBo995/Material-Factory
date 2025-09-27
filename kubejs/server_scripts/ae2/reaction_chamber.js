ServerEvents.recipes(event => {
    //灰烬源质
    event.custom({
        "type": "advanced_ae:reaction",
        "energy": 20000,
        "fluid": {
            "fluidStack": {
            "Amount": 100,
            "FluidName": "minecraft:lava"
            }
        },
        "input_items": [
            {
            "amount": 1,
            "ingredient": {
                "item": 'irons_spellbooks:arcane_essence'
            }
            }
        ],
        "output": {
            "#": 1,
            "#c": "ae2:i",
            "id": 'irons_spellbooks:cinder_essence'
        }
    })
})