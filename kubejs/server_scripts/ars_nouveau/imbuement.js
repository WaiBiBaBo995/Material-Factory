ServerEvents.recipes(event => {
    //奥术源质
    event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
            "item": 'minecraft:lapis_lazuli'
        },
        "output": 'irons_spellbooks:arcane_essence',
        "pedestalItems": [
            {
            "item": {
                "item": 'minecraft:amethyst_shard'
            }
            },
            {
            "item": {
                "item": 'botania:elementium_ingot'
            }
            },
            {
            "item": {
                "item": 'extrabotany:elementium_quartz'
            }
            }
        ],
        "source": 1000
    })
})