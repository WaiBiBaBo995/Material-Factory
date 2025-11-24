StartupEvents.registry("block", (event) => {
	const MODID = "materialfactory:"

	// 工具类型
	const toolType = {
		sword: "minecraft:mineable/sword",
		pickaxe: "minecraft:mineable/pickaxe",
		axe: "minecraft:mineable/axe",
		shovel: "minecraft:mineable/shovel",
		hoe: "minecraft:mineable/hoe"
	}

	// 挖掘等级
	const miningLevel = {
		wooden: "minecraft:needs_wooden_tool",
		stone: "minecraft:needs_stone_tool",
		iron: "minecraft:needs_iron_tool",
		gold: "minecraft:needs_gold_tool",
		diamond: "minecraft:needs_diamond_tool",
		nether: "forge:needs_netherite_tool"
	}

	let blockRegisters = [
		["better_soil", "grass", 3, "shovel", "wooden"],
		["metal_crate", "copper", 1, "pickaxe", "stone"],
		["blue_crate", "copper", 1, "pickaxe", "stone"],
		["black_crate", "copper", 1, "pickaxe", "stone"],
		["brown_crate", "copper", 1, "pickaxe", "stone"],
		["copper_crate", "copper", 1, "pickaxe", "stone"],
		["airdrop_chest", "stone", 6, "pickaxe", "iron"],
	]
	blockRegisters.forEach(([name, soundType, hardness, tool, level]) => {
		event.create(MODID + name) // 声明方块id
			.soundType(soundType) // 声音类型
			.hardness(hardness) // 硬度
			.resistance(hardness) // 方块的耐爆炸性
			.tagBlock(toolType[tool]) // 工具类型
			.tagBlock(miningLevel[level])  // 挖掘等级
			// .tagItem(MODID + "items") // 添加物品tag(可选)
			// .tagItem(MODID + "blocks") // 添加物品tag(可选)
			.requiresTool(true) // 必须要工具挖掘
	})
})

StartupEvents.registry("block", (event) => {
	event.create("createsifter:crushed_netherrack", "falling")
		.soundType("sand")
		.hardness(0.4)
		.resistance(0.4)
		.tagBlock('minecraft:mineable/shovel')

	event.create("createsifter:crushed_blackstone", "falling")
		.soundType("sand")
		.hardness(0.4)
		.resistance(0.4)
		.tagBlock('minecraft:mineable/shovel')

	event.create("createsifter:crushed_deepslate", "falling")
		.soundType("sand")
		.hardness(0.4)
		.resistance(0.4)
		.tagBlock('minecraft:mineable/shovel')

	event.create("createsifter:crushed_netherrack_1x", "basic")
		.soundType("sand")
		.hardness(1)
		.resistance(1)
		.tagBlock('minecraft:mineable/shovel')

	event.create("createsifter:crushed_blackstone_1x", "basic")
		.soundType("sand")
		.hardness(1)
		.resistance(1)
		.tagBlock('minecraft:mineable/shovel')

	event.create("createsifter:crushed_deepslate_1x", "basic")
		.soundType("sand")
		.hardness(1)
		.resistance(1)
		.tagBlock('minecraft:mineable/shovel')

	event.create("createsifter:crushed_end_stone_1x", "basic")
		.soundType("sand")
		.hardness(1)
		.resistance(1)
		.tagBlock('minecraft:mineable/shovel')

	event.create("createsifter:dust_1x", "basic")
		.soundType("sand")
		.hardness(1)
		.resistance(1)
		.tagBlock('minecraft:mineable/shovel')

	event.create('materialfactory:megablock', "basic")
		.soundType('stone')
		.tagBlock('minecraft:mineable/pickaxe')
		.tag('materialfactory:megablock')
		.lightLevel(4)
	let megablock = ["white_megablock","orange_megablock","magenta_megablock","light_blue_megablock","yellow_megablock","lime_megablock","pink_megablock","gray_megablock","light_gray_megablock","cyan_megablock","purple_megablock","blue_megablock","brown_megablock","green_megablock","red_megablock","black_megablock"]
	for (const blockName of megablock) {
	event.create(`materialfactory:${blockName}`, "basic")
		.soundType('stone')
		.tagBlock('minecraft:mineable/pickaxe')
		.tag('materialfactory:megablock')
		.tag(`materialfactory:megablock/${blockName}`)
		.lightLevel(4)
	}

	event.create('materialfactory:simple_machine_chassis', "basic")
		.soundType('stone')
		.tagBlock('minecraft:mineable/pickaxe')
		.defaultCutout()

	event.create('materialfactory:airdrop', "basic")
		.soundType('stone')
		.tagBlock('minecraft:mineable/pickaxe')
		.defaultTranslucent()

	event.create(`materialfactory:base_crystal_cluster`, "basic")
		.soundType('glass')
		.resistance(4)
		.box(4, 6, 4, 8, 10, 8)
        .box(6, 2, 6, 10, 14, 10)
        .box(4, 0, 4, 14, 2, 14)
        .box(2, 0, 2, 8, 6, 8)
        .box(8, 2, 8, 12, 8, 12)
        .box(8, 0, 2, 12, 4, 6)
		.lightLevel(9)
	let dye_crystal = ["orange", "magenta", "yellow", "pink", "gray", "light_gray", "cyan", "purple", "brown", "green"];
	for (const dyes of dye_crystal) {
	event.create(`materialfactory:${dyes}_crystal_cluster`, "basic")
		.soundType('glass')
		.resistance(4)
		.box(4, 6, 4, 8, 10, 8)
        .box(6, 2, 6, 10, 14, 10)
        .box(4, 0, 4, 14, 2, 14)
        .box(2, 0, 2, 8, 6, 8)
        .box(8, 2, 8, 12, 8, 12)
        .box(8, 0, 2, 12, 4, 6)
		.lightLevel(9)
	}
})