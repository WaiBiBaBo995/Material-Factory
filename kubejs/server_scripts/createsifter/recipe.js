// 线筛网
function stringMesh(output, input, time, isWater) {
	sifting(output, [input, "createsifter:string_mesh"], time, isWater)
}

// 安山筛网
function andesiteMesh(output, input, time, isWater) {
	sifting(output, [input, "createsifter:andesite_mesh"], time, isWater)
}
// 锌筛网
function zincMesh(output, input, time, isWater) {
	sifting(output, [input, "createsifter:zinc_mesh"], time, isWater)
}
// 黄铜筛网
function brassMesh(output, input, time, isWater) {
	sifting(output, [input, "createsifter:brass_mesh"], time, isWater)
}
// 高级黄铜筛网
function advancedBrassMesh(output, input, time, isWater) {
	sifting(output, [input, "createsifter:advanced_brass_mesh"], time, isWater)
}
// 钻石筛网
function diamondMesh(output, input, time, isWater) {
	sifting(output, [input, "createsifter:diamond_mesh"], time, isWater)
}
// 高级钻石筛网
function advancedDiamondMesh(output, input, time, isWater) {
	sifting(output, [input, "createsifter:advanced_diamond_mesh"], time, isWater)
}
// 下界合金筛网
function netheriteMesh(output, input, time, isWater) {
	sifting(output, [input, "createsifter:netherite_mesh"], time, isWater)
}
// 高级下界合金筛网
function advancedNetheriteMesh(output, input, time, isWater) {
	sifting(output, [input, "createsifter:advanced_netherite_mesh"], time, isWater)
}


/**
 * 
 * @param {*} output 输出
 * @param {*} input 输入
 * @param {*} time 不填写默认为5秒
 * @param {*} isWater 不填写默认为false
 */
function sifting(output, input, time, isWater) {
	if (time == undefined) time = 5
	if (isWater == undefined) isWater = false
	ServerEvents.recipes((event) => {
		const createsifter = event.recipes.createsifter
		createsifter.sifting(output, input, time * 20, isWater)
	})
}

//灵魂沙
stringMesh([
			Item.of('minecraft:quartz').withChance(0.12),
			Item.of('minecraft:bone').withChance(0.08),
			Item.of('minecraft:gunpowder').withChance(0.07),
			Item.of('minecraft:glowstone_dust').withChance(0.06),
			Item.of('minecraft:nether_wart').withChance(0.06),
			Item.of('minecraft:ghast_tear').withChance(0.06),
		], 'minecraft:soul_sand')
andesiteMesh([
			Item.of('minecraft:quartz').withChance(0.14),
			Item.of('minecraft:bone').withChance(0.1),
			Item.of('minecraft:gunpowder').withChance(0.08),
			Item.of('minecraft:glowstone_dust').withChance(0.07),
			Item.of('minecraft:ghast_tear').withChance(0.07),
			Item.of('minecraft:nether_wart').withChance(0.06),
			Item.of('minecraft:red_mushroom').withChance(0.03),
			Item.of('minecraft:brown_mushroom').withChance(0.03)
		], 'minecraft:soul_sand')
zincMesh([
			Item.of('mysticalagriculture:prosperity_shard').withChance(0.2),
			Item.of('minecraft:quartz').withChance(0.15),
			Item.of('minecraft:bone').withChance(0.08),
			Item.of('minecraft:gunpowder').withChance(0.07),
			Item.of('minecraft:glowstone_dust').withChance(0.06),
			Item.of('minecraft:ghast_tear').withChance(0.06),
			Item.of('minecraft:nether_wart').withChance(0.05),
		], 'minecraft:soul_sand')
brassMesh([
			Item.of('mysticalagriculture:prosperity_shard').withChance(0.2),
			Item.of('minecraft:quartz').withChance(0.17),
			Item.of('minecraft:bone').withChance(0.11),
			Item.of('minecraft:gunpowder').withChance(0.1),
			Item.of('minecraft:glowstone_dust').withChance(0.09),
			Item.of('minecraft:ghast_tear').withChance(0.08),
			Item.of('minecraft:nether_wart').withChance(0.08),
		], 'minecraft:soul_sand')
diamondMesh([
			Item.of('mysticalagriculture:prosperity_shard').withChance(0.2),
			Item.of('minecraft:quartz').withChance(0.19),
			Item.of('minecraft:gunpowder').withChance(0.11),
			Item.of('minecraft:glowstone_dust').withChance(0.11),
			Item.of('minecraft:nether_wart').withChance(0.1),
			Item.of('minecraft:ghast_tear').withChance(0.09),
		], 'minecraft:soul_sand',4)
netheriteMesh([
			Item.of('mysticalagriculture:prosperity_shard',2).withChance(0.36),
			Item.of('minecraft:quartz').withChance(0.21),
			Item.of('minecraft:gunpowder').withChance(0.14),
			Item.of('minecraft:glowstone_dust').withChance(0.13),
			Item.of('minecraft:nether_wart').withChance(0.12),
			Item.of('minecraft:ghast_tear').withChance(0.11),
			Item.of('create:experience_nugget').withChance(0.05)
		], 'minecraft:soul_sand',3)
advancedBrassMesh([
			Item.of('mysticalagriculture:prosperity_shard',7).withChance(0.2),
			Item.of('minecraft:quartz',7).withChance(0.17),
			Item.of('minecraft:bone',7).withChance(0.11),
			Item.of('minecraft:gunpowder',7).withChance(0.1),
			Item.of('minecraft:glowstone_dust',7).withChance(0.09),
			Item.of('minecraft:ghast_tear',7).withChance(0.08),
			Item.of('minecraft:nether_wart',7).withChance(0.08),
		], 'allthecompressed:soul_sand_1x',3)
advancedDiamondMesh([
			Item.of('mysticalagriculture:prosperity_shard',7).withChance(0.2),
			Item.of('minecraft:quartz',7).withChance(0.19),
			Item.of('minecraft:gunpowder',7).withChance(0.11),
			Item.of('minecraft:glowstone_dust',7).withChance(0.11),
			Item.of('minecraft:nether_wart',7).withChance(0.1),
			Item.of('minecraft:ghast_tear',7).withChance(0.09),
		], 'allthecompressed:soul_sand_1x',2)
advancedNetheriteMesh([
			Item.of('mysticalagriculture:prosperity_shard',16).withChance(0.36),
			Item.of('minecraft:quartz',8).withChance(0.21),
			Item.of('minecraft:gunpowder',8).withChance(0.14),
			Item.of('minecraft:glowstone_dust',8).withChance(0.13),
			Item.of('minecraft:nether_wart',8).withChance(0.12),
			Item.of('minecraft:ghast_tear',8).withChance(0.11),
			Item.of('create:experience_nugget',8).withChance(0.05)
		], 'allthecompressed:soul_sand_1x',1)
//泥土
stringMesh([
			Item.of('minecraft:flint').withChance(0.25),
			Item.of('minecraft:wheat_seeds').withChance(0.125),
			Item.of('minecraft:pumpkin_seeds').withChance(0.1),
			Item.of('minecraft:beetroot_seeds').withChance(0.1),
			Item.of('minecraft:sugar_cane').withChance(0.1),
			Item.of('minecraft:carrot').withChance(0.1),
			Item.of('minecraft:melon_seeds').withChance(0.1),
			Item.of('minecraft:potato').withChance(0.1),
			Item.of('minecraft:poisonous_potato').withChance(0.05),
			Item.of('minecraft:bamboo').withChance(0.04),
			Item.of('thermal:frost_melon_seeds').withChance(0.005),
		], 'minecraft:dirt')
andesiteMesh([
			Item.of('minecraft:flint').withChance(0.3),
			Item.of('minecraft:sugar_cane').withChance(0.15),
			Item.of('minecraft:wheat_seeds').withChance(0.15),
			Item.of('minecraft:potato').withChance(0.13),
			Item.of('minecraft:carrot').withChance(0.13),
			Item.of('minecraft:pumpkin_seeds').withChance(0.12),
			Item.of('minecraft:melon_seeds').withChance(0.12),
			Item.of('minecraft:sweet_berries').withChance(0.05),
			Item.of('minecraft:bamboo').withChance(0.04),
			Item.of('minecraft:poisonous_potato').withChance(0.03),
			Item.of('minecraft:pink_petals').withChance(0.03),
			Item.of('ars_nouveau:sourceberry_bush').withChance(0.03),
			Item.of('thermal:frost_melon_seeds').withChance(0.01),
		], 'minecraft:dirt')
zincMesh([
			Item.of('minecraft:flint').withChance(0.3),
			Item.of('minecraft:wheat_seeds').withChance(0.175),
			Item.of('minecraft:carrot').withChance(0.15),
			Item.of('minecraft:pumpkin_seeds').withChance(0.15),
			Item.of('minecraft:melon_seeds').withChance(0.15),
			Item.of('minecraft:sugar_cane').withChance(0.15),
			Item.of('minecraft:potato').withChance(0.15),
			Item.of('minecraft:poisonous_potato').withChance(0.1),
			Item.of('minecraft:bamboo').withChance(0.06),
			Item.of('thermal:frost_melon_seeds').withChance(0.02),
		], 'minecraft:dirt')
brassMesh([
			Item.of('minecraft:flint').withChance(0.2),
			Item.of('minecraft:wheat_seeds').withChance(0.2),
			Item.of('minecraft:carrot').withChance(0.175),
			Item.of('minecraft:potato').withChance(0.175),
			Item.of('minecraft:pumpkin_seeds').withChance(0.165),
			Item.of('minecraft:melon_seeds').withChance(0.165),
			Item.of('minecraft:poisonous_potato').withChance(0.13),
			Item.of('minecraft:bamboo').withChance(0.05),
			Item.of('thermal:frost_melon_seeds').withChance(0.03),
			Item.of('minecraft:golden_carrot').withChance(0.02),
		], 'minecraft:dirt')
diamondMesh([
			Item.of('minecraft:flint',3).withChance(0.3),
			Item.of('minecraft:carrot').withChance(0.25),
			Item.of('minecraft:potato').withChance(0.25),
			Item.of('minecraft:wheat_seeds').withChance(0.15),
			Item.of('minecraft:poisonous_potato').withChance(0.1),
			Item.of('minecraft:bamboo').withChance(0.06),
			Item.of('thermal:frost_melon_seeds').withChance(0.04),
			Item.of('minecraft:golden_carrot').withChance(0.02),
		], 'minecraft:dirt',4)
netheriteMesh([
			Item.of('minecraft:flint',3).withChance(0.4),
			Item.of('minecraft:carrot').withChance(0.3),
			Item.of('minecraft:potato').withChance(0.3),
			Item.of('minecraft:wheat_seeds').withChance(0.2),
			Item.of('minecraft:poisonous_potato').withChance(0.2),
			Item.of('minecraft:bamboo').withChance(0.06),
			Item.of('thermal:frost_melon_seeds').withChance(0.05),
			Item.of('create:experience_nugget').withChance(0.05),
			Item.of('minecraft:golden_carrot').withChance(0.01),
			Item.of('minecraft:golden_apple').withChance(0.0025),
		], 'minecraft:dirt',3)
advancedBrassMesh([
			Item.of('minecraft:flint',7).withChance(0.2),
			Item.of('minecraft:wheat_seeds',7).withChance(0.2),
			Item.of('minecraft:carrot',7).withChance(0.175),
			Item.of('minecraft:potato',7).withChance(0.175),
			Item.of('minecraft:pumpkin_seeds',7).withChance(0.165),
			Item.of('minecraft:melon_seeds',7).withChance(0.165),
			Item.of('minecraft:poisonous_potato',7).withChance(0.13),
			Item.of('minecraft:bamboo',7).withChance(0.05),
			Item.of('thermal:frost_melon_seeds',7).withChance(0.03),
			Item.of('minecraft:golden_carrot',7).withChance(0.02),
		], 'allthecompressed:dirt_1x',3)
advancedDiamondMesh([
			Item.of('minecraft:flint',21).withChance(0.3),
			Item.of('minecraft:carrot',7).withChance(0.25),
			Item.of('minecraft:potato',7).withChance(0.25),
			Item.of('minecraft:wheat_seeds',7).withChance(0.15),
			Item.of('minecraft:poisonous_potato',7).withChance(0.1),
			Item.of('minecraft:bamboo',7).withChance(0.06),
			Item.of('thermal:frost_melon_seeds',7).withChance(0.04),
			Item.of('minecraft:golden_carrot',7).withChance(0.02),
		], 'allthecompressed:dirt_1x',2)
advancedNetheriteMesh([
			Item.of('minecraft:flint',24).withChance(0.4),
			Item.of('minecraft:carrot',8).withChance(0.3),
			Item.of('minecraft:potato',8).withChance(0.3),
			Item.of('minecraft:wheat_seeds',8).withChance(0.2),
			Item.of('minecraft:poisonous_potato',8).withChance(0.2),
			Item.of('minecraft:bamboo',8).withChance(0.06),
			Item.of('thermal:frost_melon_seeds',8).withChance(0.05),
			Item.of('create:experience_nugget',8).withChance(0.05),
			Item.of('minecraft:golden_carrot',8).withChance(0.01),
			Item.of('minecraft:golden_apple',8).withChance(0.0025),
		], 'allthecompressed:dirt_1x',1)
//粉碎末地石
stringMesh([
			Item.of('minecraft:chorus_fruit').withChance(0.09),
			Item.of('minecraft:ender_pearl').withChance(0.07),
			Item.of('minecraft:chorus_flower').withChance(0.04),
			Item.of('minecraft:ender_eye').withChance(0.02),
		], 'createsifter:crushed_end_stone')
andesiteMesh([
			Item.of('minecraft:chorus_fruit').withChance(0.11),
			Item.of('minecraft:ender_pearl').withChance(0.08),
			Item.of('minecraft:chorus_flower').withChance(0.06),
			Item.of('minecraft:ender_eye').withChance(0.03),
		], 'createsifter:crushed_end_stone')
zincMesh([
			Item.of('minecraft:chorus_fruit').withChance(0.13),
			Item.of('minecraft:ender_pearl').withChance(0.1),
			Item.of('minecraft:chorus_flower').withChance(0.07),
			Item.of('minecraft:ender_eye').withChance(0.04),
		], 'createsifter:crushed_end_stone')
brassMesh([
			Item.of('minecraft:chorus_fruit').withChance(0.12),
			Item.of('minecraft:ender_pearl').withChance(0.12),
			Item.of('minecraft:ender_eye').withChance(0.07),
			Item.of('minecraft:chorus_flower').withChance(0.06),
		], 'createsifter:crushed_end_stone')
