ServerEvents.recipes(event =>{
    //虚空机器框架
    event.custom({
        "type": "enderio:alloy_smelting",
        "energy": 3600,
        "experience": 0.3,
        "inputs": [
            {
            "count": 1,
            "ingredient": {
                "item": 'materialfactory:industrial_dye_blend'
            }
            },
            {
            "count": 1,
            "ingredient": {
                "item": 'materialfactory:simple_machine_chassis'
            }
            }
        ],
        "result": {
            "item": 'enderio:void_chassis'
        }
    }).id('enderio:void_chassis')

    //注魂框架
    event.custom({
        "type": "enderio:alloy_smelting",
        "energy": 3600,
        "experience": 0.3,
        "inputs": [
            {
            "count": 1,
            "ingredient": {
                "item": 'materialfactory:soul_attuned_dye_blend'
            }
            },
            {
            "count": 1,
            "ingredient": {
                "item": 'materialfactory:simple_machine_chassis'
            }
            }
        ],
        "result": {
            "item": 'enderio:ensouled_chassis'
        }
    }).id('enderio:ensouled_chassis')
})