ServerEvents.recipes(event => {
    //无中生有
    event.custom({"type":"mekanism:crushing","input":{"ingredient":{"tag":'forge:sand'}},"output":{"item":"createsifter:dust"}})
    event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":'allthecompressed:sand_1x'}},"output":{"item":"createsifter:dust_1x"}})

    event.custom({"type":"mekanism:crushing","input":{"ingredient":{"tag":'forge:netherrack'}},"output":{"item":"createsifter:crushed_netherrack"}})
    event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":'allthecompressed:netherrack_1x'}},"output":{"item":"createsifter:crushed_netherrack_1x"}})

    event.custom({"type":"mekanism:crushing","input":{"ingredient":{"tag":'forge:end_stones'}},"output":{"item":"createsifter:crushed_end_stone"}})
    event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":'allthecompressed:end_stone_1x'}},"output":{"item":"createsifter:crushed_end_stone_1x"}})

    event.custom({"type":"mekanism:crushing","input":{"ingredient":{"tag":'forge:deepslate'}},"output":{"item":"createsifter:crushed_deepslate"}})
    event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":'allthecompressed:cobbled_deepslate_1x'}},"output":{"item":"createsifter:crushed_deepslate_1x"}})

    event.custom({"type":"mekanism:crushing","input":{"ingredient":{"tag":'forge:blackstone'}},"output":{"item":"createsifter:crushed_blackstone"}})
    event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":'allthecompressed:blackstone_1x'}},"output":{"item":"createsifter:crushed_blackstone_1x"}})

    event.custom({"type":"mekanism:crushing","input":{"ingredient":{"tag":'forge:ender_pearls'}},"output":{"item":'ae2:ender_dust'}})

    event.custom({"type":"mekanism:crushing","input":{"ingredient":{"tag":'forge:gems/sulfur'}},"output":{"item":'thermal:sulfur_dust'}})
})