diamondMesh([
			Item.of('minecraft:ender_pearl').withChance(0.15),
			Item.of('minecraft:chorus_fruit').withChance(0.1),
			Item.of('minecraft:ender_eye').withChance(0.09),
			Item.of('minecraft:chorus_flower').withChance(0.04),
		], 'createsifter:crushed_end_stone',4)
netheriteMesh([
			Item.of('minecraft:ender_pearl').withChance(0.17),
			Item.of('minecraft:chorus_fruit').withChance(0.1),
			Item.of('minecraft:ender_eye').withChance(0.09),
			Item.of('create:experience_nugget').withChance(0.05),
			Item.of('minecraft:chorus_flower').withChance(0.04),
			Item.of('minecraft:echo_shard').withChance(0.03),
			Item.of('minecraft:sculk_catalyst').withChance(0.01),
		], 'createsifter:crushed_end_stone',3)
advancedBrassMesh([
			Item.of('minecraft:chorus_fruit',7).withChance(0.12),
			Item.of('minecraft:ender_pearl',7).withChance(0.12),
			Item.of('minecraft:ender_eye',7).withChance(0.07),
			Item.of('minecraft:chorus_flower',7).withChance(0.06),
		], 'createsifter:crushed_end_stone_1x',3)
advancedDiamondMesh([
			Item.of('minecraft:ender_pearl',7).withChance(0.15),
			Item.of('minecraft:chorus_fruit',7).withChance(0.1),
			Item.of('minecraft:ender_eye',7).withChance(0.09),
			Item.of('minecraft:chorus_flower',7).withChance(0.04),
		], 'createsifter:crushed_end_stone_1x',2)
advancedNetheriteMesh([
			Item.of('minecraft:ender_pearl',8).withChance(0.17),
			Item.of('minecraft:chorus_fruit',8).withChance(0.1),
			Item.of('minecraft:ender_eye',8).withChance(0.09),
			Item.of('create:experience_nugget',8).withChance(0.05),
			Item.of('minecraft:chorus_flower',8).withChance(0.04),
			Item.of('minecraft:echo_shard',8).withChance(0.03),
			Item.of('minecraft:sculk_catalyst',8).withChance(0.01),
		], 'createsifter:crushed_end_stone_1x',1)
//尘土
stringMesh([
			Item.of('minecraft:bone_meal').withChance(0.1),
			Item.of('minecraft:gunpowder').withChance(0.1),
			Item.of('ae2:certus_quartz_dust').withChance(0.06),
			Item.of('ae2:sky_dust').withChance(0.06),
			Item.of('enderio:grains_of_infinity').withChance(0.06),
			Item.of('minecraft:redstone').withChance(0.06),
			Item.of('minecraft:glowstone_dust').withChance(0.04),
			Item.of('minecraft:blaze_powder').withChance(0.03),
		], 'createsifter:dust')
andesiteMesh([
			Item.of('minecraft:bone_meal').withChance(0.11),
			Item.of('minecraft:gunpowder').withChance(0.11),
			Item.of('minecraft:redstone').withChance(0.09),
			Item.of('ae2:certus_quartz_dust').withChance(0.07),
			Item.of('ae2:sky_dust').withChance(0.07),
			Item.of('enderio:grains_of_infinity').withChance(0.07),
			Item.of('minecraft:glowstone_dust').withChance(0.07),
			Item.of('minecraft:blaze_powder').withChance(0.04),
			Item.of('xycraft_world:xychorium_gem_dark').withChance(0.04),
			Item.of('xycraft_world:xychorium_gem_green').withChance(0.04),
			Item.of('xycraft_world:xychorium_gem_red').withChance(0.04),
			Item.of('xycraft_world:xychorium_gem_blue').withChance(0.04),
			Item.of('xycraft_world:xychorium_gem_light').withChance(0.04),
		], 'createsifter:dust')
zincMesh([
			Item.of('minecraft:gunpowder').withChance(0.13),
			Item.of('minecraft:bone_meal').withChance(0.12),
			Item.of('minecraft:redstone').withChance(0.1),
			Item.of('enderio:grains_of_infinity').withChance(0.09),
			Item.of('minecraft:glowstone_dust').withChance(0.09),
			Item.of('ae2:certus_quartz_dust').withChance(0.075),
			Item.of('ae2:sky_dust').withChance(0.075),
			Item.of('minecraft:iron_nugget').withChance(0.06),
			Item.of('minecraft:blaze_powder').withChance(0.05),
			Item.of('xycraft_world:xychorium_gem_dark').withChance(0.05),
			Item.of('xycraft_world:xychorium_gem_green').withChance(0.05),
			Item.of('xycraft_world:xychorium_gem_red').withChance(0.05),
			Item.of('xycraft_world:xychorium_gem_blue').withChance(0.05),
			Item.of('xycraft_world:xychorium_gem_light').withChance(0.05),
		], 'createsifter:dust')
brassMesh([
			Item.of('minecraft:gold_nugget',2).withChance(0.18),
			Item.of('minecraft:gunpowder').withChance(0.13),
			Item.of('minecraft:redstone').withChance(0.12),
			Item.of('minecraft:bone_meal').withChance(0.11),
			Item.of('enderio:grains_of_infinity').withChance(0.11),
			Item.of('minecraft:glowstone_dust').withChance(0.11),
			Item.of('ae2:certus_quartz_dust').withChance(0.08),
			Item.of('ae2:sky_dust').withChance(0.08),
			Item.of('minecraft:blaze_powder').withChance(0.06),
			Item.of('minecraft:raw_gold').withChance(0.02),
		], 'createsifter:dust')
diamondMesh([
			Item.of('minecraft:gunpowder').withChance(0.14),
			Item.of('minecraft:redstone').withChance(0.12),
			Item.of('enderio:grains_of_infinity').withChance(0.12),
			Item.of('minecraft:glowstone_dust').withChance(0.11),
			Item.of('ae2:certus_quartz_dust').withChance(0.1),
			Item.of('ae2:sky_dust').withChance(0.1),
			Item.of('minecraft:bone_meal').withChance(0.1),
			Item.of('minecraft:gold_nugget').withChance(0.08),
			Item.of('minecraft:blaze_powder').withChance(0.0),
			Item.of('xycraft_world:xychorium_gem_dark').withChance(0.06),
			Item.of('xycraft_world:xychorium_gem_green').withChance(0.06),
			Item.of('xycraft_world:xychorium_gem_red').withChance(0.06),
			Item.of('xycraft_world:xychorium_gem_blue').withChance(0.06),
			Item.of('xycraft_world:xychorium_gem_light').withChance(0.06),
		], 'createsifter:dust',4)
netheriteMesh([
			Item.of('minecraft:glowstone_dust').withChance(0.15),
			Item.of('minecraft:gunpowder').withChance(0.14),
			Item.of('minecraft:redstone').withChance(0.14),
			Item.of('enderio:grains_of_infinity').withChance(0.135),
			Item.of('minecraft:bone_meal').withChance(0.13),
			Item.of('ae2:certus_quartz_dust').withChance(0.11),
			Item.of('ae2:sky_dust').withChance(0.11),
			Item.of('minecraft:blaze_powder').withChance(0.1),
			Item.of('minecraft:gold_nugget').withChance(0.08),
			Item.of('minecraft:iron_nugget').withChance(0.08),
			Item.of('xycraft_world:xychorium_gem_dark').withChance(0.08),
			Item.of('xycraft_world:xychorium_gem_green').withChance(0.08),
			Item.of('xycraft_world:xychorium_gem_red').withChance(0.08),
			Item.of('xycraft_world:xychorium_gem_blue').withChance(0.08),
			Item.of('xycraft_world:xychorium_gem_light').withChance(0.08),
			Item.of('create:experience_nugget').withChance(0.05),
		], 'createsifter:dust',3)
advancedBrassMesh([
			Item.of('minecraft:gold_nugget',14).withChance(0.18),
			Item.of('minecraft:gunpowder',7).withChance(0.13),
			Item.of('minecraft:redstone',7).withChance(0.12),
			Item.of('minecraft:bone_meal',7).withChance(0.11),
			Item.of('enderio:grains_of_infinity',7).withChance(0.11),
			Item.of('minecraft:glowstone_dust',7).withChance(0.11),
			Item.of('ae2:certus_quartz_dust',7).withChance(0.08),
			Item.of('ae2:sky_dust',7).withChance(0.08),
			Item.of('minecraft:blaze_powder',7).withChance(0.06),
			Item.of('minecraft:raw_gold',7).withChance(0.02),
		], 'createsifter:dust_1x',3)
advancedDiamondMesh([
			Item.of('minecraft:gunpowder',7).withChance(0.14),
			Item.of('minecraft:redstone',7).withChance(0.12),
			Item.of('enderio:grains_of_infinity',7).withChance(0.12),
			Item.of('minecraft:glowstone_dust',7).withChance(0.11),
			Item.of('ae2:certus_quartz_dust',7).withChance(0.1),
			Item.of('ae2:sky_dust',7).withChance(0.1),
			Item.of('minecraft:bone_meal',7).withChance(0.1),
			Item.of('minecraft:gold_nugget',7).withChance(0.08),
			Item.of('minecraft:blaze_powder',7).withChance(0.0),
			Item.of('xycraft_world:xychorium_gem_dark',7).withChance(0.06),
			Item.of('xycraft_world:xychorium_gem_green',7).withChance(0.06),
			Item.of('xycraft_world:xychorium_gem_red',7).withChance(0.06),
			Item.of('xycraft_world:xychorium_gem_blue',7).withChance(0.06),
			Item.of('xycraft_world:xychorium_gem_light',7).withChance(0.06),
		], 'createsifter:dust_1x',2)
advancedNetheriteMesh([
			Item.of('minecraft:glowstone_dust',8).withChance(0.15),
			Item.of('minecraft:gunpowder',8).withChance(0.14),
			Item.of('minecraft:redstone',8).withChance(0.14),
			Item.of('enderio:grains_of_infinity',8).withChance(0.135),
			Item.of('minecraft:bone_meal',8).withChance(0.13),
			Item.of('ae2:certus_quartz_dust',8).withChance(0.11),
			Item.of('ae2:sky_dust',8).withChance(0.11),
			Item.of('minecraft:blaze_powder',8).withChance(0.1),
			Item.of('minecraft:gold_nugget',8).withChance(0.08),
			Item.of('minecraft:iron_nugget',8).withChance(0.08),
			Item.of('xycraft_world:xychorium_gem_dark',8).withChance(0.08),
			Item.of('xycraft_world:xychorium_gem_green',8).withChance(0.08),
			Item.of('xycraft_world:xychorium_gem_red',8).withChance(0.08),
			Item.of('xycraft_world:xychorium_gem_blue',8).withChance(0.08),
			Item.of('xycraft_world:xychorium_gem_light',8).withChance(0.08),
			Item.of('create:experience_nugget',8).withChance(0.05),
		], 'createsifter:dust_1x',1)
//粉碎黑石
stringMesh([
			Item.of('minecraft:gold_nugget',4).withChance(0.2),
			Item.of('minecraft:magma_cream').withChance(0.08),
			Item.of('minecraft:gunpowder').withChance(0.07),
			Item.of('minecraft:black_dye').withChance(0.07),
			Item.of('mekanism:dirty_netherite_scrap').withChance(0.02),
		], 'createsifter:crushed_blackstone')
andesiteMesh([
			Item.of('minecraft:gold_nugget',4).withChance(0.225),
			Item.of('minecraft:magma_cream').withChance(0.09),
			Item.of('minecraft:gunpowder').withChance(0.09),
			Item.of('minecraft:black_dye').withChance(0.08),
			Item.of('mekanism:dirty_netherite_scrap').withChance(0.03),
		], 'createsifter:crushed_blackstone')
zincMesh([
			Item.of('minecraft:gold_nugget',4).withChance(0.25),
			Item.of('minecraft:magma_cream').withChance(0.09),
			Item.of('minecraft:gunpowder').withChance(0.09),
			Item.of('minecraft:black_dye').withChance(0.08),
			Item.of('mekanism:dirty_netherite_scrap').withChance(0.04),
		], 'createsifter:crushed_blackstone')
brassMesh([
			Item.of('minecraft:gold_nugget',8).withChance(0.325),
			Item.of('minecraft:magma_cream').withChance(0.1),
			Item.of('minecraft:gunpowder').withChance(0.1),
			Item.of('minecraft:black_dye').withChance(0.06),
			Item.of('mekanism:dirty_netherite_scrap').withChance(0.05),
		], 'createsifter:crushed_blackstone')
diamondMesh([
			Item.of('minecraft:gold_nugget',4).withChance(0.275),
			Item.of('minecraft:magma_cream').withChance(0.11),
			Item.of('minecraft:gunpowder').withChance(0.11),
			Item.of('mekanism:dirty_netherite_scrap').withChance(0.06),
		], 'createsifter:crushed_blackstone',4)
netheriteMesh([
			Item.of('minecraft:gold_nugget',4).withChance(0.325),
			Item.of('minecraft:magma_cream').withChance(0.12),
			Item.of('minecraft:gunpowder').withChance(0.11),
			Item.of('minecraft:ancient_debris').withChance(0.1),
			Item.of('create:experience_nugget').withChance(0.05),
		], 'createsifter:crushed_blackstone',3)
advancedBrassMesh([
			Item.of('minecraft:gold_nugget',56).withChance(0.325),
			Item.of('minecraft:magma_cream',7).withChance(0.1),
			Item.of('minecraft:gunpowder',7).withChance(0.1),
			Item.of('minecraft:black_dye',7).withChance(0.06),
			Item.of('mekanism:dirty_netherite_scrap',7).withChance(0.05),
		], 'createsifter:crushed_blackstone_1x',3)
advancedDiamondMesh([
			Item.of('minecraft:gold_nugget',28).withChance(0.275),
			Item.of('minecraft:magma_cream',7).withChance(0.11),
			Item.of('minecraft:gunpowder',7).withChance(0.11),
			Item.of('mekanism:dirty_netherite_scrap',7).withChance(0.06),
		], 'createsifter:crushed_blackstone_1x',2)
advancedNetheriteMesh([
			Item.of('minecraft:gold_nugget',32).withChance(0.325),
			Item.of('minecraft:magma_cream',8).withChance(0.12),
			Item.of('minecraft:gunpowder',8).withChance(0.11),
			Item.of('minecraft:ancient_debris',8).withChance(0.1),
			Item.of('create:experience_nugget',8).withChance(0.05),
		], 'createsifter:crushed_blackstone_1x',1)
