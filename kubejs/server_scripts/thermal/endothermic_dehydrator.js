ServerEvents.recipes(event => {
    event.custom({
        "type":"thermal_extra:endothermic_dehydrator",
        "energy":1000,
        "ingredients":[
            {"amount":250,"fluid_tag": "forge:latex"}
        ],
        "result":
        [
            {"chance":1,"item":"industrialforegoing:dryrubber"}
        ]
    })
})