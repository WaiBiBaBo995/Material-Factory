ServerEvents.recipes(event =>{
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": false,
        "output": {
            "item": 'allthemodium:unobtainium_vibranium_alloy_dust'
        },
        "pedestalItems": [
            {
            "item": 'ars_nouveau:thread_spellpower'
            },
            {
            "item": 'enderio:clayed_glowstone'
            },
            {
            "item": 'materialfactory:unobtainium_mass'
            },
            {
            "item": 'enderio:clayed_glowstone'
            },
            {
            "item": 'productivebees:draconic_dust'
            },
            {
            "item": 'enderio:clayed_glowstone'
            },
            {
            "item": 'materialfactory:vibranium_mass'
            },
            {
            "item": 'enderio:clayed_glowstone'
            }
        ],
        "reagent": [
            {
            "tag": 'forge:dusts/allthemodium'
            }
        ],
        "sourceCost": 1000
    })
})