//粉碎下界岩
stringMesh([
			Item.of('minecraft:quartz').withChance(0.08),
			Item.of('minecraft:gunpowder').withChance(0.08),
			Item.of('minecraft:blaze_powder').withChance(0.08),
			Item.of('minecraft:gold_nugget').withChance(0.07),
			Item.of('minecraft:magma_cream').withChance(0.05),
			Item.of('minecraft:brown_mushroom').withChance(0.05),
			Item.of('minecraft:red_mushroom').withChance(0.05),
			Item.of('moremekanismprocessing:dirty_dust_cobalt').withChance(0.04),
		], 'createsifter:crushed_netherrack')
andesiteMesh([
			Item.of('minecraft:quartz').withChance(0.09),
			Item.of('minecraft:gunpowder').withChance(0.09),
			Item.of('minecraft:blaze_powder').withChance(0.09),
			Item.of('minecraft:gold_nugget').withChance(0.08),
			Item.of('minecraft:brown_mushroom').withChance(0.07),
			Item.of('minecraft:red_mushroom').withChance(0.07),
			Item.of('minecraft:magma_cream').withChance(0.06),
			Item.of('moremekanismprocessing:dirty_dust_cobalt').withChance(0.05),
		], 'createsifter:crushed_netherrack')
zincMesh([
			Item.of('minecraft:quartz').withChance(0.11),
			Item.of('minecraft:gunpowder').withChance(0.1),
			Item.of('minecraft:blaze_powder').withChance(0.1),
			Item.of('minecraft:gold_nugget').withChance(0.1),
			Item.of('minecraft:brown_mushroom').withChance(0.08),
			Item.of('minecraft:red_mushroom').withChance(0.08),
			Item.of('minecraft:magma_cream').withChance(0.07),
			Item.of('moremekanismprocessing:dirty_dust_cobalt').withChance(0.065),
		], 'createsifter:crushed_netherrack')
brassMesh([
			Item.of('minecraft:gold_nugget').withChance(0.14),
			Item.of('minecraft:quartz').withChance(0.13),
			Item.of('minecraft:gunpowder').withChance(0.11),
			Item.of('minecraft:blaze_powder').withChance(0.11),
			Item.of('minecraft:brown_mushroom').withChance(0.08),
			Item.of('minecraft:red_mushroom').withChance(0.08),
			Item.of('minecraft:magma_cream').withChance(0.08),
			Item.of('moremekanismprocessing:dirty_dust_cobalt').withChance(0.07),
			Item.of('minecraft:raw_gold').withChance(0.03),
		], 'createsifter:crushed_netherrack')
diamondMesh([
			Item.of('minecraft:blaze_powder').withChance(0.14),
			Item.of('minecraft:quartz').withChance(0.13),
			Item.of('minecraft:gunpowder').withChance(0.13),
			Item.of('minecraft:gold_nugget').withChance(0.12),
			Item.of('minecraft:magma_cream').withChance(0.1),
			Item.of('moremekanismprocessing:dirty_dust_cobalt').withChance(0.09),
		], 'createsifter:crushed_netherrack',4)
netheriteMesh([
			Item.of('minecraft:blaze_powder').withChance(0.15),
			Item.of('minecraft:quartz').withChance(0.15),
			Item.of('minecraft:gunpowder').withChance(0.13),
			Item.of('minecraft:gold_nugget').withChance(0.12),
			Item.of('moremekanismprocessing:dirty_dust_cobalt').withChance(0.11),
			Item.of('minecraft:magma_cream').withChance(0.1),
			Item.of('create:experience_nugget').withChance(0.05),
		], 'createsifter:crushed_netherrack',3)
advancedBrassMesh([
			Item.of('minecraft:gold_nugget',7).withChance(0.14),
			Item.of('minecraft:quartz',7).withChance(0.13),
			Item.of('minecraft:gunpowder',7).withChance(0.11),
			Item.of('minecraft:blaze_powder',7).withChance(0.11),
			Item.of('minecraft:brown_mushroom',7).withChance(0.08),
			Item.of('minecraft:red_mushroom',7).withChance(0.08),
			Item.of('minecraft:magma_cream',7).withChance(0.08),
			Item.of('moremekanismprocessing:dirty_dust_cobalt',7).withChance(0.07),
			Item.of('minecraft:raw_gold',7).withChance(0.03),
		], 'createsifter:crushed_netherrack_1x',3)
advancedDiamondMesh([
			Item.of('minecraft:blaze_powder',7).withChance(0.14),
			Item.of('minecraft:quartz',7).withChance(0.13),
			Item.of('minecraft:gunpowder',7).withChance(0.13),
			Item.of('minecraft:gold_nugget',7).withChance(0.12),
			Item.of('minecraft:magma_cream',7).withChance(0.1),
			Item.of('moremekanismprocessing:dirty_dust_cobalt',7).withChance(0.09),
		], 'createsifter:crushed_netherrack_1x',2)
advancedNetheriteMesh([
			Item.of('minecraft:blaze_powder',8).withChance(0.15),
			Item.of('minecraft:quartz',8).withChance(0.15),
			Item.of('minecraft:gunpowder',8).withChance(0.13),
			Item.of('minecraft:gold_nugget',8).withChance(0.12),
			Item.of('moremekanismprocessing:dirty_dust_cobalt',8).withChance(0.11),
			Item.of('minecraft:magma_cream',8).withChance(0.1),
			Item.of('create:experience_nugget',8).withChance(0.05),
		], 'createsifter:crushed_netherrack_1x',1)
//粉碎深板岩
stringMesh([
			Item.of('mekanism:dirty_dust_iron').withChance(0.12),
			Item.of('alltheores:dirty_copper_dust').withChance(0.12),
			Item.of('mekanism:dirty_dust_gold').withChance(0.08),
			Item.of('alltheores:dirty_osmium_dust').withChance(0.06),
			Item.of('alltheores:dirty_tin_dust').withChance(0.05),
			Item.of('alltheores:dirty_silver_dust').withChance(0.05),
			Item.of('alltheores:dirty_lead_dust').withChance(0.05),
			Item.of('minecraft:amethyst_shard').withChance(0.05),
			Item.of('minecraft:lapis_lazuli').withChance(0.04),
			Item.of('alltheores:dirty_uranium_dust').withChance(0.04),
			Item.of('alltheores:dirty_nickel_dust').withChance(0.04),
			Item.of('alltheores:dirty_iridium_dust').withChance(0.04),
			Item.of('moremekanismprocessing:dirty_dust_emerald').withChance(0.03),
			Item.of('alltheores:dirty_platinum_dust').withChance(0.03),
		], 'createsifter:crushed_deepslate')
andesiteMesh([
			Item.of('mekanism:dirty_dust_iron').withChance(0.13),
			Item.of('alltheores:dirty_copper_dust').withChance(0.11),
			Item.of('alltheores:dirty_lead_dust').withChance(0.08),
			Item.of('mekanism:dirty_dust_gold').withChance(0.08),
			Item.of('alltheores:dirty_osmium_dust').withChance(0.08),
			Item.of('alltheores:dirty_silver_dust').withChance(0.08),
			Item.of('alltheores:dirty_tin_dust').withChance(0.07),
			Item.of('minecraft:amethyst_shard').withChance(0.06),
			Item.of('alltheores:dirty_uranium_dust').withChance(0.06),
			Item.of('alltheores:dirty_nickel_dust').withChance(0.06),
			Item.of('minecraft:lapis_lazuli').withChance(0.05),
			Item.of('alltheores:dirty_iridium_dust').withChance(0.05),
			Item.of('alltheores:dirty_platinum_dust').withChance(0.05),
			Item.of('moremekanismprocessing:dirty_dust_emerald').withChance(0.04),
		], 'createsifter:crushed_deepslate')
zincMesh([
			Item.of('mekanism:dirty_dust_iron').withChance(0.15),
			Item.of('alltheores:dirty_tin_dust').withChance(0.11),
			Item.of('alltheores:dirty_copper_dust').withChance(0.1),
			Item.of('alltheores:dirty_lead_dust').withChance(0.1),
			Item.of('alltheores:dirty_osmium_dust').withChance(0.1),
			Item.of('alltheores:dirty_silver_dust').withChance(0.1),
			Item.of('mekanism:dirty_dust_gold').withChance(0.09),
			Item.of('alltheores:dirty_nickel_dust').withChance(0.09),
			Item.of('alltheores:dirty_uranium_dust').withChance(0.08),
			Item.of('minecraft:lapis_lazuli').withChance(0.08),
			Item.of('alltheores:dirty_platinum_dust').withChance(0.065),
			Item.of('minecraft:amethyst_shard').withChance(0.06),
			Item.of('alltheores:dirty_iridium_dust').withChance(0.06),
			Item.of('moremekanismprocessing:dirty_dust_emerald').withChance(0.05),
		], 'createsifter:crushed_deepslate')
brassMesh([
			Item.of('minecraft:gold_nugget',3).withChance(0.1),
			Item.of('mekanism:dirty_dust_gold').withChance(0.15),
			Item.of('mekanism:dirty_dust_iron').withChance(0.15),
			Item.of('alltheores:dirty_silver_dust').withChance(0.15),
			Item.of('alltheores:dirty_tin_dust').withChance(0.12),
			Item.of('alltheores:dirty_nickel_dust').withChance(0.11),
			Item.of('alltheores:dirty_lead_dust').withChance(0.09),
			Item.of('alltheores:dirty_copper_dust').withChance(0.09),
			Item.of('alltheores:dirty_osmium_dust').withChance(0.09),
			Item.of('alltheores:dirty_platinum_dust').withChance(0.09),
			Item.of('minecraft:amethyst_shard').withChance(0.08),
			Item.of('moremekanismprocessing:dirty_dust_emerald').withChance(0.07),
			Item.of('minecraft:lapis_lazuli').withChance(0.07),
			Item.of('alltheores:dirty_uranium_dust').withChance(0.07),
			Item.of('minecraft:raw_gold').withChance(0.05),
			Item.of('alltheores:dirty_iridium_dust').withChance(0.04),
		], 'createsifter:crushed_deepslate')
diamondMesh([
			Item.of('mekanism:dirty_dust_iron').withChance(0.18),
			Item.of('mekanism:dirty_dust_gold').withChance(0.13),
			Item.of('alltheores:dirty_tin_dust').withChance(0.13),
			Item.of('minecraft:lapis_lazuli').withChance(0.12),
			Item.of('alltheores:dirty_osmium_dust').withChance(0.12),
			Item.of('alltheores:dirty_lead_dust').withChance(0.11),
			Item.of('alltheores:dirty_silver_dust').withChance(0.11),
			Item.of('alltheores:dirty_nickel_dust').withChance(0.11),
			Item.of('alltheores:dirty_uranium_dust').withChance(0.1),
			Item.of('alltheores:dirty_copper_dust').withChance(0.09),
			Item.of('moremekanismprocessing:dirty_dust_emerald').withChance(0.08),
			Item.of('alltheores:dirty_platinum_dust').withChance(0.075),
			Item.of('minecraft:amethyst_shard').withChance(0.07),
			Item.of('alltheores:dirty_iridium_dust').withChance(0.065),
		], 'createsifter:crushed_deepslate',4)
netheriteMesh([
			Item.of('mekanism:dirty_dust_iron').withChance(0.2),
			Item.of('alltheores:dirty_tin_dust').withChance(0.16),
			Item.of('mekanism:dirty_dust_gold').withChance(0.15),
			Item.of('alltheores:dirty_nickel_dust').withChance(0.15),
			Item.of('alltheores:dirty_osmium_dust').withChance(0.14),
			Item.of('minecraft:lapis_lazuli').withChance(0.14),
			Item.of('alltheores:dirty_lead_dust').withChance(0.12),
			Item.of('alltheores:dirty_silver_dust').withChance(0.12),
			Item.of('alltheores:dirty_uranium_dust').withChance(0.12),
			Item.of('alltheores:dirty_copper_dust').withChance(0.1),
			Item.of('minecraft:emerald').withChance(0.1),
			Item.of('minecraft:amethyst_shard').withChance(0.1),
			Item.of('alltheores:dirty_platinum_dust').withChance(0.09),
			Item.of('alltheores:dirty_iridium_dust').withChance(0.065),
			Item.of('create:experience_nugget').withChance(0.05),
		], 'createsifter:crushed_deepslate',3)
advancedBrassMesh([
			Item.of('minecraft:gold_nugget',21).withChance(0.1),
			Item.of('mekanism:dirty_dust_gold',7).withChance(0.15),
			Item.of('mekanism:dirty_dust_iron',7).withChance(0.15),
			Item.of('alltheores:dirty_silver_dust',7).withChance(0.15),
			Item.of('alltheores:dirty_tin_dust',7).withChance(0.12),
			Item.of('alltheores:dirty_nickel_dust',7).withChance(0.11),
			Item.of('alltheores:dirty_lead_dust',7).withChance(0.09),
			Item.of('alltheores:dirty_copper_dust',7).withChance(0.09),
			Item.of('alltheores:dirty_osmium_dust',7).withChance(0.09),
			Item.of('alltheores:dirty_platinum_dust',7).withChance(0.09),
			Item.of('minecraft:amethyst_shard',7).withChance(0.08),
			Item.of('moremekanismprocessing:dirty_dust_emerald',7).withChance(0.07),
			Item.of('minecraft:lapis_lazuli',7).withChance(0.07),
			Item.of('alltheores:dirty_uranium_dust',7).withChance(0.07),
			Item.of('minecraft:raw_gold',7).withChance(0.05),
			Item.of('alltheores:dirty_iridium_dust',7).withChance(0.04),
		], 'createsifter:crushed_deepslate_1x',3)
advancedDiamondMesh([
			Item.of('mekanism:dirty_dust_iron',7).withChance(0.18),
			Item.of('mekanism:dirty_dust_gold',7).withChance(0.13),
			Item.of('alltheores:dirty_tin_dust',7).withChance(0.13),
			Item.of('minecraft:lapis_lazuli',7).withChance(0.12),
			Item.of('alltheores:dirty_osmium_dust',7).withChance(0.12),
			Item.of('alltheores:dirty_lead_dust',7).withChance(0.11),
			Item.of('alltheores:dirty_silver_dust',7).withChance(0.11),
			Item.of('alltheores:dirty_nickel_dust',7).withChance(0.11),
			Item.of('alltheores:dirty_uranium_dust',7).withChance(0.1),
			Item.of('alltheores:dirty_copper_dust',7).withChance(0.09),
			Item.of('moremekanismprocessing:dirty_dust_emerald',7).withChance(0.08),
			Item.of('alltheores:dirty_platinum_dust',7).withChance(0.075),
			Item.of('minecraft:amethyst_shard',7).withChance(0.07),
			Item.of('alltheores:dirty_iridium_dust',7).withChance(0.065),
		], 'createsifter:crushed_deepslate_1x',2)
