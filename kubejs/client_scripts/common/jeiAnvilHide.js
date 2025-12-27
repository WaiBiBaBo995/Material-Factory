const JEI_RecipeTypes = Java.loadClass('mezz.jei.api.constants.RecipeTypes')

function HideAnvilRecipe(leftitem, rightitem) {
  global.jeiRuntime.getRecipeManager().createRecipeLookup(JEI_RecipeTypes.ANVIL).get().forEach(i => {
    if (i.getLeftInputs()[0] == leftitem &&
      i.getRightInputs()[0] == rightitem &&
      i.getOutputs()[0] == leftitem) {
      global.jeiRuntime.recipeManager.hideRecipes(JEI_RecipeTypes.ANVIL, [i])
    }
  })
}

JEIEvents.removeRecipes(event => {
    HideAnvilRecipe("materialfactory:charge_spool", "minecraft:enchanted_book")
})