StartupEvents.registry('potion', e=>{
   let PotionBuilder = Java.loadClass('dev.latvian.mods.kubejs.misc.PotionBuilder')
   let effect = `cold_sweat:grace`
 
   e.createCustom('kubejs:grace', ()=>{
      return new PotionBuilder(`cold_sweat:grace`)
      .effect(effect, 3600, 0)
      .createObject()
   })
 
   e.createCustom('kubejs:long_grace', ()=>{
      return new PotionBuilder(`cold_sweat:grace`)
      .effect(effect, 9600, 0)
      .createObject()
   })
})

MoreJSEvents.registerPotionBrewing((event) => {
    event.addPotionBrewing('materialfactory:rainbow_slimeball', "kubejs:grace");
    event.addPotionBrewing("minecraft:redstone", "kubejs:grace", "kubejs:long_grace");
})