advancedNetheriteMesh([
			Item.of('mekanism:dirty_dust_iron',8).withChance(0.2),
			Item.of('alltheores:dirty_tin_dust',8).withChance(0.16),
			Item.of('mekanism:dirty_dust_gold',8).withChance(0.15),
			Item.of('alltheores:dirty_nickel_dust',8).withChance(0.15),
			Item.of('alltheores:dirty_osmium_dust',8).withChance(0.14),
			Item.of('minecraft:lapis_lazuli',8).withChance(0.14),
			Item.of('alltheores:dirty_lead_dust',8).withChance(0.12),
			Item.of('alltheores:dirty_silver_dust',8).withChance(0.12),
			Item.of('alltheores:dirty_uranium_dust',8).withChance(0.12),
			Item.of('alltheores:dirty_copper_dust',8).withChance(0.1),
			Item.of('minecraft:emerald',8).withChance(0.1),
			Item.of('minecraft:amethyst_shard',8).withChance(0.1),
			Item.of('alltheores:dirty_platinum_dust',8).withChance(0.09),
			Item.of('alltheores:dirty_iridium_dust',8).withChance(0.065),
			Item.of('create:experience_nugget',8).withChance(0.05),
			Item.of('avaritia:refined_coal').withChance(0.001)
		], 'createsifter:crushed_deepslate_1x',1)
//沙子
stringMesh([
			Item.of('minecraft:flint').withChance(0.2),
			Item.of('minecraft:iron_nugget').withChance(0.13),
			Item.of('minecraft:gold_nugget').withChance(0.13),
			Item.of('minecraft:cactus').withChance(0.13),
			Item.of('minecraft:kelp').withChance(0.1),
			Item.of('minecraft:dead_bush').withChance(0.08),
			Item.of('minecraft:sea_pickle').withChance(0.05),
			Item.of('ae2:certus_quartz_crystal').withChance(0.03),
			Item.of('ae2:charged_certus_quartz_crystal').withChance(0.005),
		], 'minecraft:sand')
andesiteMesh([
			Item.of('minecraft:flint',2).withChance(0.2),
			Item.of('minecraft:iron_nugget').withChance(0.16),
			Item.of('minecraft:gold_nugget').withChance(0.16),
			Item.of('ae2:certus_quartz_crystal').withChance(0.04),
			Item.of('minecraft:dead_bush').withChance(0.03),
			Item.of('ae2:charged_certus_quartz_crystal').withChance(0.007),
		], 'minecraft:sand')
zincMesh([
			Item.of('minecraft:flint').withChance(0.23),
			Item.of('minecraft:iron_nugget').withChance(0.18),
			Item.of('minecraft:gold_nugget').withChance(0.18),
			Item.of('mekanism:fluorite_gem').withChance(0.15),
			Item.of('moremekanismprocessing:dirty_dust_cinnabar').withChance(0.15),
			Item.of('moremekanismprocessing:dirty_dust_sulfur').withChance(0.15),
			Item.of('moremekanismprocessing:dirty_dust_apatite').withChance(0.15),
			Item.of('minecraft:cactus').withChance(0.13),
			Item.of('minecraft:dead_bush').withChance(0.08),
			Item.of('minecraft:kelp').withChance(0.07),
			Item.of('ae2:certus_quartz_crystal').withChance(0.06),
			Item.of('minecraft:prismarine_shard').withChance(0.06),
			Item.of('minecraft:prismarine_crystals').withChance(0.06),
			Item.of('minecraft:sea_pickle').withChance(0.03),
			Item.of('ae2:charged_certus_quartz_crystal').withChance(0.0125),
		], 'minecraft:sand')
brassMesh([
			Item.of('minecraft:gold_nugget',3).withChance(0.28),
			Item.of('minecraft:flint').withChance(0.18),
			Item.of('minecraft:iron_nugget').withChance(0.16),
			Item.of('mekanism:fluorite_gem').withChance(0.15),
			Item.of('moremekanismprocessing:dirty_dust_cinnabar').withChance(0.15),
			Item.of('moremekanismprocessing:dirty_dust_sulfur').withChance(0.15),
			Item.of('moremekanismprocessing:dirty_dust_apatite').withChance(0.15),
			Item.of('minecraft:cactus').withChance(0.1),
			Item.of('minecraft:prismarine_shard').withChance(0.08),
			Item.of('minecraft:prismarine_crystals').withChance(0.08),
			Item.of('ae2:certus_quartz_crystal').withChance(0.07),
			Item.of('minecraft:dead_bush').withChance(0.06),
			Item.of('minecraft:kelp').withChance(0.05),
			Item.of('minecraft:raw_gold').withChance(0.04),
			Item.of('minecraft:sea_pickle').withChance(0.03),
			Item.of('ae2:charged_certus_quartz_crystal').withChance(0.015),
		], 'minecraft:sand')
diamondMesh([
			Item.of('minecraft:flint').withChance(0.23),
			Item.of('minecraft:iron_nugget').withChance(0.22),
			Item.of('minecraft:gold_nugget').withChance(0.22),
			Item.of('mekanism:fluorite_gem').withChance(0.15),
			Item.of('moremekanismprocessing:dirty_dust_cinnabar').withChance(0.15),
			Item.of('moremekanismprocessing:dirty_dust_sulfur').withChance(0.15),
			Item.of('moremekanismprocessing:dirty_dust_apatite').withChance(0.15),
			Item.of('ae2:certus_quartz_crystal').withChance(0.09),
			Item.of('minecraft:prismarine_shard').withChance(0.09),
			Item.of('minecraft:prismarine_crystals').withChance(0.09),
			Item.of('ae2:charged_certus_quartz_crystal').withChance(0.02),
		], 'minecraft:sand',4)
netheriteMesh([
			Item.of('minecraft:flint',2).withChance(0.23),
			Item.of('mekanism:fluorite_gem',2).withChance(0.12),
			Item.of('moremekanismprocessing:dirty_dust_cinnabar',2).withChance(0.12),
			Item.of('moremekanismprocessing:dirty_dust_sulfur',2).withChance(0.12),
			Item.of('moremekanismprocessing:dirty_dust_apatite',2).withChance(0.12),
			Item.of('minecraft:iron_nugget').withChance(0.23),
			Item.of('minecraft:gold_nugget').withChance(0.23),
			Item.of('minecraft:cactus').withChance(0.15),
			Item.of('minecraft:prismarine_shard').withChance(0.12),
			Item.of('minecraft:prismarine_crystals').withChance(0.12),
			Item.of('minecraft:kelp').withChance(0.1),
			Item.of('ae2:certus_quartz_crystal').withChance(0.095),
			Item.of('minecraft:sea_pickle').withChance(0.07),
			Item.of('create:experience_nugget').withChance(0.05),
			Item.of('ae2:charged_certus_quartz_crystal').withChance(0.035),
		], 'minecraft:sand',3)
advancedBrassMesh([
			Item.of('minecraft:gold_nugget',21).withChance(0.28),
			Item.of('minecraft:flint',7).withChance(0.18),
			Item.of('minecraft:iron_nugget',7).withChance(0.16),
			Item.of('mekanism:fluorite_gem',7).withChance(0.15),
			Item.of('moremekanismprocessing:dirty_dust_cinnabar',7).withChance(0.15),
			Item.of('moremekanismprocessing:dirty_dust_sulfur',7).withChance(0.15),
			Item.of('moremekanismprocessing:dirty_dust_apatite',7).withChance(0.15),
			Item.of('minecraft:cactus',7).withChance(0.1),
			Item.of('minecraft:prismarine_shard',7).withChance(0.08),
			Item.of('minecraft:prismarine_crystals',7).withChance(0.08),
			Item.of('ae2:certus_quartz_crystal',7).withChance(0.07),
			Item.of('minecraft:dead_bush',7).withChance(0.06),
			Item.of('minecraft:kelp',7).withChance(0.05),
			Item.of('minecraft:raw_gold',7).withChance(0.04),
			Item.of('minecraft:sea_pickle',7).withChance(0.03),
			Item.of('ae2:charged_certus_quartz_crystal',7).withChance(0.015),
		], 'allthecompressed:sand_1x',3)
advancedDiamondMesh([
			Item.of('minecraft:flint',7).withChance(0.23),
			Item.of('minecraft:iron_nugget',7).withChance(0.22),
			Item.of('minecraft:gold_nugget',7).withChance(0.22),
			Item.of('mekanism:fluorite_gem',7).withChance(0.15),
			Item.of('moremekanismprocessing:dirty_dust_cinnabar',7).withChance(0.15),
			Item.of('moremekanismprocessing:dirty_dust_sulfur',7).withChance(0.15),
			Item.of('moremekanismprocessing:dirty_dust_apatite',7).withChance(0.15),
			Item.of('ae2:certus_quartz_crystal',7).withChance(0.09),
			Item.of('minecraft:prismarine_shard',7).withChance(0.09),
			Item.of('minecraft:prismarine_crystals',7).withChance(0.09),
			Item.of('ae2:charged_certus_quartz_crystal',7).withChance(0.02),
		], 'allthecompressed:sand_1x',2)
advancedNetheriteMesh([
			Item.of('minecraft:flint',16).withChance(0.23),
			Item.of('mekanism:fluorite_gem',16).withChance(0.12),
			Item.of('moremekanismprocessing:dirty_dust_cinnabar',16).withChance(0.12),
			Item.of('moremekanismprocessing:dirty_dust_sulfur',16).withChance(0.12),
			Item.of('moremekanismprocessing:dirty_dust_apatite',16).withChance(0.12),
			Item.of('minecraft:iron_nugget',8).withChance(0.23),
			Item.of('minecraft:gold_nugget',8).withChance(0.23),
			Item.of('minecraft:cactus',8).withChance(0.15),
			Item.of('minecraft:prismarine_shard',8).withChance(0.12),
			Item.of('minecraft:prismarine_crystals',8).withChance(0.12),
			Item.of('minecraft:kelp',8).withChance(0.1),
			Item.of('ae2:certus_quartz_crystal',8).withChance(0.095),
			Item.of('minecraft:sea_pickle',8).withChance(0.07),
			Item.of('create:experience_nugget',8).withChance(0.05),
			Item.of('ae2:charged_certus_quartz_crystal',8).withChance(0.035),
		], 'allthecompressed:sand_1x',1)
//沙砾
stringMesh([
			Item.of('minecraft:flint').withChance(0.2),
			Item.of('minecraft:coal').withChance(0.1),
			Item.of('mekanism:dirty_dust_iron').withChance(0.1),
			Item.of('alltheores:dirty_copper_dust').withChance(0.08),
			Item.of('alltheores:dirty_tin_dust').withChance(0.06),
			Item.of('alltheores:dirty_silver_dust').withChance(0.04),
			Item.of('alltheores:dirty_lead_dust').withChance(0.04),
			Item.of('alltheores:dirty_nickel_dust').withChance(0.04),
			Item.of('alltheores:dirty_aluminum_dust').withChance(0.04),
			Item.of('alltheores:dirty_zinc_dust').withChance(0.035),
			Item.of('mekanism:dirty_dust_gold').withChance(0.03),
			Item.of('alltheores:dirty_osmium_dust').withChance(0.03),
			Item.of('alltheores:dirty_iridium_dust').withChance(0.03),
			Item.of('minecraft:lapis_lazuli').withChance(0.03),
			Item.of('moremekanismprocessing:dirty_dust_emerald').withChance(0.01),
			Item.of('minecraft:amethyst_shard').withChance(0.01),
		], 'minecraft:gravel')
andesiteMesh([
			Item.of('minecraft:flint').withChance(0.25),
			Item.of('minecraft:pointed_dripstone').withChance(0.15),
			Item.of('minecraft:coal').withChance(0.125),
			Item.of('mekanism:dirty_dust_iron').withChance(0.12),
			Item.of('alltheores:dirty_copper_dust').withChance(0.1),
			Item.of('alltheores:dirty_tin_dust').withChance(0.07),
			Item.of('alltheores:dirty_nickel_dust').withChance(0.055),
			Item.of('alltheores:dirty_silver_dust').withChance(0.05),
			Item.of('alltheores:dirty_lead_dust').withChance(0.05),
			Item.of('minecraft:lapis_lazuli').withChance(0.05),
			Item.of('alltheores:dirty_aluminum_dust').withChance(0.05),
			Item.of('alltheores:dirty_zinc_dust').withChance(0.04),
			Item.of('mekanism:dirty_dust_gold').withChance(0.04),
			Item.of('alltheores:dirty_osmium_dust').withChance(0.04),
			Item.of('alltheores:dirty_iridium_dust').withChance(0.03),
			Item.of('moremekanismprocessing:dirty_dust_emerald').withChance(0.015),
			Item.of('minecraft:amethyst_shard').withChance(0.015),
		], 'minecraft:gravel')
zincMesh([
			Item.of('minecraft:flint').withChance(0.15),
			Item.of('minecraft:coal').withChance(0.15),
			Item.of('mekanism:dirty_dust_iron').withChance(0.14),
			Item.of('alltheores:dirty_copper_dust').withChance(0.12),
			Item.of('alltheores:dirty_tin_dust').withChance(0.09),
			Item.of('minecraft:lapis_lazuli').withChance(0.08),
			Item.of('alltheores:dirty_nickel_dust').withChance(0.07),
			Item.of('alltheores:dirty_lead_dust').withChance(0.06),
			Item.of('alltheores:dirty_aluminum_dust').withChance(0.06),
			Item.of('alltheores:dirty_zinc_dust').withChance(0.06),
			Item.of('mekanism:dirty_dust_gold').withChance(0.06),
			Item.of('alltheores:dirty_silver_dust').withChance(0.055),
			Item.of('alltheores:dirty_osmium_dust').withChance(0.045),
			Item.of('alltheores:dirty_iridium_dust').withChance(0.04),
			Item.of('moremekanismprocessing:dirty_dust_emerald').withChance(0.04),
			Item.of('minecraft:amethyst_shard').withChance(0.04),
			Item.of('moremekanismprocessing:dirty_dust_diamond').withChance(0.01)
		], 'minecraft:gravel')
brassMesh([
			Item.of('minecraft:coal').withChance(0.2),
			Item.of('mekanism:dirty_dust_iron').withChance(0.14),
			Item.of('minecraft:flint').withChance(0.13),
			Item.of('alltheores:dirty_silver_dust').withChance(0.12),
			Item.of('mekanism:dirty_dust_gold').withChance(0.1),
			Item.of('minecraft:lapis_lazuli').withChance(0.1),
			Item.of('moremekanismprocessing:dirty_dust_emerald').withChance(0.09),
			Item.of('minecraft:gold_nugget').withChance(0.08),
			Item.of('minecraft:amethyst_shard').withChance(0.08),
			Item.of('alltheores:dirty_copper_dust').withChance(0.07),
			Item.of('alltheores:dirty_tin_dust').withChance(0.07),
			Item.of('alltheores:dirty_nickel_dust').withChance(0.07),
			Item.of('alltheores:dirty_lead_dust').withChance(0.07),
			Item.of('alltheores:dirty_aluminum_dust').withChance(0.07),
			Item.of('alltheores:dirty_zinc_dust').withChance(0.05),
			Item.of('alltheores:dirty_osmium_dust').withChance(0.05),
			Item.of('alltheores:dirty_iridium_dust').withChance(0.05),
			Item.of('moremekanismprocessing:dirty_dust_diamond').withChance(0.04),
			Item.of('minecraft:raw_gold').withChance(0.02),
		], 'minecraft:gravel')
