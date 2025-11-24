ServerEvents.recipes(event => {

    const ingots = [
        "soul_infused",
        "shellite",
        "twinite",
        "dragonsteel",
        "abyssal"
    ]
    ingots.forEach((ingot)=>{
        event.custom({
            "type": "thermal:crucible",
            "energy": 10000,
            "ingredients":
                [{
                    "item": `thermal_extra:${ingot}_ingot`
                }],
            "result": [{
                "amount": 90, "fluid": `thermal_extra:${ingot}`
            }]
        })
        event.custom({
            "type": "thermal:crucible",
            "energy": 45000,
            "ingredients":
                [{
                    "item": `thermal_extra:${ingot}_block`
                }],
            "result": [{
                "amount": 810, "fluid": `thermal_extra:${ingot}`
            }]
        })
    })

    const molteningots = [
        "steel",
        "osmium"
    ]
    molteningots.forEach((ingot)=>{
        event.custom({
            "type": "thermal:crucible",
            "energy": 10000,
            "ingredients":
                [{
                    "tag": `forge:ingots/${ingot}`
                }],
            "result": [{
                "amount": 90, "fluid": `tconstruct:molten_${ingot}`
            }]
        })
        event.custom({
            "type": "thermal:crucible",
            "energy": 45000,
            "ingredients":
                [{
                    "tag": `forge:storage_blocks/${ingot}`
                }],
            "result": [{
                "amount": 810, "fluid": `tconstruct:molten_${ingot}`
            }]
        })
    })

    event.custom({
            "type": "thermal:crucible",
            "energy": 10000,
            "ingredients":
                [{
                    "item": 'alltheores:signalum_ingot'
                }],
            "result": [{
                "amount": 90, "fluid": "tconstruct:molten_signalum"
            }]
        })
})