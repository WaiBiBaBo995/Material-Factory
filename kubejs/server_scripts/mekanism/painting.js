let dyes = ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "light_gray", "cyan", "purple", "blue", "brown", "green", "red", "black"];
dyes.forEach(dye => {
    ServerEvents.recipes(event => {
        event.custom({
            "type": "mekanism:painting",
            "chemicalInput": {
                "amount": 5120,
                "pigment": `mekanism:${dye}`
            },
            "itemInput": {
                "ingredient": {
                    "item": "materialfactory:megablock"
                }
            },
            "output": { "item": `materialfactory:${dye}_megablock` }
        })
    })
})