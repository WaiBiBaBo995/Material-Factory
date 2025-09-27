ServerEvents.tags('block', event => {
    event.add('minecraft:mineable/axe',[
        'mbd2:oak_crucible',
    ])
    event.add('minecraft:mineable/pickaxe',[
        'mbd2:ash_furnace',
        'materialfactory:metal_barrel',
        'materialfactory:obsidian_crushing_wheel',
        'materialfactory:diamond_crushing_wheel',
        'materialfactory:gold_crushing_wheel',
        'materialfactory:iron_crushing_wheel',
        'materialfactory:netherite_crushing_wheel'
    ])

    event.add('minecraft:needs_wooden_tool',[
        'materialfactory:metal_barrel'
    ])
    
    event.add('forge:storage_blocks/yellorium', 'alltheores:uranium_block')

    event.add('entangled:invalid_targets',
        ['@ae2', '@advanced_ae', '@expatternprovider', '@megacells', '@appflux', '@appmek','@crazyae2addons']
    )
    
    event.add('exaep:speed_blacklist',['#industrialforegoingsouls:cant_accelerate'])
    
    event.add('create:passive_boiler_heaters',
        ['mekanism:superheating_element']
    )
    //空手破坏
    event.add('notreepunching:always_drops',
        ['createsifter:dust','createsifter:crushed_end_stone','createsifter:crushed_netherrack','createsifter:crushed_deepslate','createsifter:crushed_blackstone','minecraft:farmland'])
    event.add('notreepunching:always_breakable',
        ['createsifter:dust','createsifter:crushed_end_stone','createsifter:crushed_netherrack','createsifter:crushed_deepslate','createsifter:crushed_blackstone','minecraft:ice','minecraft:farmland'])
});

ServerEvents.tags('item', event => {
    event.add('avaritia:endless',[
        'mysticalagriculture:infinity_seeds'
    ]);
    event.add('minecraft:shovels',[
        'allthemodium:allthemodium_shovel',
        'allthemodium:vibranium_shovel',
        'allthemodium:unobtainium_shovel',
        'allthemodium:alloy_shovel',
        'notreepunching:flint_shovel',
    ]);
    event.add('minecraft:wooden_tools',[
        'minecraft:wooden_sword',
        'minecraft:wooden_axe',
        'minecraft:wooden_pickaxe',
        'minecraft:wooden_shovel',
        'minecraft:wooden_hoe',
    ]);
    event.add('minecraft:stone_tools',[
        'minecraft:stone_sword',
        'minecraft:stone_axe',
        'minecraft:stone_pickaxe',
        'minecraft:stone_shovel',
        'minecraft:stone_hoe',
    ]);
    event.add('lychee:fire_immune',['supplementaries:ash_brick'])

    event.add('forge:slimeballs',['materialfactory:rainbow_slimeball'])
    event.add('bookshelf:slime_balls',['materialfactory:rainbow_slimeball'])
    event.add('forge:dusts/ender', 'ae2:ender_dust')

    event.add('forge:cobblestone', 'minecraft:blackstone')

//    event.add('notreepunching:string', 'opolisutilities:leafy_string')
//    event.add('forge:string', 'opolisutilities:leafy_string')
    
    event.add('curios:charm',['tiab:time_in_a_bottle','cold_sweat:soulspring_lamp'])

    event.add('forge:raw_materials/elementium', 'mythicbotany:raw_elementium')
    event.add('forge:storage_blocks/raw_elementium', 'mythicbotany:raw_elementium_block')

    event.add('forge:dirty_dusts/copper', 'alltheores:dirty_copper_dust')
    event.add('forge:dirty_dusts/tin', 'alltheores:dirty_tin_dust')
    event.add('forge:dirty_dusts/lead', 'alltheores:dirty_lead_dust')
    event.add('forge:dirty_dusts/osmium', 'alltheores:dirty_osmium_dust')
    event.add('forge:dirty_dusts/uranium', 'alltheores:dirty_uranium_dust')
    event.add('mekanism:dirty_dusts/copper', 'alltheores:dirty_copper_dust')
    event.add('mekanism:dirty_dusts/tin', 'alltheores:dirty_tin_dust')
    event.add('mekanism:dirty_dusts/lead', 'alltheores:dirty_lead_dust')
    event.add('mekanism:dirty_dusts/osmium', 'alltheores:dirty_osmium_dust')
    event.add('mekanism:dirty_dusts/uranium', 'alltheores:dirty_uranium_dust')

    event.add('mekanism:clumps/copper', 'alltheores:copper_clump')
    event.add('mekanism:clumps/tin', 'alltheores:tin_clump')
    event.add('mekanism:clumps/lead', 'alltheores:lead_clump')
    event.add('mekanism:clumps/osmium', 'alltheores:osmium_clump')
    event.add('mekanism:clumps/uranium', 'alltheores:uranium_clump')

    event.add('mysticalagriculture:essences', [
    'mysticalagriculture:allthemodium_essence',
    'mysticalagriculture:unobtainium_essence',
    'mysticalagriculture:vibranium_essence',
  ])
    event.add('mysticalagriculture:seeds', [
    'mysticalagriculture:allthemodium_seeds',
    'mysticalagriculture:unobtainium_seeds',
    'mysticalagriculture:vibranium_seeds',
  ])

    event.add('forge:ingots/yellorium', [
    'alltheores:uranium_ingot'
  ])

    event.remove('tombstone:seeds', '#mysticalagriculture:seeds')
});

ServerEvents.tags('fluid' ,e=>{
    e.removeAll("ad_astra_rocketed:tier_7_rocket_fuel")
    e.add("ad_astra_rocketed:tier_7_rocket_fuel",["mekanismgenerators:fusion_fuel"])
    e.add("materialfactory:paint_fluid",["materialfactory:red_paint_fluid","materialfactory:blue_paint_fluid","materialfactory:green_paint_fluid","materialfactory:black_paint_fluid","materialfactory:white_paint_fluid","materialfactory:yellow_paint_fluid","materialfactory:orange_paint_fluid","materialfactory:light_gray_paint_fluid","materialfactory:gray_paint_fluid","materialfactory:light_blue_paint_fluid","materialfactory:cyan_paint_fluid","materialfactory:purple_paint_fluid","materialfactory:magenta_paint_fluid","materialfactory:pink_paint_fluid","materialfactory:brown_paint_fluid","materialfactory:lime_paint_fluid"])
})

ServerEvents.tags('entity_type', event => {
    event.add('kubejs:mob_blacklist', [/productivebees:.+/, 'artifacts:mimic', 'minecraft:iron_golem','minecraft:wither','darkdoppelganger:dark_doppelganger'])
    event.add('mob_grinding_utils:no_swab', '#kubejs:mob_blacklist')
    event.add('mob_grinding_utils:no_spawn', '#kubejs:mob_blacklist')
    event.add('industrialforegoing:mob_duplicator_blacklist', '#kubejs:mob_blacklist')
    event.add('ars_nouveau:drygmy_blacklist', [/productivebees:.+/, 'artifacts:mimic'])
    event.add('spirit:soul_cage_blacklisted', '#kubejs:mob_blacklist')
})