diamondMesh([
			Item.of('mekanism:dirty_dust_iron').withChance(0.15),
			Item.of('minecraft:lapis_lazuli').withChance(0.11),
			Item.of('alltheores:dirty_tin_dust').withChance(0.11),
			Item.of('alltheores:dirty_nickel_dust').withChance(0.09),
			Item.of('alltheores:dirty_lead_dust').withChance(0.09),
			Item.of('alltheores:dirty_aluminum_dust').withChance(0.08),
			Item.of('alltheores:dirty_zinc_dust').withChance(0.08),
			Item.of('mekanism:dirty_dust_gold').withChance(0.08),
			Item.of('alltheores:dirty_silver_dust').withChance(0.08),
			Item.of('alltheores:dirty_osmium_dust').withChance(0.07),
			Item.of('moremekanismprocessing:dirty_dust_emerald').withChance(0.07),
			Item.of('alltheores:dirty_copper_dust').withChance(0.07),
			Item.of('minecraft:coal').withChance(0.06),
			Item.of('minecraft:amethyst_shard').withChance(0.06),
			Item.of('minecraft:flint').withChance(0.05),
			Item.of('alltheores:dirty_iridium_dust').withChance(0.05),
			Item.of('moremekanismprocessing:dirty_dust_diamond').withChance(0.05),
		], 'minecraft:gravel',4)
netheriteMesh([
			Item.of('mekanism:dirty_dust_iron').withChance(0.17),
			Item.of('minecraft:diamond',2).withChance(0.06),
			Item.of('alltheores:dirty_tin_dust').withChance(0.12),
			Item.of('minecraft:lapis_lazuli').withChance(0.11),
			Item.of('alltheores:dirty_silver_dust').withChance(0.11),
			Item.of('alltheores:dirty_lead_dust').withChance(0.11),
			Item.of('alltheores:dirty_copper_dust').withChance(0.1),
			Item.of('alltheores:dirty_nickel_dust').withChance(0.1),
			Item.of('alltheores:dirty_aluminum_dust').withChance(0.09),
			Item.of('mekanism:dirty_dust_gold').withChance(0.09),
			Item.of('alltheores:dirty_osmium_dust').withChance(0.09),
			Item.of('minecraft:emerald').withChance(0.09),
			Item.of('alltheores:dirty_zinc_dust').withChance(0.08),
			Item.of('minecraft:amethyst_shard').withChance(0.08),
			Item.of('minecraft:coal').withChance(0.06),
			Item.of('alltheores:dirty_iridium_dust').withChance(0.055),
			Item.of('create:experience_nugget').withChance(0.05),
			Item.of('minecraft:gold_nugget').withChance(0.04),
			Item.of('minecraft:raw_gold').withChance(0.01),
		], 'minecraft:gravel',3)
advancedBrassMesh([
			Item.of('minecraft:coal',7).withChance(0.2),
			Item.of('mekanism:dirty_dust_iron',7).withChance(0.14),
			Item.of('minecraft:flint',7).withChance(0.13),
			Item.of('alltheores:dirty_silver_dust',7).withChance(0.12),
			Item.of('mekanism:dirty_dust_gold',7).withChance(0.1),
			Item.of('minecraft:lapis_lazuli',7).withChance(0.1),
			Item.of('moremekanismprocessing:dirty_dust_emerald',7).withChance(0.09),
			Item.of('minecraft:gold_nugget',7).withChance(0.08),
			Item.of('minecraft:amethyst_shard',7).withChance(0.08),
			Item.of('alltheores:dirty_copper_dust',7).withChance(0.07),
			Item.of('alltheores:dirty_tin_dust',7).withChance(0.07),
			Item.of('alltheores:dirty_nickel_dust',7).withChance(0.07),
			Item.of('alltheores:dirty_lead_dust',7).withChance(0.07),
			Item.of('alltheores:dirty_aluminum_dust',7).withChance(0.07),
			Item.of('alltheores:dirty_zinc_dust',7).withChance(0.05),
			Item.of('alltheores:dirty_osmium_dust',7).withChance(0.05),
			Item.of('alltheores:dirty_iridium_dust',7).withChance(0.05),
			Item.of('moremekanismprocessing:dirty_dust_diamond',7).withChance(0.04),
			Item.of('minecraft:raw_gold',7).withChance(0.02),
		], 'allthecompressed:gravel_1x',3)
advancedDiamondMesh([
			Item.of('mekanism:dirty_dust_iron',7).withChance(0.15),
			Item.of('minecraft:lapis_lazuli',7).withChance(0.11),
			Item.of('alltheores:dirty_tin_dust',7).withChance(0.11),
			Item.of('alltheores:dirty_nickel_dust',7).withChance(0.09),
			Item.of('alltheores:dirty_lead_dust',7).withChance(0.09),
			Item.of('alltheores:dirty_aluminum_dust',7).withChance(0.08),
			Item.of('alltheores:dirty_zinc_dust',7).withChance(0.08),
			Item.of('mekanism:dirty_dust_gold',7).withChance(0.08),
			Item.of('alltheores:dirty_silver_dust',7).withChance(0.08),
			Item.of('alltheores:dirty_osmium_dust',7).withChance(0.07),
			Item.of('moremekanismprocessing:dirty_dust_emerald',7).withChance(0.07),
			Item.of('alltheores:dirty_copper_dust',7).withChance(0.07),
			Item.of('minecraft:coal',7).withChance(0.06),
			Item.of('minecraft:amethyst_shard',7).withChance(0.06),
			Item.of('minecraft:flint',7).withChance(0.05),
			Item.of('alltheores:dirty_iridium_dust',7).withChance(0.05),
			Item.of('moremekanismprocessing:dirty_dust_diamond',7).withChance(0.05),
		], 'allthecompressed:gravel_1x',2)
advancedNetheriteMesh([
			Item.of('mekanism:dirty_dust_iron',8).withChance(0.17),
			Item.of('minecraft:diamond',16).withChance(0.06),
			Item.of('alltheores:dirty_tin_dust',8).withChance(0.12),
			Item.of('minecraft:lapis_lazuli',8).withChance(0.11),
			Item.of('alltheores:dirty_silver_dust',8).withChance(0.11),
			Item.of('alltheores:dirty_lead_dust',8).withChance(0.11),
			Item.of('alltheores:dirty_copper_dust',8).withChance(0.1),
			Item.of('alltheores:dirty_nickel_dust',8).withChance(0.1),
			Item.of('alltheores:dirty_aluminum_dust',8).withChance(0.09),
			Item.of('mekanism:dirty_dust_gold',8).withChance(0.09),
			Item.of('alltheores:dirty_osmium_dust',8).withChance(0.09),
			Item.of('minecraft:emerald',8).withChance(0.09),
			Item.of('alltheores:dirty_zinc_dust',8).withChance(0.08),
			Item.of('minecraft:amethyst_shard',8).withChance(0.08),
			Item.of('minecraft:coal',8).withChance(0.06),
			Item.of('alltheores:dirty_iridium_dust',8).withChance(0.055),
			Item.of('create:experience_nugget',8).withChance(0.05),
			Item.of('minecraft:gold_nugget',8).withChance(0.04),
			Item.of('minecraft:raw_gold',8).withChance(0.01),
		], 'allthecompressed:gravel_1x',1)
//苔藓块
stringMesh([
			Item.of('minecraft:oak_sapling').withChance(0.13),
			Item.of('minecraft:spruce_sapling').withChance(0.11),
			Item.of('minecraft:cherry_sapling').withChance(0.11),
			Item.of('minecraft:acacia_sapling').withChance(0.11),
			Item.of('minecraft:jungle_sapling').withChance(0.11),
			Item.of('minecraft:dark_oak_sapling').withChance(0.11),
			Item.of('minecraft:mangrove_propagule').withChance(0.11),
			Item.of('minecraft:birch_sapling').withChance(0.11),
			Item.of('minecraft:azalea').withChance(0.08),
			Item.of('minecraft:small_dripleaf').withChance(0.07),
			Item.of('minecraft:big_dripleaf').withChance(0.05),
			Item.of('minecraft:glow_berries').withChance(0.04),
			Item.of('minecraft:spore_blossom').withChance(0.03),
			Item.of('ars_nouveau:sourceberry_bush').withChance(0.01),
		], 'minecraft:moss_block')
andesiteMesh([
			Item.of('minecraft:oak_sapling').withChance(0.13),
			Item.of('minecraft:glow_berries').withChance(0.115),
			Item.of('minecraft:spruce_sapling').withChance(0.11),
			Item.of('minecraft:cherry_sapling').withChance(0.11),
			Item.of('minecraft:acacia_sapling').withChance(0.11),
			Item.of('minecraft:jungle_sapling').withChance(0.11),
			Item.of('minecraft:dark_oak_sapling').withChance(0.11),
			Item.of('minecraft:mangrove_propagule').withChance(0.11),
			Item.of('minecraft:birch_sapling').withChance(0.11),
			Item.of('minecraft:small_dripleaf').withChance(0.095),
			Item.of('minecraft:azalea').withChance(0.09),
			Item.of('minecraft:big_dripleaf').withChance(0.07),
			Item.of('minecraft:spore_blossom').withChance(0.045),
			Item.of('minecraft:lily_pad').withChance(0.04),
			Item.of('minecraft:glow_lichen').withChance(0.04),
			Item.of('minecraft:flowering_azalea').withChance(0.04),
			Item.of('minecraft:sweet_berries').withChance(0.03),
			Item.of('ars_nouveau:sourceberry_bush').withChance(0.01),
		], 'minecraft:moss_block')
zincMesh([
			Item.of('minecraft:glow_berries').withChance(0.19),
			Item.of('minecraft:oak_sapling').withChance(0.13),
			Item.of('minecraft:small_dripleaf').withChance(0.12),
			Item.of('minecraft:spruce_sapling').withChance(0.11),
			Item.of('minecraft:cherry_sapling').withChance(0.11),
			Item.of('minecraft:acacia_sapling').withChance(0.11),
			Item.of('minecraft:jungle_sapling').withChance(0.11),
			Item.of('minecraft:dark_oak_sapling').withChance(0.11),
			Item.of('minecraft:mangrove_propagule').withChance(0.11),
			Item.of('minecraft:birch_sapling').withChance(0.11),
			Item.of('thermal:rubberwood_sapling').withChance(0.1),
			Item.of('integrateddynamics:menril_sapling').withChance(0.1),
			Item.of('minecraft:azalea').withChance(0.1),
			Item.of('minecraft:big_dripleaf').withChance(0.09),
			Item.of('minecraft:spore_blossom').withChance(0.06),
			Item.of('ars_nouveau:sourceberry_bush').withChance(0.01),
		], 'minecraft:moss_block')
brassMesh([
			Item.of('minecraft:glow_berries').withChance(0.265),
			Item.of('minecraft:small_dripleaf').withChance(0.145),
			Item.of('minecraft:oak_sapling').withChance(0.13),
			Item.of('minecraft:spruce_sapling').withChance(0.11),
			Item.of('minecraft:cherry_sapling').withChance(0.11),
			Item.of('minecraft:acacia_sapling').withChance(0.11),
			Item.of('minecraft:jungle_sapling').withChance(0.11),
			Item.of('minecraft:dark_oak_sapling').withChance(0.11),
			Item.of('minecraft:mangrove_propagule').withChance(0.11),
			Item.of('minecraft:birch_sapling').withChance(0.11),
			Item.of('minecraft:azalea').withChance(0.11),
			Item.of('minecraft:big_dripleaf').withChance(0.11),
			Item.of('thermal:rubberwood_sapling').withChance(0.1),
			Item.of('integrateddynamics:menril_sapling').withChance(0.1),
			Item.of('minecraft:spore_blossom').withChance(0.075),
			Item.of('ars_nouveau:sourceberry_bush').withChance(0.05),
		], 'minecraft:moss_block')
diamondMesh([
			Item.of('minecraft:glow_berries').withChance(0.34),
			Item.of('minecraft:small_dripleaf').withChance(0.17),
			Item.of('minecraft:big_dripleaf').withChance(0.13),
			Item.of('minecraft:oak_sapling').withChance(0.13),
			Item.of('minecraft:azalea').withChance(0.12),
			Item.of('minecraft:spruce_sapling').withChance(0.11),
			Item.of('minecraft:cherry_sapling').withChance(0.11),
			Item.of('minecraft:acacia_sapling').withChance(0.11),
			Item.of('minecraft:jungle_sapling').withChance(0.11),
			Item.of('minecraft:dark_oak_sapling').withChance(0.11),
			Item.of('minecraft:mangrove_propagule').withChance(0.11),
			Item.of('minecraft:birch_sapling').withChance(0.11),
			Item.of('thermal:rubberwood_sapling').withChance(0.1),
			Item.of('integrateddynamics:menril_sapling').withChance(0.1),
			Item.of('minecraft:spore_blossom').withChance(0.09),
			Item.of('ars_nouveau:sourceberry_bush').withChance(0.06),
		], 'minecraft:moss_block',4)
netheriteMesh([
			Item.of('minecraft:glow_berries').withChance(0.415),
			Item.of('minecraft:small_dripleaf').withChance(0.195),
			Item.of('minecraft:big_dripleaf').withChance(0.15),
			Item.of('minecraft:azalea').withChance(0.13),
			Item.of('minecraft:oak_sapling').withChance(0.13),
			Item.of('minecraft:spruce_sapling').withChance(0.11),
			Item.of('minecraft:cherry_sapling').withChance(0.11),
			Item.of('minecraft:acacia_sapling').withChance(0.11),
			Item.of('minecraft:jungle_sapling').withChance(0.11),
			Item.of('minecraft:dark_oak_sapling').withChance(0.11),
			Item.of('minecraft:mangrove_propagule').withChance(0.11),
			Item.of('minecraft:birch_sapling').withChance(0.11),
			Item.of('minecraft:spore_blossom').withChance(0.105),
			Item.of('thermal:rubberwood_sapling').withChance(0.1),
			Item.of('integrateddynamics:menril_sapling').withChance(0.1),
			Item.of('ars_nouveau:sourceberry_bush').withChance(0.08),
			Item.of('create:experience_nugget').withChance(0.05),
		], 'minecraft:moss_block',3)
