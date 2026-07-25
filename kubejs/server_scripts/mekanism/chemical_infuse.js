ServerEvents.recipes(event => {
    event.recipes.mekanism.dissolution({amount:10000, slurry:"moremekanismprocessing:dirty_lithium"}, {amount:1, gas:"mekanism:sulfuric_acid"}, "mekanism:dust_lithium")
})