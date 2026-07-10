ServerEvents.recipes(event => {
    const { avaritia } = event.recipes;
    
    // allthemodium 奇点配方
    avaritia.compressor(Ingredient.of("allthemodium:allthemodium_ingot"), Item.of("avaritia:singularity", '{Id:"avaritia:allthemodium"}'))
            .inputCount(6000)
            .timeCost(240)
    
    // unobtainium 奇点配方
    avaritia.compressor(Ingredient.of("allthemodium:unobtainium_ingot"), Item.of("avaritia:singularity", '{Id:"avaritia:unobtainium"}'))
            .inputCount(2000)
            .timeCost(240)
    
    // vibranium 奇点配方
    avaritia.compressor(Ingredient.of("allthemodium:vibranium_ingot"), Item.of("avaritia:singularity", '{Id:"avaritia:vibranium"}'))
            .inputCount(4000)
            .timeCost(240)
    
    // calorite 奇点配方
    avaritia.compressor(Ingredient.of('#forge:ingots/calorite'), Item.of("avaritia:singularity", '{Id:"avaritia:calorite"}'))
            .inputCount(10000)
            .timeCost(240)
    
    // cheese 奇点配方
    avaritia.compressor(Ingredient.of("ad_astra:cheese"), Item.of("avaritia:singularity", '{Id:"avaritia:cheese"}'))
            .inputCount(10000)
            .timeCost(240)
    
    // crystal_spirited 奇点配方
    avaritia.compressor(Ingredient.of("powah:crystal_spirited"), Item.of("avaritia:singularity", '{Id:"avaritia:crystal_spirited"}'))
            .inputCount(10000)
            .timeCost(240)
    
    // crystal_blazing 奇点配方
    avaritia.compressor(Ingredient.of("powah:crystal_blazing"), Item.of("avaritia:singularity", '{Id:"avaritia:crystal_blazing"}'))
            .inputCount(10000)
            .timeCost(240)
    
    // crystal_niotic 奇点配方
    avaritia.compressor(Ingredient.of("powah:crystal_niotic"), Item.of("avaritia:singularity", '{Id:"avaritia:crystal_niotic"}'))
            .inputCount(10000)
            .timeCost(240)
    
    // crystal_nitro 奇点配方
    avaritia.compressor(Ingredient.of("powah:crystal_nitro"), Item.of("avaritia:singularity", '{Id:"avaritia:crystal_nitro"}'))
            .inputCount(10000)
            .timeCost(240)
    
    // desh 奇点配方
    avaritia.compressor(Ingredient.of('#forge:ingots/desh'), Item.of("avaritia:singularity", '{Id:"avaritia:desh"}'))
            .inputCount(10000)
            .timeCost(240)
    
    // iceshard 奇点配方
    avaritia.compressor(Ingredient.of("ad_astra:ice_shard"), Item.of("avaritia:singularity", '{Id:"avaritia:iceshard"}'))
            .inputCount(10000)
            .timeCost(240)
    
    // ostrum 奇点配方
    avaritia.compressor(Ingredient.of('#forge:ingots/ostrum'), Item.of("avaritia:singularity", '{Id:"avaritia:ostrum"}'))
            .inputCount(10000)
            .timeCost(240)
})