advancedBrassMesh([
			Item.of('minecraft:glow_berries',7).withChance(0.265),
			Item.of('minecraft:small_dripleaf',7).withChance(0.145),
			Item.of('minecraft:oak_sapling',7).withChance(0.13),
			Item.of('minecraft:spruce_sapling',7).withChance(0.11),
			Item.of('minecraft:cherry_sapling',7).withChance(0.11),
			Item.of('minecraft:acacia_sapling',7).withChance(0.11),
			Item.of('minecraft:jungle_sapling',7).withChance(0.11),
			Item.of('minecraft:dark_oak_sapling',7).withChance(0.11),
			Item.of('minecraft:mangrove_propagule',7).withChance(0.11),
			Item.of('minecraft:birch_sapling',7).withChance(0.11),
			Item.of('minecraft:azalea',7).withChance(0.11),
			Item.of('minecraft:big_dripleaf',7).withChance(0.11),
			Item.of('thermal:rubberwood_sapling',7).withChance(0.1),
			Item.of('integrateddynamics:menril_sapling',7).withChance(0.1),
			Item.of('minecraft:spore_blossom',7).withChance(0.075),
			Item.of('ars_nouveau:sourceberry_bush',7).withChance(0.05),
		], 'allthecompressed:moss_block_1x',3)
advancedDiamondMesh([
			Item.of('minecraft:glow_berries',7).withChance(0.34),
			Item.of('minecraft:small_dripleaf',7).withChance(0.17),
			Item.of('minecraft:big_dripleaf',7).withChance(0.13),
			Item.of('minecraft:oak_sapling',7).withChance(0.13),
			Item.of('minecraft:azalea',7).withChance(0.12),
			Item.of('minecraft:spruce_sapling',7).withChance(0.11),
			Item.of('minecraft:cherry_sapling',7).withChance(0.11),
			Item.of('minecraft:acacia_sapling',7).withChance(0.11),
			Item.of('minecraft:jungle_sapling',7).withChance(0.11),
			Item.of('minecraft:dark_oak_sapling',7).withChance(0.11),
			Item.of('minecraft:mangrove_propagule',7).withChance(0.11),
			Item.of('minecraft:birch_sapling',7).withChance(0.11),
			Item.of('thermal:rubberwood_sapling',7).withChance(0.1),
			Item.of('integrateddynamics:menril_sapling',7).withChance(0.1),
			Item.of('minecraft:spore_blossom',7).withChance(0.09),
			Item.of('ars_nouveau:sourceberry_bush',7).withChance(0.06),
		], 'allthecompressed:moss_block_1x',2)
advancedNetheriteMesh([
			Item.of('minecraft:glow_berries',8).withChance(0.415),
			Item.of('minecraft:small_dripleaf',8).withChance(0.195),
			Item.of('minecraft:big_dripleaf',8).withChance(0.15),
			Item.of('minecraft:azalea',8).withChance(0.13),
			Item.of('minecraft:oak_sapling',8).withChance(0.13),
			Item.of('minecraft:spruce_sapling',8).withChance(0.11),
			Item.of('minecraft:cherry_sapling',8).withChance(0.11),
			Item.of('minecraft:acacia_sapling',8).withChance(0.11),
			Item.of('minecraft:jungle_sapling',8).withChance(0.11),
			Item.of('minecraft:dark_oak_sapling',8).withChance(0.11),
			Item.of('minecraft:mangrove_propagule',8).withChance(0.11),
			Item.of('minecraft:birch_sapling',8).withChance(0.11),
			Item.of('minecraft:spore_blossom',8).withChance(0.105),
			Item.of('thermal:rubberwood_sapling',8).withChance(0.1),
			Item.of('integrateddynamics:menril_sapling',8).withChance(0.1),
			Item.of('ars_nouveau:sourceberry_bush',8).withChance(0.08),
			Item.of('create:experience_nugget',8).withChance(0.05),
		], 'allthecompressed:moss_block_1x',1)
//白色染色球
stringMesh([
			Item.of('minecraft:quartz').withChance(0.25),
			Item.of('xycraft_world:xychorium_gem_light').withChance(0.2),
			Item.of('alltheores:raw_iridium').withChance(0.1),
		], 'ae2:white_paint_ball', 10, true)
andesiteMesh([
			Item.of('minecraft:quartz',2).withChance(0.4),
			Item.of('xycraft_world:xychorium_gem_light',2).withChance(0.25),
			Item.of('alltheores:raw_iridium',2).withChance(0.15),
		], 'ae2:white_paint_ball', 9, true)
zincMesh([
			Item.of('minecraft:quartz',3).withChance(0.5),
			Item.of('xycraft_world:xychorium_gem_light',3).withChance(0.3),
			Item.of('alltheores:raw_iridium',3).withChance(0.2),
		], 'ae2:white_paint_ball', 8, true)
brassMesh([
			Item.of('minecraft:quartz',4).withChance(0.6),
			Item.of('xycraft_world:xychorium_gem_light',4).withChance(0.25),
			Item.of('alltheores:raw_iridium',4).withChance(0.22),
		], 'ae2:white_paint_ball', 6, true)
diamondMesh([
			Item.of('minecraft:quartz',5).withChance(0.7),
			Item.of('xycraft_world:xychorium_gem_light',5).withChance(0.2),
			Item.of('alltheores:raw_iridium',5).withChance(0.25),
		], 'ae2:white_paint_ball', 4, true)
netheriteMesh([
			Item.of('minecraft:quartz',6).withChance(0.75),
			Item.of('xycraft_world:xychorium_gem_light',6).withChance(0.15),
			Item.of('alltheores:raw_iridium',6).withChance(0.3),
		], 'ae2:white_paint_ball', 2, true)
advancedBrassMesh([
			Item.of('minecraft:nether_quartz_ore',4).withChance(0.6),
			Item.of('xycraft_world:xychorium_ore_stone_light',4).withChance(0.25),
			Item.of('alltheores:iridium_ore',4).withChance(0.22),
		], 'ae2:white_paint_ball', 6, true)
advancedDiamondMesh([
			Item.of('minecraft:nether_quartz_ore',5).withChance(0.7),
			Item.of('xycraft_world:xychorium_ore_stone_light',5).withChance(0.2),
			Item.of('alltheores:iridium_ore',5).withChance(0.25),
		], 'ae2:white_paint_ball', 4, true)
advancedNetheriteMesh([
			Item.of('minecraft:nether_quartz_ore',6).withChance(0.75),
			Item.of('xycraft_world:xychorium_ore_stone_light',6).withChance(0.15),
			Item.of('alltheores:iridium_ore',6).withChance(0.3),
		], 'ae2:white_paint_ball', 2, true)
//橙色染色球
stringMesh([
			Item.of('minecraft:raw_copper').withChance(0.25),
			Item.of('#forge:raw_materials/thorium').withChance(0.2),
		], 'ae2:orange_paint_ball', 10, true)
andesiteMesh([
			Item.of('minecraft:raw_copper',2).withChance(0.3),
			Item.of('#forge:raw_materials/thorium',2).withChance(0.22),
		], 'ae2:orange_paint_ball', 9, true)
zincMesh([
			Item.of('minecraft:raw_copper',3).withChance(0.35),
			Item.of('#forge:raw_materials/thorium',3).withChance(0.25),
		], 'ae2:orange_paint_ball', 8, true)
brassMesh([
			Item.of('minecraft:raw_copper',4).withChance(0.4),
			Item.of('#forge:raw_materials/thorium',4).withChance(0.28),
		], 'ae2:orange_paint_ball', 6, true)
diamondMesh([
			Item.of('minecraft:raw_copper',5).withChance(0.45),
			Item.of('#forge:raw_materials/thorium',5).withChance(0.3),
		], 'ae2:orange_paint_ball', 4, true)
netheriteMesh([
			Item.of('minecraft:raw_copper',6).withChance(0.5),
			Item.of('#forge:raw_materials/thorium',6).withChance(0.32),
		], 'ae2:orange_paint_ball', 2, true)
advancedBrassMesh([
			Item.of('minecraft:copper_ore',4).withChance(0.4),
			Item.of('#forge:storage_blocks/thorium',4).withChance(0.28),
			Item.of('thoriumreactors:titanic_iron_ore',4).withChance(0.22),
		], 'ae2:orange_paint_ball', 6, true)
advancedDiamondMesh([
			Item.of('minecraft:copper_ore',5).withChance(0.45),
			Item.of('#forge:storage_blocks/thorium',5).withChance(0.3),
			Item.of('thoriumreactors:titanic_iron_ore',5).withChance(0.25),
		], 'ae2:orange_paint_ball', 4, true)
advancedNetheriteMesh([
			Item.of('minecraft:copper_ore',6).withChance(0.5),
			Item.of('#forge:storage_blocks/thorium',6).withChance(0.32),
			Item.of('thoriumreactors:titanic_iron_ore',6).withChance(0.3),
		], 'ae2:orange_paint_ball', 2, true)
//浅蓝色染色球
stringMesh([
			Item.of('xycraft_world:xychorium_gem_blue').withChance(0.25),
			Item.of('mekanism:dust_fluorite').withChance(0.2),
			Item.of('alltheores:raw_zinc').withChance(0.17),
			Item.of('alltheores:diamond_dust').withChance(0.15),
			Item.of('alltheores:raw_platinum').withChance(0.1),
		], 'ae2:light_blue_paint_ball', 10, true)
andesiteMesh([
			Item.of('xycraft_world:xychorium_gem_blue',2).withChance(0.3),
			Item.of('mekanism:dust_fluorite',2).withChance(0.22),
			Item.of('alltheores:raw_zinc',2).withChance(0.18),
			Item.of('alltheores:diamond_dust',2).withChance(0.18),
			Item.of('alltheores:raw_platinum',2).withChance(0.12),
		], 'ae2:light_blue_paint_ball', 9, true)
zincMesh([
			Item.of('xycraft_world:xychorium_gem_blue',3).withChance(0.35),
			Item.of('mekanism:dust_fluorite',3).withChance(0.25),
			Item.of('alltheores:raw_zinc',3).withChance(0.2),
			Item.of('alltheores:diamond_dust',3).withChance(0.2),
			Item.of('alltheores:raw_platinum',3).withChance(0.14),
		], 'ae2:light_blue_paint_ball', 8, true)
brassMesh([
			Item.of('xycraft_world:xychorium_gem_blue',4).withChance(0.4),
			Item.of('mekanism:dust_fluorite',4).withChance(0.28),
			Item.of('alltheores:raw_zinc',4).withChance(0.24),
			Item.of('alltheores:diamond_dust',4).withChance(0.22),
			Item.of('alltheores:raw_platinum',4).withChance(0.16),
		], 'ae2:light_blue_paint_ball', 6, true)
diamondMesh([
			Item.of('xycraft_world:xychorium_gem_blue',5).withChance(0.45),
			Item.of('mekanism:dust_fluorite',5).withChance(0.3),
			Item.of('alltheores:raw_zinc',5).withChance(0.26),
			Item.of('alltheores:diamond_dust',5).withChance(0.25),
			Item.of('alltheores:raw_platinum',5).withChance(0.18),
		], 'ae2:light_blue_paint_ball', 4, true)
netheriteMesh([
			Item.of('xycraft_world:xychorium_gem_blue',6).withChance(0.5),
			Item.of('mekanism:fluorite_gem',6).withChance(0.32),
			Item.of('alltheores:raw_zinc',6).withChance(0.31),
			Item.of('minecraft:diamond',6).withChance(0.3),
			Item.of('alltheores:raw_platinum',6).withChance(0.2),
		], 'ae2:light_blue_paint_ball', 2, true)
advancedBrassMesh([
			Item.of('xycraft_world:xychorium_ore_stone_blue',4).withChance(0.4),
			Item.of('mekanism:fluorite_ore',4).withChance(0.28),
			Item.of('alltheores:zinc_ore',4).withChance(0.24),
			Item.of('minecraft:diamond_ore',4).withChance(0.22),
			Item.of('alltheores:platinum_ore',4).withChance(0.16),
		], 'ae2:light_blue_paint_ball', 6, true)
advancedDiamondMesh([
			Item.of('xycraft_world:xychorium_ore_stone_blue',5).withChance(0.45),
			Item.of('mekanism:fluorite_ore',5).withChance(0.3),
			Item.of('alltheores:zinc_ore',5).withChance(0.26),
			Item.of('minecraft:diamond_ore',5).withChance(0.25),
			Item.of('alltheores:platinum_ore',5).withChance(0.18),
		], 'ae2:light_blue_paint_ball', 4, true)
advancedNetheriteMesh([
			Item.of('xycraft_world:xychorium_ore_stone_blue',6).withChance(0.5),
			Item.of('mekanism:fluorite_ore',6).withChance(0.32),
			Item.of('alltheores:zinc_ore',6).withChance(0.31),
			Item.of('minecraft:diamond_ore',6).withChance(0.3),
			Item.of('alltheores:platinum_ore',6).withChance(0.2),
		], 'ae2:light_blue_paint_ball', 2, true)
//黄色染色球
stringMesh([
			Item.of('minecraft:glowstone_dust').withChance(0.25),
			Item.of('thermal:sulfur').withChance(0.2),
			Item.of('bigreactors:raw_yellorium').withChance(0.15),
			Item.of('minecraft:raw_gold').withChance(0.1),
		], 'ae2:yellow_paint_ball', 10, true)
andesiteMesh([
			Item.of('minecraft:glowstone_dust',2).withChance(0.3),
			Item.of('thermal:sulfur',2).withChance(0.22),
			Item.of('bigreactors:raw_yellorium',2).withChance(0.18),
			Item.of('minecraft:raw_gold',2).withChance(0.12),
		], 'ae2:yellow_paint_ball', 9, true)
zincMesh([
			Item.of('minecraft:glowstone_dust',3).withChance(0.35),
			Item.of('thermal:sulfur',3).withChance(0.25),
			Item.of('bigreactors:raw_yellorium',3).withChance(0.2),
			Item.of('minecraft:raw_gold',3).withChance(0.14),
		], 'ae2:yellow_paint_ball', 8, true)
brassMesh([
			Item.of('minecraft:glowstone_dust',4).withChance(0.4),
			Item.of('thermal:sulfur',4).withChance(0.28),
			Item.of('bigreactors:raw_yellorium',4).withChance(0.24),
			Item.of('minecraft:raw_gold',4).withChance(0.16),
		], 'ae2:yellow_paint_ball', 6, true)
diamondMesh([
			Item.of('minecraft:glowstone_dust',5).withChance(0.45),
			Item.of('thermal:sulfur',5).withChance(0.3),
			Item.of('bigreactors:raw_yellorium',5).withChance(0.26),
			Item.of('minecraft:raw_gold',5).withChance(0.18),
		], 'ae2:yellow_paint_ball', 4, true)
