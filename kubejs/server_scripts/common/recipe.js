ServerEvents.recipes(event => {
    //火粘液球
    event.smelting('slimeoverhaul:flame_slime_ball', 'slimeoverhaul:earth_slime_ball', 1, 20*5);
    event.blasting('slimeoverhaul:flame_slime_ball', 'slimeoverhaul:earth_slime_ball', 1, 20*2);
    event.smoking('slimeoverhaul:flame_slime_ball', 'slimeoverhaul:earth_slime_ball', 1, 20*4);
    event.campfireCooking('slimeoverhaul:flame_slime_ball', 'slimeoverhaul:earth_slime_ball', 1, 20*10);

    //atm系列燃烧
    event.smelting('allthemodium:vibranium_allthemodium_alloy_ingot','allthemodium:vibranium_allthemodium_alloy_dust',10,20*20);
    event.smelting('allthemodium:unobtainium_allthemodium_alloy_ingot','allthemodium:unobtainium_allthemodium_alloy_dust',10,20*20);
    event.smelting('allthemodium:unobtainium_vibranium_alloy_ingot','allthemodium:unobtainium_vibranium_alloy_dust',10,20*20);

    //下界精华
    event.smelting('mysticalagriculture:nether_essence', 'mysticalagriculture:stone_essence', 1, 20*5);
    //砂岩→圆石
    event.smoking('notreepunching:stone_loose_rock','notreepunching:sandstone_loose_rock',1,20*2);
    event.smoking('minecraft:cobblestone','minecraft:sandstone',4,20*8);
    
    //压缩粉碎
    event.shapeless(Item.of('createsifter:crushed_netherrack_1x', 1),Item.of('createsifter:crushed_netherrack',9));
    event.shapeless(Item.of('createsifter:crushed_blackstone_1x', 1),Item.of('createsifter:crushed_blackstone',9));
    event.shapeless(Item.of('createsifter:crushed_deepslate_1x', 1),Item.of('createsifter:crushed_deepslate',9));
    event.shapeless(Item.of('createsifter:crushed_end_stone_1x', 1),Item.of('createsifter:crushed_end_stone',9));
    event.shapeless(Item.of('createsifter:dust_1x', 1),Item.of('createsifter:dust',9));
    event.shapeless(Item.of('createsifter:crushed_netherrack', 9),Item.of('createsifter:crushed_netherrack_1x'));
    event.shapeless(Item.of('createsifter:crushed_blackstone', 9),Item.of('createsifter:crushed_blackstone_1x'));
    event.shapeless(Item.of('createsifter:crushed_deepslate', 9),Item.of('createsifter:crushed_deepslate_1x'));
    event.shapeless(Item.of('createsifter:crushed_end_stone', 9),Item.of('createsifter:crushed_end_stone_1x'));
    event.shapeless(Item.of('createsifter:dust', 9),Item.of('createsifter:dust_1x'));

    event.shaped(Item.of('materialfactory:ash_furnace', 1),
        [
        'AAA',
        'ABA',
        'AAA'
        ],
        {
        A:'supplementaries:ash_bricks',
        B:'minecraft:furnace',
    });

    //木板
    event.shaped(Item.of('minecraft:oak_planks', 1),
            [
            'AA',
            'AA'
            ],
            {
            A:'minecraft:stick',
    });

    //橡树树苗
    event.shaped(Item.of('minecraft:oak_sapling', 1),
            [
            'B',
            'A'
            ],
            {
            A:'minecraft:dead_bush',
            B:'minecraft:oak_leaves'
    });

    //石制工具
    event.shaped(Item.of('minecraft:stone_sword', 1),
            [
            ' A ',
            ' A ',
            'CBC'
            ],
            {
            A:'minecraft:cobblestone',
            B:'minecraft:stick',
            C:'#bookshelf:strings'
    });

    event.shaped(Item.of('minecraft:stone_pickaxe', 1),
            [
            'AAA',
            'CBC',
            ' B '
            ],
            {
            A:'minecraft:cobblestone',
            B:'minecraft:stick',
            C:'#bookshelf:strings'
    });

    event.shaped(Item.of('minecraft:stone_axe', 1),
            [
            'AAC',
            'ABC',
            ' B '
            ],
            {
            A:'minecraft:cobblestone',
            B:'minecraft:stick',
            C:'#bookshelf:strings'
    });

    event.shaped(Item.of('minecraft:stone_shovel', 1),
            [
            ' A ',
            'CBC',
            ' B '
            ],
            {
            A:'minecraft:cobblestone',
            B:'minecraft:stick',
            C:'#bookshelf:strings'
    });

    event.shaped(Item.of('minecraft:stone_hoe', 1),
            [
            'AA ',
            'CB ',
            ' B '
            ],
            {
            A:'minecraft:cobblestone',
            B:'minecraft:stick',
            C:'#bookshelf:strings'
    });

    //木制工具
    event.shaped(Item.of('minecraft:wooden_sword', 1),
            [
            ' A ',
            ' A ',
            'CBC'
            ],
            {
            A:'#minecraft:planks',
            B:'minecraft:stick',
            C:'#bookshelf:strings'
    });

    event.shaped(Item.of('minecraft:wooden_pickaxe', 1),
            [
            'AAA',
            'CBC',
            ' B '
            ],
            {
            A:'#minecraft:planks',
            B:'minecraft:stick',
            C:'#bookshelf:strings'
    });

    event.shaped(Item.of('minecraft:wooden_axe', 1),
            [
            'AAC',
            'ABC',
            ' B '
            ],
            {
            A:'#minecraft:planks',
            B:'minecraft:stick',
            C:'#bookshelf:strings'
    });

    event.shaped(Item.of('minecraft:wooden_shovel', 1),
            [
            ' A ',
            'CBC',
            ' B '
            ],
            {
            A:'#minecraft:planks',
            B:'minecraft:stick',
            C:'#bookshelf:strings'
    });

    event.shaped(Item.of('minecraft:wooden_hoe', 1),
            [
            'AA ',
            'CB ',
            ' B '
            ],
            {
            A:'#minecraft:planks',
            B:'minecraft:stick',
            C:'#bookshelf:strings'
    });

    //亚麻种子
    event.shaped(Item.of('thermal:flax_seeds', 1),['actuallyadditions:flax_seeds']);
    event.shaped(Item.of('actuallyadditions:flax_seeds', 1),['supplementaries:flax_seeds']);
    event.shaped(Item.of('supplementaries:flax_seeds', 1),['thermal:flax_seeds']);

    //煤粉
    event.shapeless(Item.of('mekanism:dust_coal', 1),['#alltheores:ore_hammers','#minecraft:coals']);

    //粗硅岩粉
    event.shapeless(Item.of('mekanism_extras:dust_naquadah', 2),['#alltheores:ore_hammers','mekanism_extras:raw_naquadah']);

    //初学者法术书
    event.shapeless(Item.of('ars_nouveau:novice_spell_book', 1), ['minecraft:book','ars_nouveau:source_gem']);

    //橡胶树苗
   // event.shapeless(Item.of('industrialupgrade:sapling/rubber_sapling', 1),['thermal:rubberwood_sapling']);
    //event.shapeless(Item.of('thermal:rubberwood_sapling', 1),['industrialupgrade:sapling/rubber_sapling']);

    //造石机
    event.remove({id:'thermal:device_rock_gen'});
    event.shaped(Item.of('thermal:device_rock_gen', 1),
        [
        'AAA',
        'DEF',
        'BBB'
        ],
        {
        A:'minecraft:polished_andesite',
        B:'minecraft:calcite',
        D:'minecraft:water_bucket',
        E:'industrialforegoing:machine_frame_pity',
        F:'minecraft:lava_bucket'
    });
    
    //模板
    event.shaped(Item.of('allthemodium:allthemodium_upgrade_smithing_template', 1),
        [
        'AAA',
        'AEA',
        'AAA'
        ],
        {
        A:'allthemodium:allthemodium_ingot',
        E:'minecraft:netherite_upgrade_smithing_template'
    });
    event.shaped(Item.of('allthemodium:vibranium_upgrade_smithing_template', 1),
        [
        'AAA',
        'AEA',
        'AAA'
        ],
        {
        A:'allthemodium:vibranium_ingot',
        E:'allthemodium:allthemodium_upgrade_smithing_template'
    });
    event.shaped(Item.of('allthemodium:unobtainium_upgrade_smithing_template', 1),
        [
        'AAA',
        'AEA',
        'AAA'
        ],
        {
        A:'allthemodium:unobtainium_ingot',
        E:'allthemodium:vibranium_upgrade_smithing_template'
    });

    //荧石粉
    event.shaped(Item.of('minecraft:glowstone_dust', 1),
        [
        ' A ',
        'ABA',
        ' A '
        ],
        {
        A:'#minecraft:coals',
        B:'slimeoverhaul:flame_slime_ball',
    });

    //仙人掌三明治
    event.shaped(Item.of('materialfactory:cactus_sandwich', 1),
        [
        'AB',
        'BA'
        ],
        {
        A:'minecraft:sand',
        B:'minecraft:cactus',
    });

    event.shaped(Item.of('materialfactory:cactus_sandwich', 2),
        [
        'AAA',
        'BBB',
        'AAA'
        ],
        {
        A:'minecraft:sand',
        B:'minecraft:cactus',
    });

    //基座
    event.shaped(Item.of('irons_spellbooks:pedestal', 1),
        [
        'AAA',
        ' E ',
        'AAA'
        ],
        {
        A:'minecraft:polished_andesite_slab',
        E:'minecraft:polished_andesite'
    });

    //氧气罐
    event.shaped(Item.of('ad_astra:gas_tank', 1),
        [
        ' C ',
        'ABA',
        'ABA'
        ],
        {
        A:'#forge:plates/steel',
        B:'mekanism:ultimate_fluid_tank',
        C:'#forge:rods/steel'
    });

    //锻造模板
    event.shaped(Item.of('minecraft:sentry_armor_trim_smithing_template', 1),
        [
        'AAA',
        'ABA',
        'AAA'
        ],
        {
        A:'minecraft:diamond',
        B:'minecraft:emerald'
    });

    event.shaped(Item.of('minecraft:dune_armor_trim_smithing_template', 1),
        [
        'AAA',
        'ABA',
        'AAA'
        ],
        {
        A:'minecraft:diamond',
        B:'minecraft:sandstone'
    });

    event.shaped(Item.of('minecraft:coast_armor_trim_smithing_template', 1),
        [
        'AAA',
        'ABA',
        'AAA'
        ],
        {
        A:'minecraft:diamond',
        B:'minecraft:prismarine'
    });

    event.shaped(Item.of('minecraft:wild_armor_trim_smithing_template', 1),
        [
        'AAA',
        'ABA',
        'AAA'
        ],
        {
        A:'minecraft:diamond',
        B:'minecraft:moss_block'
    });

    event.shaped(Item.of('minecraft:ward_armor_trim_smithing_template', 1),
        [
        'AAA',
        'ABA',
        'AAA'
        ],
        {
        A:'minecraft:diamond',
        B:'minecraft:sculk'
    });

    event.shaped(Item.of('minecraft:eye_armor_trim_smithing_template', 1),
        [
        'AAA',
        'ABA',
        'AAA'
        ],
        {
        A:'minecraft:diamond',
        B:'minecraft:bookshelf'
    });

    event.shaped(Item.of('minecraft:vex_armor_trim_smithing_template', 1),
        [
        'AAA',
        'ABA',
        'AAA'
        ],
        {
        A:'minecraft:diamond',
        B:'minecraft:totem_of_undying'
    });

    event.shaped(Item.of('minecraft:tide_armor_trim_smithing_template', 1),
        [
        'AAA',
        'ABA',
        'AAA'
        ],
        {
        A:'minecraft:diamond',
        B:'minecraft:prismarine_bricks'
    });

    event.shaped(Item.of('minecraft:snout_armor_trim_smithing_template', 1),
        [
        'AAA',
        'ABA',
        'AAA'
        ],
        {
        A:'minecraft:diamond',
        B:'minecraft:gold_block'
    });

    event.shaped(Item.of('minecraft:rib_armor_trim_smithing_template', 1),
        [
        'AAA',
        'ABA',
        'AAA'
        ],
        {
        A:'minecraft:diamond',
        B:'minecraft:nether_bricks'
    });

    event.shaped(Item.of('minecraft:spire_armor_trim_smithing_template', 1),
        [
        'AAA',
        'ABA',
        'AAA'
        ],
        {
        A:'minecraft:diamond',
        B:'minecraft:purpur_block'
    });

    event.shaped(Item.of('minecraft:silence_armor_trim_smithing_template', 1),
        [
        'AAA',
        'ABA',
        'AAA'
        ],
        {
        A:'minecraft:diamond',
        B:'minecraft:sculk_catalyst'
    });

    event.shaped(Item.of('minecraft:wayfinder_armor_trim_smithing_template', 1),
        [
        'AAA',
        'ABA',
        'AAA'
        ],
        {
        A:'minecraft:diamond',
        B:'minecraft:terracotta'
    });

    event.shaped(Item.of('minecraft:shaper_armor_trim_smithing_template', 1),
        [
        'AAA',
        'ABA',
        'AAA'
        ],
        {
        A:'minecraft:diamond',
        B:'minecraft:white_terracotta'
    });

    event.shaped(Item.of('minecraft:raiser_armor_trim_smithing_template', 1),
        [
        'AAA',
        'ABA',
        'AAA'
        ],
        {
        A:'minecraft:diamond',
        B:'minecraft:light_gray_terracotta'
    });

    event.shaped(Item.of('minecraft:host_armor_trim_smithing_template', 1),
        [
        'AAA',
        'ABA',
        'AAA'
        ],
        {
        A:'minecraft:diamond',
        B:'minecraft:gray_terracotta'
    });

    event.shaped(Item.of('minecraft:crafting_table', 1),
        [
        ' A ',
        'A A',
        ' A '
        ],
        {
        A:'#minecraft:planks'
    });

    //优质土壤
    event.shaped(Item.of('materialfactory:better_soil', 1),
        [
        "ABC",
        "DEF",
        "GHI"
        ],
        {
    "A": "slimeoverhaul:flame_slime_block",
    "B": "minecraft:slime_block",
    "C": "slimeoverhaul:air_slime_block",
    "D": "slimeoverhaul:earth_slime_block",
    "E": "allthecompressed:dirt_6x",
    "F": "slimeoverhaul:water_slime_block",
    "G": "allthecompressed:allthemodium_block_1x",
    "H": "allthecompressed:vibranium_block_1x",
    "I": "allthecompressed:unobtainium_block_1x"
    })
/*
    event.shaped(Item.of('mm:umfe_controller', 1),
        [
        "ABA",
        "ACA",
        "ADA"
    ],
    {
    "A": "mysticalagriculture:soulstone_smooth",
    "B": "mekanism:ultimate_control_circuit",
    "C": "ae2:controller",
    "D": "ae2:logic_processor"
    });

    event.shaped(Item.of('mm:umfe_energyports_input', 1),
        [
        "ABA",
        "ACA",
        "ADA"
        ],
        {
    "A": "mysticalagriculture:soulstone_smooth",
    "B": 'powah:energy_discharger_basic',
    "C": "mekanism:ultimate_energy_cube",
    "D": "ae2:fluix_smart_cable"
    });

    event.shaped(Item.of('mm:umfe_energyports_output', 1),
        [
        "ADA",
        "ACA",
        "ABA"
        ],
        {
    "A": "mysticalagriculture:soulstone_smooth",
    "B": 'powah:energy_discharger_basic',
    "C": "mekanism:ultimate_energy_cube",
    "D": "ae2:fluix_smart_cable"
    });

    event.shapeless(Item.of('mm:umfe_energyports_output', 1),['mm:umfe_energyports_input']);
    event.shapeless(Item.of('mm:umfe_energyports_input', 1),['mm:umfe_energyports_output']);

    event.shaped(Item.of('mm:umfe_fluidports_input', 1),
        [
        "ABA",
        "ACA",
        "ADA"
        ],
        {
    "A": "mysticalagriculture:soulstone_smooth",
    "B": 'utilitarian:fluid_hopper',
    "C": 'mekanism:ultimate_fluid_tank',
    "D": 'enderio:pressurized_fluid_tank'
    });

    event.shaped(Item.of('mm:umfe_fluidports_output', 1),
        [
        "ADA",
        "ACA",
        "ABA"
        ],
        {
    "A": "mysticalagriculture:soulstone_smooth",
    "B": 'utilitarian:fluid_hopper',
    "C": 'mekanism:ultimate_fluid_tank',
    "D": 'enderio:pressurized_fluid_tank'
    });

    event.shapeless(Item.of('mm:umfe_fluidports_output', 1),['mm:umfe_fluidports_input']);
    event.shapeless(Item.of('mm:umfe_fluidports_input', 1),['mm:umfe_fluidports_output']);

    event.shaped(Item.of('mm:umfe_itemports_input', 1),
        [
        "ABA",
        "ACA",
        "ADA"
        ],
        {
    "A": "mysticalagriculture:soulstone_smooth",
    "B": 'actuallyadditions:hopping_item_interface',
    "C": 'enderio:vacuum_chest',
    "D": 'integratedtunnels:part_interface_item'
    });

    event.shaped(Item.of('mm:umfe_itemports_output', 1),
        [
        "ADA",
        "ACA",
        "ABA"
        ],
        {
    "A": "mysticalagriculture:soulstone_smooth",
    "B": 'actuallyadditions:hopping_item_interface',
    "C": 'enderio:vacuum_chest',
    "D": 'integratedtunnels:part_interface_item'
    });
*/
    /*event.shaped(Item.of('industrialupgrade:blockspace3/pluto_boron', 1),
            [
            'AA',
            'AA'
            ],
            {
            A:'exdeorum:boron_ore_chunk',
    });

    event.shaped(Item.of('industrialupgrade:blockspace/callisto_lithium_ore', 1),
            [
            'AA',
            'AA'
            ],
            {
            A:'exdeorum:lithium_ore_chunk',
    });

    event.shaped(Item.of('industrialupgrade:baseore/magnesium', 1),
            [
            'AA',
            'AA'
            ],
            {
            A:'exdeorum:magnesium_ore_chunk',
    });

    event.shaped(Item.of('industrialupgrade:thorium_ore/thorium_ore', 1),
            [
            'AA',
            'AA'
            ],
            {
            A:'exdeorum:thorium_ore_chunk',
    });*/

    event.shaped(Item.of('cold_sweat:soulspring_lamp', 1),
            [
            ' A ',
            'BCB',
            ' D '
            ],
            {
            A:'#forge:nuggets/gold',
            B:'#forge:ingots/iron',
            C:'cookingforblockheads:ice_unit',
            D:'minecraft:chain'
    });

    event.shaped(Item.of('minecraft:campfire', 1),
            [
            ' A ',
            'ACA',
            'BBB'
            ],
            {
            A:'minecraft:stick',
            B:'#minecraft:logs',
            C:'#minecraft:coals'
    });

    event.shaped(Item.of('minecraft:soul_campfire', 1),
            [
            ' A ',
            'ACA',
            'BBB'
            ],
            {
            A:'minecraft:stick',
            B:'#minecraft:logs',
            C:'#minecraft:soul_fire_base_blocks'
    });

    event.shaped(Item.of('enderio:enderman_head', 1),
            [
            'BBB',
            'BAB',
            'BBB'
            ],
            {
            A:'mysticalagriculture:blank_skull',
            B:'mysticalagriculture:enderman_essence'
    });

    //筛网
    event.shaped(Item.of('createsifter:string_mesh', 1),
            [
            'BAB',
            'AAA',
            'BAB'
            ],
            {
            A:'#forge:string',
            B:'minecraft:stick',
    }).id('createsifter:string_mesh');

    event.shaped(Item.of('createsifter:andesite_mesh', 1),
            [
            'BAB',
            'ACA',
            'BAB'
            ],
            {
            A:'create:andesite_alloy',
            B:'minecraft:stick',
            C:'createsifter:string_mesh'
    }).id('createsifter:andesite_mesh');

    event.shaped(Item.of('createsifter:zinc_mesh', 1),
            [
            'BAB',
            'ACA',
            'BAB'
            ],
            {
            A:'#forge:ingots/zinc',
            B:'minecraft:stick',
            C:'createsifter:andesite_mesh'
    }).id('createsifter:zinc_mesh');

    event.shaped(Item.of('createsifter:brass_mesh', 1),
            [
            'BAB',
            'ACA',
            'BAB'
            ],
            {
            A:'#forge:ingots/brass',
            B:'minecraft:stick',
            C:'createsifter:zinc_mesh'
    }).id('createsifter:brass_mesh');

    event.shaped(Item.of('createsifter:diamond_mesh', 1),
            [
            'BAB',
            'ACA',
            'BAB'
            ],
            {
            A:'#forge:gems/diamond',
            B:'minecraft:stick',
            C:'createsifter:brass_mesh'
    }).id('createsifter:diamond_mesh');

    event.shaped(Item.of('createsifter:advanced_diamond_mesh', 1),
            [
            ' A ',
            'ABA',
            ' A '
            ],
            {
            A:'#forge:plates/iron',
            B:'createsifter:diamond_mesh',
    }).id('createsifter:advanced_diamond_mesh');

    event.shaped(Item.of('createsifter:netherite_mesh', 1),
            [
            'BAB',
            'ACA',
            'BAB'
            ],
            {
            A:'#forge:ingots/netherite',
            B:'minecraft:stick',
            C:'createsifter:diamond_mesh'
    }).id('createsifter:netherite_mesh');

    event.shaped(Item.of('createsifter:advanced_netherite_mesh', 1),
            [
            ' A ',
            'ABA',
            ' A '
            ],
            {
            A:'#forge:plates/iron',
            B:'createsifter:netherite_mesh',
    }).id('createsifter:advanced_netherite_mesh');

    //苔藓块
    event.shaped(Item.of('minecraft:moss_block', 1),
            [
            'AA',
            'AA'
            ],
            {
            A:'#forge:seeds',
    });

    //灵魂沙
    event.shaped(Item.of('minecraft:soul_sand', 8),
            [
            'AAA',
            'ABA',
            'AAA'
            ],
            {
            A:'#forge:sand',
            B:'mysticalagriculture:nether_essence'
    });

    //木剪刀
    event.shaped(Item.of('materialfactory:wooden_shears', 1),
            [
            ' A',
            'A '
            ],
            {
            A:'#minecraft:planks'
    }).id('materialfactory:wooden_shears')

    //未粘合的缺陷机器框架
    event.shaped(Item.of('materialfactory:unbonded_machine_frame_pity', 1),
            [
            'ABA',
            'BCB',
            'ABA'
            ],
            {
            A:'#minecraft:logs',
            B:'minecraft:iron_ingot',
            C:'minecraft:redstone_block'
    }).id('industrialforegoing:machine_frame_pity')

    //灵魂协调涂料
    event.shaped(Item.of('materialfactory:soul_attuned_dye_blend', 1),
            [
            'ABD',
            'BCB',
            'DBA'
            ],
            {
            A:'enderio:soul_powder',
            B:'#forge:dusts/quartz',
            C:'enderio:organic_black_dye',
            D:'enderio:organic_brown_dye'
    }).id('materialfactory:soul_attuned_dye_blend')

    //工业机器涂料
    event.shaped(Item.of('materialfactory:industrial_dye_blend', 1),
            [
            'ABD',
            'BCB',
            'DBA'
            ],
            {
            A:'#forge:dusts/lapis',
            B:'#forge:dusts/quartz',
            C:'enderio:organic_black_dye',
            D:'enderio:organic_green_dye'
    }).id('materialfactory:industrial_dye_blend')

    //简易机器框架
    event.shaped(Item.of('materialfactory:simple_machine_chassis', 1),
            [
            'ABA',
            'BCB',
            'ABA'
            ],
            {
            A:'minecraft:iron_bars',
            B:'minecraft:iron_ingot',
            C:'enderio:grains_of_infinity'
    }).id('materialfactory:simple_machine_chassis')

    //原始合金炉
    event.shaped(Item.of('enderio:primitive_alloy_smelter', 1),
            [
            'AAA',
            'BCB',
            'DED'
            ],
            {
            A:'minecraft:iron_ingot',
            B:'minecraft:furnace',
            C:'materialfactory:simple_machine_chassis',
            D:'#forge:gears/stone',
            E:'minecraft:bucket'
    }).id('enderio:primitive_alloy_smelter')

    //黄铜传动杆箱
    event.shapeless(Item.of('materialfactory:brass_encased_shaft', 1),['create:brass_casing','create:shaft']);

    event.remove({mod:'capsule'});
    event.remove({id:'allthemodium:teleport_pad'});
    event.remove({id:'tiab:time_in_a_bottle'});
    event.remove({id:'ars_nouveau:imbuement_lapis'});
    event.remove({id:'ars_nouveau:imbuement_amethyst'});
    event.remove({id:'ars_nouveau:novice_spell_book'});
    event.remove({id:'ars_nouveau:sourcestone'});
    event.remove({id:'ars_nouveau:imbuement_chamber'});
    event.remove({id:'ars_nouveau:enchanting_apparatus'});
    event.remove({id:'ars_nouveau:arcane_core'});
    event.remove({id:'ars_nouveau:ritual_brazier'});
    event.remove({id:'ifeu:rule_controller'});
    event.remove({id:'industrialforegoingsouls:soul_laser_base'});
    event.remove({id:'industrialforegoingsouls:soul_network_pipe'});
    event.remove({id:'industrialforegoingsouls:soul_surge'});
    event.remove({id:'mekanism:steel_casing'});
    event.remove({id:'thermal:machine_frame'});
    event.remove({id:'thermal:rf_coil'});
    event.remove({id:'darkdoppelganger:shadow_orb'});
    event.remove({id:'ad_astra:compressor'});
    event.remove({id:'thermal:machines/press/press_desh_ingot_to_plate'});
    event.remove({id:'thermal:machines/press/press_ostrum_ingot_to_plate'});
    event.remove({id:'thermal:machines/press/press_calorite_ingot_to_plate'});
    event.remove({id:'ad_astra:gas_tank'});
    event.remove({id:'tinkerscalibration:tools/materials/alumite'});
    event.remove({id:'ad_astra_rocketed:nasa_workbench/default/tier_7_rocket_from_nasa_workbench'});
    event.remove({id:'minecraft:sandstone'});
    event.remove({id:'minecraft:crafting_table'});
    event.remove({id:'tconstruct:common/flint'});
    event.remove({id:'functionalstorage:oak_drawer_alternate_x1'});
    event.remove({id:'industrialforegoing:gold_gear'});
    event.remove({id:'industrialforegoing:diamond_gear'});
    event.remove({id:'industrialforegoing:iron_gear'});
    event.remove({id:'enderio:iron_gear'});
    event.remove({id:"cold_sweat:soulspring_lamp"});
    event.remove({id:"create:pressing/calorite_ingot"});
    event.remove({id:"create:pressing/desh_ingot"});
    event.remove({id:"create:pressing/ostrum_ingot"});
    event.remove({id:"createsifter:sifting/soul_sand_brass_mesh"});
    event.remove({id:"createsifter:sifting/sand_brass_mesh"});
    event.remove({id:"createsifter:sifting/sand_andesite_mesh"});
    event.remove({id:"createsifter:sifting/gravel_zinc_mesh"});
    event.remove({id:"createsifter:sifting/gravel_advanced_brass_mesh"});
    event.remove({id:"createsifter:sifting/soul_sand_advanced_brass_mesh"});
    event.remove({id:"createsifter:sifting/gravel_brass_mesh"});
    event.remove({id:"createsifter:sifting/sand_zinc_mesh"});
    event.remove({id:"createsifter:sifting/gravel_andesite_mesh"});
    event.remove({id:"createsifter:sifting/sand_string_mesh"});
    event.remove({id:"create:haunting/infested_stone"});
    event.remove({id:"bhc:god_apple"});
    event.remove({id:'allthemodium:allthemodium_sword'});
    event.remove({id:'allthemodium:allthemodium_pickaxe'});
    event.remove({id:'allthemodium:allthemodium_axe'});
    event.remove({id:'allthemodium:allthemodium_shovel'});
    event.remove({id:'allthemodium:allthemodium_hoe'});
    event.remove({id:'actuallyadditions:decompress/empowered_restonia_crystal'})
    event.remove({id:'avaritia:eio_creative_power'})
})