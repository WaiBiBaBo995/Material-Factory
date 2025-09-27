ServerEvents.recipes(event =>{
    //至高木树苗
    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
            {
            "item": 'minecraft:cherry_sapling'
            }
        ],
        "output": [
            {
            "item": 'ars_nouveau:blue_archwood_sapling'
            }
        ]
    })

    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
            {
            "item": 'ars_nouveau:blue_archwood_sapling'
            }
        ],
        "output": [
            {
            "item": 'ars_nouveau:red_archwood_sapling'
            }
        ]
    })

    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
            {
            "item": 'ars_nouveau:red_archwood_sapling'
            }
        ],
        "output": [
            {
            "item": 'ars_nouveau:purple_archwood_sapling'
            }
        ]
    })
    
    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
            {
            "item": 'ars_nouveau:purple_archwood_sapling'
            }
        ],
        "output": [
            {
            "item": 'ars_nouveau:green_archwood_sapling'
            }
        ]
    })

    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
            {
            "item": 'ars_nouveau:green_archwood_sapling'
            }
        ],
        "output": [
            {
            "item": 'ars_nouveau:blue_archwood_sapling'
            }
        ]
    })

    //难得素-振金合金
    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
            {
            "item": 'allthemodium:vibranium_dust'
            }
        ],
        "output": [
            {
            "item": 'allthemodium:vibranium_clump'
            }
        ]
    })
    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
            {
            "item": 'allthemodium:unobtainium_dust'
            }
        ],
        "output": [
            {
            "item": 'allthemodium:unobtainium_clump'
            }
        ]
    })
})