netheriteMesh([
			Item.of('minecraft:glowstone_dust',6).withChance(0.5),
			Item.of('thermal:sulfur',6).withChance(0.32),
			Item.of('bigreactors:raw_yellorium',6).withChance(0.31),
			Item.of('minecraft:raw_gold',6).withChance(0.2),
		], 'ae2:yellow_paint_ball', 2, true)
advancedBrassMesh([
			Item.of('minecraft:glowstone',4).withChance(0.4),
			Item.of('thermal:sulfur_ore',4).withChance(0.28),
			Item.of('bigreactors:yellorite_ore',4).withChance(0.24),
			Item.of('minecraft:gold_ore',4).withChance(0.16),
		], 'ae2:yellow_paint_ball', 6, true)
advancedDiamondMesh([
			Item.of('minecraft:glowstone',5).withChance(0.45),
			Item.of('thermal:sulfur_ore',5).withChance(0.3),
			Item.of('bigreactors:yellorite_ore',5).withChance(0.26),
			Item.of('minecraft:gold_ore',5).withChance(0.18),
		], 'ae2:yellow_paint_ball', 4, true)
advancedNetheriteMesh([
			Item.of('minecraft:glowstone',6).withChance(0.5),
			Item.of('thermal:sulfur_ore',6).withChance(0.32),
			Item.of('bigreactors:yellorite_ore',6).withChance(0.31),
			Item.of('minecraft:gold_ore',6).withChance(0.2),
		], 'ae2:yellow_paint_ball', 2, true)
//黄绿色染色球
stringMesh([
			Item.of('alltheores:raw_uranium').withChance(0.25),
			Item.of('thermal:emerald_dust').withChance(0.1),
		], 'ae2:lime_paint_ball', 10, true)
andesiteMesh([
			Item.of('alltheores:raw_uranium',2).withChance(0.3),
			Item.of('thermal:emerald_dust',2).withChance(0.12),
		], 'ae2:lime_paint_ball', 9, true)
zincMesh([
			Item.of('alltheores:raw_uranium',3).withChance(0.35),
			Item.of('thermal:emerald_dust',3).withChance(0.14),
		], 'ae2:lime_paint_ball', 8, true)
brassMesh([
			Item.of('alltheores:raw_uranium',4).withChance(0.4),
			Item.of('thermal:emerald_dust',4).withChance(0.16),
		], 'ae2:lime_paint_ball', 6, true)
diamondMesh([
			Item.of('alltheores:raw_uranium',5).withChance(0.45),
			Item.of('thermal:emerald_dust',5).withChance(0.18),
		], 'ae2:lime_paint_ball', 4, true)
netheriteMesh([
			Item.of('alltheores:raw_uranium',6).withChance(0.5),
			Item.of('minecraft:emerald',6).withChance(0.2),
		], 'ae2:lime_paint_ball', 2, true)
advancedBrassMesh([
			Item.of('alltheores:uranium_ore',4).withChance(0.4),
			Item.of('minecraft:emerald_ore',4).withChance(0.16),
		], 'ae2:lime_paint_ball', 6, true)
advancedDiamondMesh([
			Item.of('alltheores:uranium_ore',5).withChance(0.45),
			Item.of('minecraft:emerald_ore',5).withChance(0.18),
		], 'ae2:lime_paint_ball', 4, true)
advancedNetheriteMesh([
			Item.of('alltheores:uranium_ore',6).withChance(0.5),
			Item.of('minecraft:emerald_ore',6).withChance(0.2),
		], 'ae2:lime_paint_ball', 2, true)
//粉红色染色球
stringMesh([
			Item.of('thoriumreactors:pyrochlor_ore').withChance(0.25),
		], 'ae2:pink_paint_ball', 10, true)
andesiteMesh([
			Item.of('thoriumreactors:pyrochlor_ore',2).withChance(0.3),
		], 'ae2:pink_paint_ball', 9, true)
zincMesh([
			Item.of('thoriumreactors:pyrochlor_ore',3).withChance(0.35),
		], 'ae2:pink_paint_ball', 8, true)
brassMesh([
			Item.of('thoriumreactors:pyrochlor_ore',4).withChance(0.4),
		], 'ae2:pink_paint_ball', 6, true)
diamondMesh([
			Item.of('thoriumreactors:pyrochlor_ore',5).withChance(0.45),
		], 'ae2:pink_paint_ball', 4, true)
netheriteMesh([
			Item.of('thoriumreactors:pyrochlor_ore',6).withChance(0.5),
		], 'ae2:pink_paint_ball', 2, true)
advancedBrassMesh([
			Item.of('thoriumreactors:niob_ingot',4).withChance(0.4),
		], 'ae2:pink_paint_ball', 6, true)
advancedDiamondMesh([
			Item.of('thoriumreactors:niob_ingot',5).withChance(0.45),
		], 'ae2:pink_paint_ball', 4, true)
advancedNetheriteMesh([
			Item.of('thoriumreactors:niob_ingot',6).withChance(0.5),
		], 'ae2:pink_paint_ball', 2, true)
//灰色染色球
stringMesh([
			Item.of('alltheores:raw_nickel').withChance(0.25),
			Item.of('alltheores:raw_silver').withChance(0.2),
		], 'ae2:gray_paint_ball', 10, true)
andesiteMesh([
			Item.of('alltheores:raw_nickel',2).withChance(0.3),
			Item.of('alltheores:raw_silver',2).withChance(0.22),
		], 'ae2:gray_paint_ball', 9, true)
zincMesh([
			Item.of('alltheores:raw_nickel',3).withChance(0.35),
			Item.of('alltheores:raw_silver',3).withChance(0.25),
		], 'ae2:gray_paint_ball', 8, true)
brassMesh([
			Item.of('alltheores:raw_nickel',4).withChance(0.4),
			Item.of('alltheores:raw_silver',4).withChance(0.28),
		], 'ae2:gray_paint_ball', 6, true)
diamondMesh([
			Item.of('alltheores:raw_nickel',5).withChance(0.45),
			Item.of('alltheores:raw_silver',5).withChance(0.3),
		], 'ae2:gray_paint_ball', 4, true)
netheriteMesh([
			Item.of('alltheores:raw_nickel',6).withChance(0.5),
			Item.of('alltheores:raw_silver',6).withChance(0.32),
		], 'ae2:gray_paint_ball', 2, true)
advancedBrassMesh([
			Item.of('alltheores:nickel_ore',4).withChance(0.4),
			Item.of('alltheores:silver_ore',4).withChance(0.28),
		], 'ae2:gray_paint_ball', 6, true)
advancedDiamondMesh([
			Item.of('alltheores:nickel_ore',5).withChance(0.45),
			Item.of('alltheores:silver_ore',5).withChance(0.3),
		], 'ae2:gray_paint_ball', 4, true)
advancedNetheriteMesh([
			Item.of('alltheores:nickel_ore',6).withChance(0.5),
			Item.of('alltheores:silver_ore',6).withChance(0.32),
		], 'ae2:gray_paint_ball', 2, true)
//淡灰色染色球
stringMesh([
			Item.of('alltheores:raw_osmium').withChance(0.25),
			Item.of('alltheores:raw_tin').withChance(0.2),
			Item.of('alltheores:raw_aluminum').withChance(0.15),
			Item.of('mekanism:dust_fluorite').withChance(0.1),
		], 'ae2:light_gray_paint_ball', 10, true)
andesiteMesh([
			Item.of('alltheores:raw_osmium',2).withChance(0.3),
			Item.of('alltheores:raw_tin',2).withChance(0.22),
			Item.of('alltheores:raw_aluminum',2).withChance(0.18),
			Item.of('mekanism:dust_fluorite',2).withChance(0.12),
		], 'ae2:light_gray_paint_ball', 9, true)
zincMesh([
			Item.of('alltheores:raw_osmium',3).withChance(0.35),
			Item.of('alltheores:raw_tin',3).withChance(0.25),
			Item.of('alltheores:raw_aluminum',3).withChance(0.2),
			Item.of('mekanism:dust_fluorite',3).withChance(0.14),
		], 'ae2:light_gray_paint_ball', 8, true)
brassMesh([
			Item.of('alltheores:raw_osmium',4).withChance(0.4),
			Item.of('alltheores:raw_tin',4).withChance(0.28),
			Item.of('alltheores:raw_aluminum',4).withChance(0.24),
			Item.of('mekanism:dust_fluorite',4).withChance(0.16),
		], 'ae2:light_gray_paint_ball', 6, true)
diamondMesh([
			Item.of('alltheores:raw_osmium',5).withChance(0.45),
			Item.of('alltheores:raw_tin',5).withChance(0.3),
			Item.of('alltheores:raw_aluminum',5).withChance(0.26),
			Item.of('mekanism:dust_fluorite',5).withChance(0.18),
		], 'ae2:light_gray_paint_ball', 4, true)
netheriteMesh([
			Item.of('alltheores:raw_osmium',6).withChance(0.5),
			Item.of('alltheores:raw_tin',6).withChance(0.32),
			Item.of('alltheores:raw_aluminum',6).withChance(0.31),
			Item.of('mekanism:fluorite_gem',6).withChance(0.2),
		], 'ae2:light_gray_paint_ball', 2, true)
advancedBrassMesh([
			Item.of('alltheores:osmium_ore',4).withChance(0.4),
			Item.of('alltheores:tin_ore',4).withChance(0.28),
			Item.of('alltheores:aluminum_ore').withChance(0.24),
			Item.of('mekanism:fluorite_ore').withChance(0.16),
		], 'ae2:light_gray_paint_ball', 6, true)
advancedDiamondMesh([
			Item.of('alltheores:osmium_ore',5).withChance(0.45),
			Item.of('alltheores:tin_ore',5).withChance(0.3),
			Item.of('alltheores:aluminum_ore',5).withChance(0.26),
			Item.of('mekanism:fluorite_ore',5).withChance(0.18),
		], 'ae2:light_gray_paint_ball', 4, true)
advancedNetheriteMesh([
			Item.of('alltheores:osmium_ore',6).withChance(0.5),
			Item.of('alltheores:tin_ore',6).withChance(0.32),
			Item.of('alltheores:aluminum_ore',6).withChance(0.31),
			Item.of('mekanism:fluorite_ore',6).withChance(0.2),
		], 'ae2:light_gray_paint_ball', 2, true)
//紫色染色球
stringMesh([
			Item.of('nuclearcraft:boron_chunk').withChance(0.25),
			Item.of('thoriumreactors:chromite_ore').withChance(0.2),
		], 'ae2:purple_paint_ball', 10, true)
andesiteMesh([
			Item.of('nuclearcraft:boron_chunk',2).withChance(0.3),
			Item.of('thoriumreactors:chromite_ore',2).withChance(0.22),
		], 'ae2:purple_paint_ball', 9, true)
zincMesh([
			Item.of('nuclearcraft:boron_chunk',3).withChance(0.35),
			Item.of('thoriumreactors:chromite_ore',3).withChance(0.25),
		], 'ae2:purple_paint_ball', 8, true)
brassMesh([
			Item.of('nuclearcraft:boron_chunk',4).withChance(0.4),
			Item.of('thoriumreactors:chromite_ore',4).withChance(0.28),
		], 'ae2:purple_paint_ball', 6, true)
diamondMesh([
			Item.of('nuclearcraft:boron_chunk',5).withChance(0.45),
			Item.of('thoriumreactors:chromite_ore',5).withChance(0.3),
		], 'ae2:purple_paint_ball', 4, true)
netheriteMesh([
			Item.of('nuclearcraft:boron_chunk',6).withChance(0.5),
			Item.of('thoriumreactors:chromite_ore',6).withChance(0.32),
		], 'ae2:purple_paint_ball', 2, true)
advancedBrassMesh([
			Item.of('nuclearcraft:boron_ore',4).withChance(0.4),
			Item.of('thoriumreactors:chromium_ingot',4).withChance(0.28),
		], 'ae2:purple_paint_ball', 6, true)
advancedDiamondMesh([
			Item.of('nuclearcraft:boron_ore',5).withChance(0.45),
			Item.of('thoriumreactors:chromium_ingot',5).withChance(0.3),
		], 'ae2:purple_paint_ball', 4, true)
advancedNetheriteMesh([
			Item.of('nuclearcraft:boron_ore',6).withChance(0.5),
			Item.of('thoriumreactors:chromium_ingot',6).withChance(0.32),
		], 'ae2:purple_paint_ball', 2, true)
//蓝色染色球
stringMesh([
			Item.of('minecraft:lapis_lazuli').withChance(0.25),
			Item.of('alltheores:raw_lead').withChance(0.2),
			Item.of('alltheores:sapphire').withChance(0.15),
			Item.of('tconstruct:raw_cobalt').withChance(0.1),
			Item.of('thoriumreactors:manganese_ore').withChance(0.05),
		], 'ae2:blue_paint_ball', 10, true)
andesiteMesh([
			Item.of('minecraft:lapis_lazuli',2).withChance(0.3),
			Item.of('alltheores:raw_lead',2).withChance(0.22),
			Item.of('alltheores:sapphire',2).withChance(0.18),
			Item.of('tconstruct:raw_cobalt',2).withChance(0.12),
			Item.of('thoriumreactors:manganese_ore',2).withChance(0.07),
		], 'ae2:blue_paint_ball', 9, true)
zincMesh([
			Item.of('minecraft:lapis_lazuli',3).withChance(0.35),
			Item.of('alltheores:raw_lead',3).withChance(0.25),
			Item.of('alltheores:sapphire',3).withChance(0.2),
			Item.of('tconstruct:raw_cobalt',3).withChance(0.14),
			Item.of('thoriumreactors:manganese_ore',3).withChance(0.1),
		], 'ae2:blue_paint_ball', 8, true)
brassMesh([
			Item.of('minecraft:lapis_lazuli',4).withChance(0.4),
			Item.of('alltheores:raw_lead',4).withChance(0.28),
			Item.of('alltheores:sapphire',4).withChance(0.24),
			Item.of('tconstruct:raw_cobalt',4).withChance(0.16),
			Item.of('thoriumreactors:manganese_ore',4).withChance(0.12),
		], 'ae2:blue_paint_ball', 6, true)
diamondMesh([
			Item.of('minecraft:lapis_lazuli',5).withChance(0.45),
			Item.of('alltheores:raw_lead',5).withChance(0.3),
			Item.of('alltheores:sapphire',5).withChance(0.26),
			Item.of('tconstruct:raw_cobalt',5).withChance(0.18),
			Item.of('thoriumreactors:manganese_ore',5).withChance(0.14),
		], 'ae2:blue_paint_ball', 4, true)
