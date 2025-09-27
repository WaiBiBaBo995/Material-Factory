ServerEvents.entityLootTables(event => {
    event.modifyEntity('minecraft:warden', Loot =>{
        Loot.addPool(pool => {
            pool.addItem('minecraft:sculk_shrieker').weight(1).count(1)
            pool.addEmpty(2)
        })
    })

    event.modifyEntity('slimeoverhaul:earth_slime', Loot =>{
        Loot.addPool(pool => {
            pool.addItem('mysticalagriculture:dirt_essence').weight(1).count([1,2]).lootingEnchant(2,8)
        })
    })
    event.modifyEntity('slimeoverhaul:flame_slime', Loot =>{
        Loot.addPool(pool => {
            pool.addItem('mysticalagriculture:fire_essence').weight(1).count([1,2]).lootingEnchant(2,8)
        })
    })
})

ServerEvents.chestLootTables(event=>{
    event.addChest("materialfactory:twinsaw",loot=>{
        loot.addPool(pool=>{
            pool.addItem('minecraft:cod')
            pool.addItem('minecraft:salmon')
            pool.addItem('minecraft:tropical_fish')
            pool.addItem('minecraft:pufferfish')
            pool.rolls = 8
            console.log(pool.conditions);
        }), 
        loot.addPool(pool => {
            pool.addItem('minecraft:string')
            pool.addItem('minecraft:bone_meal')
            pool.rolls = 8
    })
    })
})

ServerEvents.genericLootTables(e=>{
    e.addGeneric("tumbleweed:entities/tumbleweed",loot=>{
        loot.addPool(pool=>{
            pool.addItem('materialfactory:cactus_sandwich').weight(1)
            pool.addItem("minecraft:dead_bush").weight(1)
            pool.addItem('minecraft:stick').weight(3).count([1, 2])
            pool.addItem('notreepunching:plant_fiber').weight(2).count([1, 2])
            pool.addItem('minecraft:bone').weight(1).count([1, 2])
            pool.addItem('minecraft:rotten_flesh').weight(1).count(1)
            pool.addItem('minecraft:leather').weight(1).count(1)
            pool.addItem('exdeorum:stone_pebble').weight(1).count([1, 2])
            pool.addItem('minecraft:feather').weight(1).count(1)
            pool.addItem('notreepunching:flint_shard').weight(1).count(1)
            pool.addItem('minecraft:emerald').weight(1).count(1)
        })
    })
})

//普通废墟战利品
//食物
ServerEvents.blockLootTables(event =>{
    event.addBlock('materialfactory:metal_barrel',Loot=>{
        Loot.addPool(p=>{
            p.addEmpty(4)
            p.addItem('minecraft:potato').count([1,4]).weight(4)
            p.addItem('minecraft:carrot').count([1,4]).weight(4)
            p.addItem('minecraft:apple').count([1,2]).weight(4)
            p.addItem('minecraft:wheat_seeds').count([1,4]).weight(4)
            p.addItem('minecraft:beetroot_seeds').weight(4)
            p.addItem('minecraft:melon_seeds').count([1,2]).weight(4)
            p.addItem('minecraft:pumpkin_seeds').count([1,2]).weight(4)
            p.addItem('minecraft:pitcher_pod').count([1,2]).weight(4)
            p.addItem('thermal:flax_seeds').count([1,2]).weight(2)
            p.addItem('minecraft:glow_berries').count([1,3]).weight(4)
            p.addItem('minecraft:torchflower_seeds').weight(2)
            p.addItem('supplementaries:flax_seeds').weight(2)
            p.addItem('actuallyadditions:canola_seeds').weight(2)
            p.addItem('actuallyadditions:flax_seeds').weight(2)
            p.addItem('ars_nouveau:magebloom_crop').weight(2)
            p.addItem('thermal:amaranth_seeds').weight(2)
            p.addItem('thermal:barley_seeds').weight(2)
            p.addItem('thermal:corn_seeds').weight(2)
            p.addItem('thermal:onion_seeds').weight(2)
            p.addItem('thermal:radish_seeds').weight(2)
            p.addItem('thermal:rice_seeds').weight(2)
            p.addItem('thermal:sadiroot_seeds').weight(2)
            p.addItem('thermal:spinach_seeds').weight(2)
            p.addItem('thermal:bell_pepper_seeds').weight(2)
            p.addItem('thermal:eggplant_seeds').weight(2)
            p.addItem('thermal:green_bean_seeds').weight(2)
            p.addItem('thermal:peanut_seeds').weight(2)
            p.addItem('thermal:strawberry_seeds').weight(2)
            p.addItem('thermal:tomato_seeds').weight(2)
            p.addItem('thermal:hops_seeds').weight(2)
            p.addItem('thermal:tea_seeds').weight(2)
            p.addItem('thermal:frost_melon_seeds').weight(2)
            p.addItem('tconstruct:earth_slime_grass_seeds').weight(2)
            p.addItem('tconstruct:sky_slime_grass_seeds').weight(2)
            p.addItem('tconstruct:ender_slime_grass_seeds').weight(2)
            p.addItem('tconstruct:blood_slime_grass_seeds').weight(2)
            p.addItem('minecraft:cake').weight(2)
            p.addItem('thermal:stuffed_pumpkin').weight(2)
            p.addItem('thermal:carrot_cake').weight(2)
            p.addItem('thermal:chocolate_cake').weight(2)
            p.addItem('thermal:spice_cake').weight(2)
            p.addItem('create:blaze_cake').weight(2)
            p.addItem('createaddition:honey_cake').weight(2)
            p.addItem('createaddition:chocolate_cake').weight(2)
            p.addItem('create:creative_blaze_cake').weight(1)
            p.addTag('minecraft:flowers',true).weight(2)
            p.addTag('forge:mushrooms',true).weight(2)
            p.addTag('forge:crops',true).weight(2)
            p.addItem('avaritia:cosmic_meatballs').weight(1)
            p.addItem('artifacts:everlasting_beef').weight(1)
            p.rolls = ([1,3])
        })
    })

    event.addBlock('materialfactory:metal_crate',Loot=>{
        Loot.addPool(p=>{
            p.addEmpty(4)
            p.addItem('alltheores:copper_nugget').count([1,3]).weight(10)
            p.addItem('alltheores:tin_nugget').count([1,2]).weight(8)
            p.addItem('alltheores:zinc_nugget').count([1,2]).weight(8)
            p.addItem('alltheores:lead_nugget').count([1,2]).weight(8)
            p.addItem('alltheores:silver_nugget').count([1,2]).weight(8)
            p.addItem('alltheores:nickel_nugget').count([1,2]).weight(8)
            p.addItem('minecraft:iron_nugget').count([1,3]).weight(10)
            p.addItem('opolisutilities:mini_charcoal').count([1,2]).weight(8)
            p.addItem('opolisutilities:mini_coal').count([1,2]).weight(8)
            p.rolls = ([1,3])
        })
    })
})