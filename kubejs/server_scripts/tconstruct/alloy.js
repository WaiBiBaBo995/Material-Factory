ServerEvents.recipes(event =>{
    event.custom({
        "type": "tconstruct:alloy",
        "conditions": [
            {
            "value": {
                "tag": "forge:ingots/aluminum",
                "type": "forge:tag_empty"
            },
            "type": "forge:not"
            }
        ],
        "inputs": [
            {
            "tag": "forge:molten_aluminum",
            "amount": 270
            },
            {
            "tag": "forge:molten_iron",
            "amount": 90
            },
            {
            "tag": "tconstruct:molten_obsidian",
            "amount": 250
            }
        ],
        "result": {
            "fluid": "tinkerscalibration:moltenalumite",
            "amount": 360
        },
        "temperature": 925
    })
})