const CropRegistry = Java.loadClass('com.blakebr0.mysticalagriculture.registry.CropRegistry')

const SecondarySeed = 0.01
const TierSecondaryCutoff = 5

ServerEvents.tags('item', event => {
  let CropRegistryInstance = CropRegistry.getInstance()
  let cropTiers = CropRegistryInstance.getTiers()
  let tiers = Array.apply(null, Array(cropTiers.length))
  for (const CropTier of cropTiers) {
    tiers[CropTier.getValue() - 1] = CropTier.getFarmland()
    if (CropTier.getValue() >= TierSecondaryCutoff) {
      CropTier.setSecondarySeedDrop(false)
      CropTier.setBaseSecondaryChance(0)
    } else {
      CropTier.setBaseSecondaryChance(SecondarySeed)
    }
  }
  for (let i = 0; i < tiers.length; i++) {
    let farmA = tiers[i]
    let farmB = null
    if (i + 1 < tiers.length) {
      if (!farmA.equals(tiers[i + 1])) {
        farmB = tiers[i + 1]
      }
    }
    let tierA = farmA.getIdLocation().getPath().replace('_farmland', '')
    event.add(`kubejs:farmland/${tierA}`, farmA.getId())
    if (farmB) {
      let tierB = farmB.getIdLocation().getPath().replace('_farmland', '')
      event.add(`kubejs:farmland/${tierA}`, `#kubejs:farmland/${tierB}`)
    } else {
      break
    }
  }
})

ServerEvents.recipes(event => {
  let JsonExport = { enabled: [], disabled: [] }
  let CropRegistryInstance = CropRegistry.getInstance()
  let CropList = CropRegistryInstance.getCrops()
  for (const Crop of CropList) {
    let CropName = Crop.getName()
    if (Crop.isEnabled()) {
      JsonExport.enabled.push(CropName)
    } else {
      JsonExport.disabled.push(CropName)
    }
  }
  JsonIO.write('kubejs/server_scripts/mysticalagriculture/cropInfo.json', JsonExport)

if (Platform.isLoaded('thermal')) {
    JsonExport.enabled.forEach(cropName => {
      let Crop = CropRegistryInstance.getCropByName(cropName)
      event.custom({
        type: 'thermal:insolator',
        ingredient: Ingredient.of(Crop.getSeedsItem()).toJson(),
        result: [
          {
            item: Crop.getEssenceItem().getId(),
            chance: 1 + SecondarySeed
          },
          {
            item: Crop.getSeedsItem().getId(),
            chance: Crop.getTier().hasSecondarySeedDrop() ? (1 + SecondarySeed) : 1,
            locked: true
          }
        ]
      }).id(`kubejs:thermal/machines/insolator/mysticalagriculture/${cropName}`)
    })
  }
})

ServerEvents.recipes(event => {
  function essenceCircle(result, essenceType) {
    event.shaped(result, ['aaa', 'a a', 'aaa'], { a: `mysticalagriculture:${essenceType}_essence` }).id(`kubejs:mysticalagriculture/${essenceType}_essence_crafting`)
  }
  essenceCircle('allthemodium:allthemodium_nugget', 'allthemodium')
  essenceCircle('allthemodium:vibranium_nugget', 'vibranium')
  essenceCircle('allthemodium:unobtainium_nugget', 'unobtainium')
  essenceCircle('ad_astra:cheese', 'cheese')
  essenceCircle('ad_astra:desh_nugget', 'desh')
  essenceCircle('ad_astra:ostrum_nugget', 'ostrum')
  essenceCircle('ad_astra:calorite_nugget', 'calorite')
  essenceCircle('ad_astra:ice_shard', 'iceshard')
})