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
            "item": 'actuallyadditions:palis_crystal'
            },
            {
            "item": 'torchmaster:megatorch'
            },
            {
            "item": 'ae2:quartz_vibrant_glass'
            },
            {
            "item": 'minecraft:clock'
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

    //红石通量线圈
    event.custom({
        "type": "ifeu:shaped",
        "inputFluid": "{Amount:250,FluidName:\"xycraft_machines:redstone_slurry\"}",
        "inputs": [
            {
            "item": 'ifeu:air'
            },
            {
            "item": "minecraft:gold_nugget"
            },
            {
            "item": 'ifeu:air'
            },
            {
            "item": "actuallyadditions:restonia_crystal_shard"
            },
            {
            "item": 'supplementaries:gold_trapdoor'
            },
            {
            "item": "actuallyadditions:restonia_crystal_shard"
            },
            {
            "item": 'ifeu:air'
            },
            {
            "item": "minecraft:gold_nugget"
            },
            {
            "item": 'ifeu:air'
            }
        ],
        "output": {
            "count": 1,
            "item": "thermal:rf_coil"
        }
    })
})
