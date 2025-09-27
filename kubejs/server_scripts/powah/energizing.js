ServerEvents.recipes(event =>{
    event.custom({
    "type": "powah:energizing",
    "ingredients": [
        {"item": 'materialfactory:rainbow_slimeball'},
        {"item": 'cold_sweat:chameleon_molt'},
        {"item": 'powah:crystal_blazing'},
        {"tag": 'forge:nether_stars'},
        {"item": 'powah:dry_ice'},
        {"item": 'botania:mana_string'}
    ],
    "energy": 1000000,
    "result": {
        "item": 'materialfactory:thermostat_charm'
    }
    })
})