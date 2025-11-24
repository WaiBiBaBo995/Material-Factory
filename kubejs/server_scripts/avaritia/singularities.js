AvaritiaEvents.singularity(event => {
    // allthemodium 奇点
    event.register("avaritia:allthemodium", s => {
        s.setDisplayName("singularity.avaritia.allthemodium")
         .setColors(0xfcb63d, 0xf9fc3d) // [覆盖色, 底层色]
         .setCount(10000)
         .setTimeCost(240)
         .setIngredient(Ingredient.of("allthemodium:allthemodium_ingot"))
         .setEnabled(true)
         .setRecipeDisabled(false)
    })

    // unobtainium 奇点
    event.register("avaritia:unobtainium", s => {
        s.setDisplayName("singularity.avaritia.unobtainium")
         .setColors(0xA62BE0, 0xD76AEB) // [覆盖色, 底层色]
         .setCount(10000)
         .setTimeCost(240)
         .setIngredient(Ingredient.of("allthemodium:unobtainium_ingot"))
         .setEnabled(true)
         .setRecipeDisabled(false)
    })

    // vibranium 奇点
    event.register("avaritia:vibranium", s => {
        s.setDisplayName("singularity.avaritia.vibranium")
         .setColors(0x44B27A, 0x43E696) // [覆盖色, 底层色]
         .setCount(10000)
         .setTimeCost(240)
         .setIngredient(Ingredient.of("allthemodium:vibranium_ingot"))
         .setEnabled(true)
         .setRecipeDisabled(false)
    })
    
    // calorite 奇点
    event.register("avaritia:calorite", s => {
        s.setDisplayName("singularity.avaritia.calorite")
         .setColors(0x8D203A, 0xB63044) // [覆盖色, 底层色]
         .setCount(10000)
         .setTimeCost(240)
         .setTag('forge:ingots/calorite')
         .setEnabled(true)
         .setRecipeDisabled(false)
    })

    // cheese 奇点
    event.register("avaritia:cheese", s => {
        s.setDisplayName("singularity.avaritia.cheese")
         .setColors(0xDF7C26, 0xEDAE25) // [覆盖色, 底层色]
         .setCount(10000)
         .setTimeCost(240)
         .setIngredient(Ingredient.of("ad_astra:cheese"))
         .setEnabled(true)
         .setRecipeDisabled(false)
    })

    // crystal_spirited 奇点
    event.register("avaritia:crystal_spirited", s => {
        s.setDisplayName("singularity.avaritia.crystal_spirited")
         .setColors(0x054F05, 0x049404) // [覆盖色, 底层色]
         .setCount(10000)
         .setTimeCost(240)
         .setIngredient(Ingredient.of("powah:crystal_spirited"))
         .setEnabled(true)
         .setRecipeDisabled(false)
    })

    // crystal_blazing 奇点
    event.register("avaritia:crystal_blazing", s => {
        s.setDisplayName("singularity.avaritia.crystal_blazing")
         .setColors(0x571d00, 0xffa70f) // [覆盖色, 底层色]
         .setCount(10000)
         .setTimeCost(240)
         .setIngredient(Ingredient.of("powah:crystal_blazing"))
         .setEnabled(true)
         .setRecipeDisabled(false)
    })

    // crystal_niotic 奇点
    event.register("avaritia:crystal_niotic", s => {
        s.setDisplayName("singularity.avaritia.crystal_niotic")
         .setColors(0x04849C, 0x00E3FC) // [覆盖色, 底层色]
         .setCount(10000)
         .setTimeCost(240)
         .setIngredient(Ingredient.of("powah:crystal_niotic"))
         .setEnabled(true)
         .setRecipeDisabled(false)
    })

    // crystal_nitro 奇点
    event.register("avaritia:crystal_nitro", s => {
        s.setDisplayName("singularity.avaritia.crystal_nitro")
         .setColors(0x400404, 0xB14444) // [覆盖色, 底层色]
         .setCount(10000)
         .setTimeCost(240)
         .setIngredient(Ingredient.of("powah:crystal_nitro"))
         .setEnabled(true)
         .setRecipeDisabled(false)
    })

    // desh 奇点
    event.register("avaritia:desh", s => {
        s.setDisplayName("singularity.avaritia.desh")
         .setColors(0x913C3F, 0xC57041) // [覆盖色, 底层色]
         .setCount(10000)
         .setTimeCost(240)
         .setTag('forge:ingots/desh')
         .setEnabled(true)
         .setRecipeDisabled(false)
    })

    // iceshard 奇点
    event.register("avaritia:iceshard", s => {
        s.setDisplayName("singularity.avaritia.iceshard")
         .setColors(0x7C8CBC, 0x94BCD4) // [覆盖色, 底层色]
         .setCount(10000)
         .setTimeCost(240)
         .setIngredient(Ingredient.of("ad_astra:ice_shard"))
         .setEnabled(true)
         .setRecipeDisabled(false)
    })

    // ostrum 奇点
    event.register("avaritia:ostrum", s => {
        s.setDisplayName("singularity.avaritia.ostrum")
         .setColors(0x74545C, 0xA66B72) // [覆盖色, 底层色]
         .setCount(10000)
         .setTimeCost(240)
         .setTag('forge:ingots/ostrum')
         .setEnabled(true)
         .setRecipeDisabled(false)
    })
})