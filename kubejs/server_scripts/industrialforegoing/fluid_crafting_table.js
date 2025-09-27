ServerEvents.recipes(event => {
    //时间之瓶
    event.custom({
        "type": "ifeu:shaped",
        "inputFluid": "{Amount:10000,FluidName:\"industrialforegoing:ether_gas\"}",
        "inputs": [
            {
            "item": 'torchmaster:megatorch'
            },
            {
            "item": 'mekanism:pellet_antimatter'
            },
            {
            "item": 'torchmaster:megatorch'
            },
            {
            "item": 'ae2:quartz_vibrant_glass'
            },
            {
            "item": 'advanced_ae:data_entangler'
            },
            {
            "item": 'ae2:quartz_vibrant_glass'
            },
            {
            "item": 'ae2:quartz_vibrant_glass'
            },
            {
            "item": 'advanced_ae:shattered_singularity'
            },
            {
            "item": 'ae2:quartz_vibrant_glass'
            }
        ],
        "output": {
            "count": 1,
            "item": 'tiab:time_in_a_bottle'
        }
    })
})
