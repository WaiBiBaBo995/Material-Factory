ServerEvents.recipes(event => {
    //钢制外壳
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemicalInput": {
            "amount": 250,
            "infuse_type": "mekanism:carbon"
        },
        "itemInput": {
            "ingredient": {
            "item": 'thermal:machine_frame'
            }
        },
        "output": {
            "item": 'mekanism:steel_casing'
        }
    })

    //红石通量线圈
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemicalInput": {
            "amount": 10,
            "infuse_type": "mekanism:redstone"
        },
        "itemInput": {
            "ingredient": {
                "tag": 'forge:rods/gold'
            }
        },
        "output": {
            "item": 'thermal:rf_coil'
        }
    })

    //富集ATM
    event.custom({
        "type": "mekanism:infusion_conversion",
        "input": {
            "ingredient": {
            "item": 'mekanism:enriched_allthemodium'
            }
        },
        "output": {
            "amount": 100,
            "infuse_type": "mekanism:allthemodium"
        }
    })
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemicalInput": {
            "amount": 50,
            "infuse_type": "mekanism_extras:spectrum"
        },
        "itemInput": {
            "ingredient": {
            "item": 'allthemodium:allthemodium_dust'
            }
        },
        "output": {
            "item": 'mekanism:enriched_allthemodium'
        }
    })
    //难得素-ATM合金粉
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemicalInput": {
            "amount": 50,
            "infuse_type": "mekanism:allthemodium"
        },
        "itemInput": {
            "ingredient": {
            "item": 'allthemodium:unobtainium_dust'
            }
        },
        "output": {
            "item": 'allthemodium:unobtainium_allthemodium_alloy_dust'
        }
    })

    //灌注胶乳
    event.custom({
        "type": "mekanism:infusion_conversion",
        "input": {
            "ingredient": {
            "item": 'industrialforegoing:dryrubber'
            }
        },
        "output": {
            "amount": 450,
            "infuse_type": "mekanism:latex"
        }
    })
    event.custom({
        "type": "mekanism:infusion_conversion",
        "input": {
            "ingredient": {
            "item": 'industrialforegoing:tinydryrubber'
            }
        },
        "output": {
            "amount": 50,
            "infuse_type": "mekanism:latex"
        }
    })
    //缺陷机器框架
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemicalInput": {
            "amount": 1000,
            "infuse_type": "mekanism:latex"
        },
        "itemInput": {
            "ingredient": {
            "item": 'materialfactory:unbonded_machine_frame_pity'
            }
        },
        "output": {
            "item": 'industrialforegoing:machine_frame_pity'
        }
    })
})
