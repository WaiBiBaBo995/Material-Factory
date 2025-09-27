ServerEvents.recipes(event => {
    event.custom({
    "type": "forge:conditional",
    "recipes": [
        {
        "conditions": [
            {
            "type": "forge:not",
            "value": {
                "type": "forge:mod_loaded",
                "modid": "cp_tweaks"
            }
            }
        ],
        "recipe": {
            "type": "ad_astra:nasa_workbench",
            "ingredients": [
            { "item": "materialfactory:anon_chihaya" },
            { "item": 'materialfactory:anon' },
            { "item": 'materialfactory:anon' },
            { "item": "ad_astra:permafrost_tiles" },
            { "item": "ad_astra:permafrost_tiles" },
            { "item": "ad_astra:permafrost_tiles" },
            { "item": "ad_astra:permafrost_tiles" },
            { "item": "ad_astra:rocket_fin" },
            { "item": "ad_astra:calorite_tank" },
            { "item": "ad_astra:calorite_tank" },
            { "item": "ad_astra:rocket_fin" },
            { "item": "ad_astra:rocket_fin" },
            { "item": "ad_astra:calorite_engine" },
            { "item": "ad_astra:rocket_fin" }
            ],
            "result": {
            "count": 1,
            "id": "ad_astra_rocketed:tier_7_rocket"
            }
        }
        }
    ]
    })
})