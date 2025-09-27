ServerEvents.recipes(event => {
    
    //ad压缩机
    event.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
            "item": 'thermal:machine_press',
            "count": 1
            },
            {
            "item": 'mekanism:ultimate_compressing_factory',
            "count": 1
            }
        ],
        "result": [
            {
            "item": 'ad_astra:compressor',
            "count": 1
            }
        ],
        "energy": 2000000
    })
})