netheriteMesh([
			Item.of('minecraft:lapis_lazuli',6).withChance(0.5),
			Item.of('alltheores:raw_lead',6).withChance(0.32),
			Item.of('alltheores:sapphire',6).withChance(0.31),
			Item.of('tconstruct:raw_cobalt',6).withChance(0.2),
			Item.of('thoriumreactors:manganese_ore',6).withChance(0.16),
		], 'ae2:blue_paint_ball', 2, true)
advancedBrassMesh([
			Item.of('minecraft:lapis_ore',4).withChance(0.4),
			Item.of('alltheores:lead_ore',4).withChance(0.28),
			Item.of('alltheores:sapphire_ore',4).withChance(0.24),
			Item.of('tconstruct:cobalt_ore',4).withChance(0.16),
			Item.of('thoriumreactors:manganese_ingot',4).withChance(0.12),
		], 'ae2:blue_paint_ball', 6, true)
advancedDiamondMesh([
			Item.of('minecraft:lapis_ore',5).withChance(0.45),
			Item.of('alltheores:lead_ore',5).withChance(0.3),
			Item.of('alltheores:sapphire_ore',5).withChance(0.26),
			Item.of('tconstruct:cobalt_ore',5).withChance(0.18),
			Item.of('thoriumreactors:manganese_ingot',5).withChance(0.14),
		], 'ae2:blue_paint_ball', 4, true)
advancedNetheriteMesh([
			Item.of('minecraft:lapis_ore',6).withChance(0.5),
			Item.of('alltheores:lead_ore',6).withChance(0.32),
			Item.of('alltheores:sapphire_ore',6).withChance(0.31),
			Item.of('tconstruct:cobalt_ore',6).withChance(0.2),
			Item.of('thoriumreactors:manganese_ingot',6).withChance(0.16),
		], 'ae2:blue_paint_ball', 2, true)
//棕色染色球
stringMesh([
			Item.of('minecraft:raw_iron').withChance(0.25),
			Item.of('thermal:niter').withChance(0.2),
			Item.of('minecraft:netherite_scrap').withChance(0.1),
		], 'ae2:brown_paint_ball', 10, true)
andesiteMesh([
			Item.of('minecraft:raw_iron',2).withChance(0.3),
			Item.of('thermal:niter',2).withChance(0.22),
			Item.of('minecraft:netherite_scrap',2).withChance(0.12),
		], 'ae2:brown_paint_ball', 9, true)
zincMesh([
			Item.of('minecraft:raw_iron',3).withChance(0.35),
			Item.of('thermal:niter',3).withChance(0.25),
			Item.of('minecraft:netherite_scrap',3).withChance(0.14),
		], 'ae2:brown_paint_ball', 8, true)
brassMesh([
			Item.of('minecraft:raw_iron',4).withChance(0.4),
			Item.of('thermal:niter',4).withChance(0.28),
			Item.of('minecraft:netherite_scrap',4).withChance(0.16),
		], 'ae2:brown_paint_ball', 6, true)
diamondMesh([
			Item.of('minecraft:raw_iron',5).withChance(0.45),
			Item.of('thermal:niter',5).withChance(0.3),
			Item.of('minecraft:netherite_scrap',5).withChance(0.18),
		], 'ae2:brown_paint_ball', 4, true)
netheriteMesh([
			Item.of('minecraft:raw_iron',6).withChance(0.5),
			Item.of('thermal:niter',6).withChance(0.32),
			Item.of('minecraft:netherite_scrap',6).withChance(0.2),
		], 'ae2:brown_paint_ball', 2, true)
advancedBrassMesh([
			Item.of('minecraft:iron_ore',4).withChance(0.4),
			Item.of('thermal:niter_ore',4).withChance(0.28),
			Item.of('minecraft:ancient_debris',4).withChance(0.16),
		], 'ae2:brown_paint_ball', 6, true)
advancedDiamondMesh([
			Item.of('minecraft:iron_ore',5).withChance(0.45),
			Item.of('thermal:niter_ore',5).withChance(0.3),
			Item.of('minecraft:ancient_debris',5).withChance(0.18),
		], 'ae2:brown_paint_ball', 4, true)
advancedNetheriteMesh([
			Item.of('minecraft:iron_ore',6).withChance(0.5),
			Item.of('thermal:niter_ore',6).withChance(0.32),
			Item.of('minecraft:ancient_debris',6).withChance(0.2),
		], 'ae2:brown_paint_ball', 2, true)
//绿色染色球
stringMesh([
			Item.of('xycraft_world:xychorium_gem_green').withChance(0.25),
			Item.of('alltheores:peridot').withChance(0.2),
		], 'ae2:green_paint_ball', 10, true)
andesiteMesh([
			Item.of('xycraft_world:xychorium_gem_green',2).withChance(0.3),
			Item.of('alltheores:peridot',2).withChance(0.22),
		], 'ae2:green_paint_ball', 9, true)
zincMesh([
			Item.of('xycraft_world:xychorium_gem_green',3).withChance(0.35),
			Item.of('alltheores:peridot',3).withChance(0.25),
		], 'ae2:green_paint_ball', 8, true)
brassMesh([
			Item.of('xycraft_world:xychorium_gem_green',4).withChance(0.4),
			Item.of('alltheores:peridot',4).withChance(0.28),
		], 'ae2:green_paint_ball', 6, true)
diamondMesh([
			Item.of('xycraft_world:xychorium_gem_green',5).withChance(0.45),
			Item.of('alltheores:peridot',5).withChance(0.3),
		], 'ae2:green_paint_ball', 4, true)
netheriteMesh([
			Item.of('xycraft_world:xychorium_gem_green',6).withChance(0.5),
			Item.of('alltheores:peridot',6).withChance(0.32),
		], 'ae2:green_paint_ball', 2, true)
advancedBrassMesh([
			Item.of('xycraft_world:xychorium_ore_stone_green',4).withChance(0.4),
			Item.of('alltheores:peridot_ore',4).withChance(0.28),
		], 'ae2:green_paint_ball', 6, true)
advancedDiamondMesh([
			Item.of('xycraft_world:xychorium_ore_stone_green',5).withChance(0.45),
			Item.of('alltheores:peridot_ore',5).withChance(0.3),
		], 'ae2:green_paint_ball', 4, true)
advancedNetheriteMesh([
			Item.of('xycraft_world:xychorium_ore_stone_green',6).withChance(0.5),
			Item.of('alltheores:peridot_ore',6).withChance(0.32),
		], 'ae2:green_paint_ball', 2, true)
//红色染色球
stringMesh([
			Item.of('xycraft_world:xychorium_gem_red').withChance(0.25),
			Item.of('minecraft:redstone').withChance(0.2),
			Item.of('alltheores:ruby').withChance(0.15),
			Item.of('thermal:cinnabar').withChance(0.1),
			Item.of('nuclearcraft:magnesium_chunk').withChance(0.1),
			Item.of('thoriumreactors:molybdenum_ore').withChance(0.1),
		], 'ae2:red_paint_ball', 10, true)
andesiteMesh([
			Item.of('xycraft_world:xychorium_gem_red',2).withChance(0.3),
			Item.of('minecraft:redstone',2).withChance(0.22),
			Item.of('alltheores:ruby',2).withChance(0.18),
			Item.of('thermal:cinnabar',2).withChance(0.12),
			Item.of('nuclearcraft:magnesium_chunk',2).withChance(0.12),
			Item.of('thoriumreactors:molybdenum_ore',2).withChance(0.12),
		], 'ae2:red_paint_ball', 9, true)
zincMesh([
			Item.of('xycraft_world:xychorium_gem_red',3).withChance(0.35),
			Item.of('minecraft:redstone',3).withChance(0.25),
			Item.of('alltheores:ruby',3).withChance(0.2),
			Item.of('thermal:cinnabar',3).withChance(0.14),
			Item.of('nuclearcraft:magnesium_chunk',3).withChance(0.14),
			Item.of('thoriumreactors:molybdenum_ore',3).withChance(0.14),
		], 'ae2:red_paint_ball', 8, true)
brassMesh([
			Item.of('xycraft_world:xychorium_gem_red',4).withChance(0.4),
			Item.of('minecraft:redstone',4).withChance(0.28),
			Item.of('alltheores:ruby',4).withChance(0.24),
			Item.of('thermal:cinnabar',4).withChance(0.16),
			Item.of('nuclearcraft:magnesium_chunk',4).withChance(0.16),
			Item.of('thoriumreactors:molybdenum_ore',4).withChance(0.16),
		], 'ae2:red_paint_ball', 6, true)
diamondMesh([
			Item.of('xycraft_world:xychorium_gem_red',5).withChance(0.45),
			Item.of('minecraft:redstone',5).withChance(0.3),
			Item.of('alltheores:ruby',5).withChance(0.26),
			Item.of('thermal:cinnabar',5).withChance(0.18),
			Item.of('nuclearcraft:magnesium_chunk',5).withChance(0.18),
			Item.of('thoriumreactors:molybdenum_ore',5).withChance(0.18),
		], 'ae2:red_paint_ball', 4, true)
netheriteMesh([
			Item.of('xycraft_world:xychorium_gem_red',6).withChance(0.5),
			Item.of('minecraft:redstone',6).withChance(0.32),
			Item.of('alltheores:ruby',6).withChance(0.31),
			Item.of('thermal:cinnabar',6).withChance(0.2),
			Item.of('nuclearcraft:magnesium_chunk',6).withChance(0.2),
			Item.of('thoriumreactors:molybdenum_ore',6).withChance(0.2),
		], 'ae2:red_paint_ball', 2, true)
advancedBrassMesh([
			Item.of('xycraft_world:xychorium_ore_stone_red',4).withChance(0.4),
			Item.of('minecraft:redstone_ore',4).withChance(0.28),
			Item.of('alltheores:ruby_ore',4).withChance(0.24),
			Item.of('thermal:cinnabar_ore',4).withChance(0.16),
			Item.of('nuclearcraft:magnesium_ore',4).withChance(0.16),
			Item.of('thoriumreactors:molybdenum_ingot',4).withChance(0.16),
		], 'ae2:red_paint_ball', 6, true)
advancedDiamondMesh([
			Item.of('xycraft_world:xychorium_ore_stone_red',5).withChance(0.45),
			Item.of('minecraft:redstone_ore',5).withChance(0.3),
			Item.of('alltheores:ruby_ore',5).withChance(0.26),
			Item.of('thermal:cinnabar_ore',5).withChance(0.18),
			Item.of('nuclearcraft:magnesium_ore',5).withChance(0.18),
			Item.of('thoriumreactors:molybdenum_ingot',5).withChance(0.18),
		], 'ae2:red_paint_ball', 4, true)
advancedNetheriteMesh([
			Item.of('xycraft_world:xychorium_ore_stone_red',6).withChance(0.5),
			Item.of('minecraft:redstone_ore',6).withChance(0.32),
			Item.of('alltheores:ruby_ore',6).withChance(0.31),
			Item.of('thermal:cinnabar_ore',6).withChance(0.2),
			Item.of('nuclearcraft:magnesium_ore',6).withChance(0.2),
			Item.of('thoriumreactors:molybdenum_ingot',6).withChance(0.2),
		], 'ae2:red_paint_ball', 2, true)
//黑色染色球
stringMesh([
			Item.of('minecraft:coal').withChance(0.25),
			Item.of('xycraft_world:xychorium_gem_dark').withChance(0.2),
			Item.of('thoriumreactors:graphite_crystal').withChance(0.15),
			Item.of('nuclearcraft:thorium_chunk').withChance(0.1),
		], 'ae2:black_paint_ball', 10, true)
andesiteMesh([
			Item.of('minecraft:coal',2).withChance(0.3),
			Item.of('xycraft_world:xychorium_gem_dark',2).withChance(0.22),
			Item.of('thoriumreactors:graphite_crystal',2).withChance(0.18),
			Item.of('nuclearcraft:thorium_chunk',2).withChance(0.12),
		], 'ae2:black_paint_ball', 9, true)
zincMesh([
			Item.of('minecraft:coal',3).withChance(0.35),
			Item.of('xycraft_world:xychorium_gem_dark',3).withChance(0.25),
			Item.of('thoriumreactors:graphite_crystal',3).withChance(0.2),
			Item.of('nuclearcraft:thorium_chunk',3).withChance(0.14),
		], 'ae2:black_paint_ball', 8, true)
brassMesh([
			Item.of('minecraft:coal',4).withChance(0.4),
			Item.of('xycraft_world:xychorium_gem_dark',4).withChance(0.28),
			Item.of('thoriumreactors:graphite_crystal',4).withChance(0.24),
			Item.of('nuclearcraft:thorium_chunk',4).withChance(0.16),
		], 'ae2:black_paint_ball', 6, true)
diamondMesh([
			Item.of('minecraft:coal',5).withChance(0.45),
			Item.of('xycraft_world:xychorium_gem_dark',5).withChance(0.3),
			Item.of('thoriumreactors:graphite_crystal',5).withChance(0.26),
			Item.of('nuclearcraft:thorium_chunk',5).withChance(0.18),
		], 'ae2:black_paint_ball', 4, true)
netheriteMesh([
			Item.of('minecraft:coal',6).withChance(0.5),
			Item.of('xycraft_world:xychorium_gem_dark',6).withChance(0.32),
			Item.of('thoriumreactors:graphite_crystal',6).withChance(0.31),
			Item.of('nuclearcraft:thorium_chunk',6).withChance(0.2),
		], 'ae2:black_paint_ball', 2, true)
advancedBrassMesh([
			Item.of('minecraft:coal_ore',4).withChance(0.4),
			Item.of('xycraft_world:xychorium_ore_stone_dark',4).withChance(0.28),
			Item.of('thoriumreactors:graphite_ore',4).withChance(0.24),
			Item.of('nuclearcraft:thorium_ore',4).withChance(0.16),
		], 'ae2:black_paint_ball', 6, true)
advancedDiamondMesh([
			Item.of('minecraft:coal_ore',5).withChance(0.45),
			Item.of('xycraft_world:xychorium_ore_stone_dark',5).withChance(0.3),
			Item.of('thoriumreactors:graphite_ore',5).withChance(0.26),
			Item.of('nuclearcraft:thorium_ore',5).withChance(0.18),
		], 'ae2:black_paint_ball', 4, true)
advancedNetheriteMesh([
			Item.of('minecraft:coal_ore',6).withChance(0.5),
			Item.of('xycraft_world:xychorium_ore_stone_dark',6).withChance(0.32),
			Item.of('thoriumreactors:graphite_ore',6).withChance(0.31),
			Item.of('nuclearcraft:thorium_ore',6).withChance(0.2),
		], 'ae2:black_paint_ball', 2, true)