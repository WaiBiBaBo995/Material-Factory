ServerEvents.recipes((event) => {
    const { create } = event.recipes
    //研磨
    create.milling(Item.of("createsifter:dust", 1), ['#forge:sand'])
    create.milling(Item.of("createsifter:dust_1x", 1), ['allthecompressed:sand_1x'])
    create.milling(Item.of("createsifter:dust_1x", 1), ['allthecompressed:red_sand_1x'])
    create.milling(Item.of('createsifter:crushed_end_stone', 1), ['#forge:end_stones'])
    create.milling(Item.of('createsifter:crushed_end_stone_1x', 1), ['allthecompressed:end_stone_1x'])
    create.milling(Item.of('createsifter:crushed_deepslate', 1), ['#forge:deepslate'])
    create.milling(Item.of('createsifter:crushed_deepslate_1x', 1), ['allthecompressed:deepslate_1x'])
    create.milling(Item.of('createsifter:crushed_deepslate_1x', 1), ['allthecompressed:cobbled_deepslate_1x'])
    create.milling(Item.of("createsifter:crushed_netherrack", 1), ['#forge:netherrack'])
    create.milling(Item.of("createsifter:crushed_netherrack_1x", 1), ['allthecompressed:netherrack_1x'])
    create.milling(Item.of('createsifter:crushed_blackstone', 1), ['#forge:blackstone'])
    create.milling(Item.of('createsifter:crushed_blackstone_1x', 1), ['allthecompressed:blackstone_1x'])
    create.milling(Item.of('mysticalagriculture:stone_essence', 1), ['#notreepunching:loose_rocks'])
    create.milling(Item.of('allthecompressed:gravel_1x', 1), ['allthecompressed:cobblestone_1x'])
    create.milling(Item.of('allthecompressed:sand_1x', 1), ['allthecompressed:gravel_1x'])
    create.milling(Item.of('materialfactory:crushed_capacitor'), ['createaddition:capacitor'])

    //砂纸
    create.sandpaper_polishing('minecraft:sculk_vein', ['minecraft:echo_shard'])
    create.sandpaper_polishing(Item.of('mysticalagriculture:stone_essence').withChance(0.1), ['#notreepunching:loose_rocks'])
    create.sandpaper_polishing('minecraft:emerald', ['thermal:emerald_dust'])
    create.sandpaper_polishing('minecraft:diamond', ['alltheores:diamond_dust'])
    create.sandpaper_polishing('mekanism:fluorite_gem', ['mekanism:dust_fluorite'])
    create.sandpaper_polishing('mysticalagriculture:dirt_essence','slimeoverhaul:earth_slime_ball')
    create.sandpaper_polishing('mysticalagriculture:fire_essence','slimeoverhaul:flame_slime_ball')

    //机械手
    create.item_application('minecraft:snow_block',['minecraft:moss_block','thermal:frost_melon_slice'])
    create.item_application('materialfactory:starter',['minecraft:furnace','create:andesite_casing'])
    create.item_application('materialfactory:starter_core',['create:fluid_pipe','create:shaft'])

    //粉碎轮
    create.crushing(['createsifter:crushed_netherrack',Item.of('create:cinder_flour').withChance(0.5)], 'minecraft:netherrack').processingTime(250).id("create:crushing/netherrack")

    //冲压
    create.pressing('#forge:gems/diamond', '#forge:dusts/diamond')
    create.pressing('#forge:gems/emerald', '#forge:dusts/emerald')

    //混合搅拌
    create.mixing(Item.of('materialfactory:base_crystal_cluster', 4), [Fluid.of("industrialforegoing:latex", 1000),'16x allthecompressed:cobblestone_1x'])
    create.mixing(Item.of('materialfactory:base_crystal_cluster', 8), [Fluid.of("industrialforegoing:latex", 1500),'32x allthecompressed:cobblestone_1x']).heated()
    create.mixing(Item.of('materialfactory:base_crystal_cluster', 16), [Fluid.of("industrialforegoing:latex", 2000),'64x allthecompressed:cobblestone_1x']).superheated()
    create.mixing(['enderio:powdered_cobalt'], [Fluid.of("minecraft:water", 250),'minecraft:flint','minecraft:moss_block'])
    create.mixing(['enderio:powdered_cobalt',Item.of('enderio:powdered_cobalt').withChance(0.2)], [Fluid.of("minecraft:water", 250),'#mekanism:dirty_dusts/cobalt'])
    create.mixing(['alltheores:silver_dust',Item.of('alltheores:silver_dust').withChance(0.2)], [Fluid.of("minecraft:water", 250),'#mekanism:dirty_dusts/silver'])
    create.mixing(['alltheores:nickel_dust',Item.of('alltheores:nickel_dust').withChance(0.2)], [Fluid.of("minecraft:water", 250),'#mekanism:dirty_dusts/nickel'])
    create.mixing(['alltheores:iridium_dust',Item.of('alltheores:iridium_dust').withChance(0.2)], [Fluid.of("minecraft:water", 250),'#mekanism:dirty_dusts/iridium'])
    create.mixing(['alltheores:platinum_dust',Item.of('alltheores:platinum_dust').withChance(0.2)], [Fluid.of("minecraft:water", 250),'#mekanism:dirty_dusts/platinum'])
    create.mixing(['thermal:cinnabar_dust',Item.of('thermal:cinnabar_dust').withChance(0.2)], [Fluid.of("minecraft:water", 250),'#mekanism:dirty_dusts/cinnabar'])
    create.mixing(['thermal:sulfur_dust',Item.of('thermal:sulfur_dust').withChance(0.2)], [Fluid.of("minecraft:water", 250),'#mekanism:dirty_dusts/sulfur'])
    create.mixing(['thermal:apatite_dust',Item.of('thermal:apatite_dust').withChance(0.2)], [Fluid.of("minecraft:water", 250),'#mekanism:dirty_dusts/apatite'])
    create.mixing(['alltheores:aluminum_dust',Item.of('alltheores:aluminum_dust').withChance(0.2)], [Fluid.of("minecraft:water", 250),'#mekanism:dirty_dusts/aluminum'])
    create.mixing(['alltheores:zinc_dust',Item.of('alltheores:zinc_dust').withChance(0.2)], [Fluid.of("minecraft:water", 250),'#mekanism:dirty_dusts/zinc'])
    create.mixing(['thermal:emerald_dust',Item.of('thermal:emerald_dust').withChance(0.2)], [Fluid.of("minecraft:water", 250),'#mekanism:dirty_dusts/emerald'])
    create.mixing(['alltheores:diamond_dust',Item.of('alltheores:diamond_dust').withChance(0.2)], [Fluid.of("minecraft:water", 250),'#mekanism:dirty_dusts/diamond'])
    create.mixing(['minecraft:netherite_scrap',Item.of('minecraft:netherite_scrap').withChance(0.2)], [Fluid.of("minecraft:water", 250),'mekanism:dirty_netherite_scrap'])
    create.mixing(['alltheores:iron_dust',Item.of('alltheores:iron_dust').withChance(0.2)], [Fluid.of("minecraft:water", 250),'#mekanism:dirty_dusts/iron'])
    create.mixing(['alltheores:gold_dust',Item.of('alltheores:gold_dust').withChance(0.2)], [Fluid.of("minecraft:water", 250),'#mekanism:dirty_dusts/gold'])
    create.mixing(['alltheores:copper_dust',Item.of('alltheores:copper_dust').withChance(0.2)], [Fluid.of("minecraft:water", 250),'#mekanism:dirty_dusts/copper'])
    create.mixing(['alltheores:lead_dust',Item.of('alltheores:lead_dust').withChance(0.2)], [Fluid.of("minecraft:water", 250),'#mekanism:dirty_dusts/lead'])
    create.mixing(['alltheores:osmium_dust',Item.of('alltheores:osmium_dust').withChance(0.2)], [Fluid.of("minecraft:water", 250),'#mekanism:dirty_dusts/osmium'])
    create.mixing(['alltheores:tin_dust',Item.of('alltheores:tin_dust').withChance(0.2)], [Fluid.of("minecraft:water", 250),'#mekanism:dirty_dusts/tin'])
    create.mixing(['alltheores:uranium_dust',Item.of('alltheores:uranium_dust').withChance(0.2)], [Fluid.of("minecraft:water", 250),'#mekanism:dirty_dusts/uranium'])

    //批量洗涤
    create.splashing('enderio:powdered_cobalt', '#mekanism:dirty_dusts/cobalt');
    create.splashing('alltheores:silver_dust', '#mekanism:dirty_dusts/silver');
    create.splashing('alltheores:nickel_dust', '#mekanism:dirty_dusts/nickel');
    create.splashing('alltheores:iridium_dust', '#mekanism:dirty_dusts/iridium');
    create.splashing('alltheores:platinum_dust', '#mekanism:dirty_dusts/platinum');
    create.splashing('thermal:cinnabar_dust', '#mekanism:dirty_dusts/cinnabar');
    create.splashing('thermal:sulfur_dust', '#mekanism:dirty_dusts/sulfur');
    create.splashing('thermal:apatite_dust', '#mekanism:dirty_dusts/apatite');
    create.splashing('alltheores:aluminum_dust', '#mekanism:dirty_dusts/aluminum');
    create.splashing('alltheores:zinc_dust', '#mekanism:dirty_dusts/zinc');
    create.splashing('thermal:emerald_dust', '#mekanism:dirty_dusts/emerald');
    create.splashing('alltheores:diamond_dust', '#mekanism:dirty_dusts/diamond');
    create.splashing('minecraft:netherite_scrap', 'mekanism:dirty_netherite_scrap')
    create.splashing('slimeoverhaul:water_slime_ball','slimeoverhaul:earth_slime_ball')

    //批量缠魂
    create.haunting(Item.of("minecraft:end_stone"),["minecraft:stone"])

    //序列组装
    let incomplete = 'allthemodium:incomplete_vibranium_allthemodium_alloy_dust'
    create.sequenced_assembly([
        'allthemodium:dirty_vibranium_allthemodium_alloy_dust'
    ], 'allthemodium:vibranium_dust', [
        create.deploying(incomplete, [incomplete, 'allthemodium:allthemodium_dust']),
        create.filling(incomplete, [incomplete, Fluid.of("allthemodium:molten_allthemodium", 100)]),
        create.pressing(incomplete, incomplete),
    ]).transitionalItem(incomplete).loops(1)

    //动力合成器
    create.mechanical_crafting('materialfactory:brass_item_input', [
        "AABAA",
        "ACDCA",
        "AEFGA",
        "ACHCA",
        "AAIAA"
    ], {
        A: "alltheores:brass_plate",
        B: "create:smart_chute",
        C: "create:precision_mechanism",
        D: "tconstruct:scorched_chute",
        E: "createaddition:capacitor",
        F: "create:item_vault",
        G: "create:electron_tube",
        H: "actuallyadditions:phantom_itemface",
        I: "actuallyadditions:hopping_item_interface"
    })
    create.mechanical_crafting('materialfactory:brass_item_output', [
        "AAIAA",
        "ACDCA",
        "AEFGA",
        "ACHCA",
        "AABAA"
    ], {
        A: "alltheores:brass_plate",
        B: "create:smart_chute",
        C: "create:precision_mechanism",
        D: "tconstruct:scorched_chute",
        E: "createaddition:capacitor",
        F: "create:item_vault",
        G: "create:electron_tube",
        H: "actuallyadditions:phantom_itemface",
        I: "actuallyadditions:hopping_item_interface"
    })
    create.mechanical_crafting('materialfactory:brass_fluid_input', [
        "AABAA",
        "ACDCA",
        "AEFGA",
        "ACHCA",
        "AAIAA"
    ], {
        A: "alltheores:brass_plate",
        B: "create:fluid_valve",
        C: "create:precision_mechanism",
        D: "tconstruct:scorched_drain",
        E: "createaddition:capacitor",
        F: "create:fluid_tank",
        G: "create:electron_tube",
        H: "actuallyadditions:phantom_liquiface",
        I: "xycraft_machines:port_fluid"
    })
    create.mechanical_crafting('materialfactory:brass_fluid_output', [
        "AAIAA",
        "ACDCA",
        "AEFGA",
        "ACHCA",
        "AABAA"
    ], {
        A: "alltheores:brass_plate",
        B: "create:fluid_valve",
        C: "create:precision_mechanism",
        D: "tconstruct:scorched_drain",
        E: "createaddition:capacitor",
        F: "create:fluid_tank",
        G: "create:electron_tube",
        H: "actuallyadditions:phantom_liquiface",
        I: "xycraft_machines:port_fluid"
    })
    create.mechanical_crafting('materialfactory:brass_energy_input', [
        "AABAA",
        "ACDCA",
        "AEFGA",
        "ACHCA",
        "AAIAA"
    ], {
        A: "alltheores:brass_plate",
        B: "powah:energy_discharger_nitro",
        C: "create:precision_mechanism",
        D: "powah:capacitor_nitro",
        E: "createaddition:capacitor",
        F: "powah:energy_cell_nitro",
        G: "create:electron_tube",
        H: "createaddition:portable_energy_interface",
        I: "powah:energy_hopper_nitro"
    })
    create.mechanical_crafting('materialfactory:brass_multifunctional_device', [
        "AABAA",
        "ACDCA",
        "AEFGA",
        "ACHCA",
        "AAIAA"
    ], {
        A: "alltheores:brass_plate",
        B: "ae2:calculation_processor",
        C: "create:precision_mechanism",
        D: "ae2:logic_processor",
        E: "createaddition:capacitor",
        F: "advanced_ae:quantum_processor",
        G: "create:electron_tube",
        H: "ae2:engineering_processor",
        I: "appflux:energy_processor"
    })
    create.mechanical_crafting('materialfactory:anon_chihaya_hand', [
        "     ABBB",
        "    ABCCB",
        "   DDEBCB",
        "   FFFEBA",
        "  FFFFDA ",
        " FFFFFD  ",
        "FFFFF    ",
        " FFF     ",
        "  F      "
    ], {
        A: "materialfactory:light_gray_megablock",
        B: "materialfactory:blue_megablock",
        C: "materialfactory:magenta_megablock",
        D: "materialfactory:gray_megablock",
        E: "materialfactory:purple_megablock",
        F: "materialfactory:pink_megablock"
    })
    create.mechanical_crafting('materialfactory:anon_chihaya_leg', [
        "  A      ",
        " ABB     ",
        "ABBCD    ",
        " BCDBB   ",
        "  DBBBB  ",
        "   BBBBE ",
        "    BBEEF",
        "     EEFF",
        "      FF "
    ], {
        A: "materialfactory:white_megablock",
        B: "materialfactory:pink_megablock",
        C: "materialfactory:orange_megablock",
        D: "materialfactory:magenta_megablock",
        E: "materialfactory:gray_megablock",
        F: "materialfactory:black_megablock"
    })
    create.mechanical_crafting('materialfactory:anon_chihaya_body', [
        "  ABBBA  ",
        "  ABBBA  ",
        " ABBBBBA ",
        "ABBCCCBBA",
        "ABBDDCBBA",
        "EEEEEEEEE",
        "FFFFFFFFF",
        "FBBBBBBBF",
        "         "
    ], {
        A: "materialfactory:purple_megablock",
        B: "materialfactory:pink_megablock",
        C: "materialfactory:lime_megablock",
        D: "materialfactory:yellow_megablock",
        E: "materialfactory:white_megablock",
        F: "materialfactory:green_megablock"
    })
    create.mechanical_crafting('materialfactory:anon_chihaya_head', [
        " ABABABA ",
        "BACCCCCAB",
        "BCCDCDCCB",
        "BCCECECCB",
        "BCFCCCFCB",
        "BACCCCCAB",
        " ABABABA ",
        " A ABAB  ",
        " A ABAB  "
    ], {
        A: "materialfactory:magenta_megablock",
        B: "materialfactory:purple_megablock",
        C: "materialfactory:pink_megablock",
        D: "materialfactory:blue_megablock",
        E: "materialfactory:light_blue_megablock",
        F: "materialfactory:orange_megablock"
    })

    //充电
    event.custom({
        "type":"createaddition:charging",
        "input": {
            "item": 'allthemodium:dirty_vibranium_allthemodium_alloy_dust',
            "count": 1
        },
        "result":  {
            "item": 'allthemodium:vibranium_allthemodium_alloy_dust',
            "count": 1,
        },
        "energy": 1000000,
        "maxChargeRate": 1000000
    })
})