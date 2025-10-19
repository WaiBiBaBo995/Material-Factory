Platform.getInfo('KubeJS').name = 'Material Factory'
Platform.setModName('Materialfactory', 'Material Factory')

const $Player = Java.loadClass('net.minecraft.world.entity.player.Player');

StartupEvents.registry("item", event =>{
    event.create("materialfactory:rainbow_slimeball", "basic").displayName("Rainbow Slimeball");
    event.create("materialfactory:anon", "basic")
         .displayName("Anon")
         .glow(true)
         .rarity("supreme")
         .fireResistant(true)
    event.create("materialfactory:anon_chihaya_head", "basic").rarity("cosmic").displayName("Anon Chihaya Head")
    event.create("materialfactory:anon_chihaya_body", "basic").rarity("cosmic").displayName("Anon Chihaya Body")
    event.create("materialfactory:anon_chihaya_leg", "basic").rarity("cosmic").displayName("Anon Chihaya Leg")
    event.create("materialfactory:anon_chihaya_hand", "basic").rarity("cosmic").displayName("Anon Chihaya Hand")

    event.create("createsifter:diamond_mesh", "createsifter:mesh")
    event.create('createsifter:advanced_diamond_mesh','createsifter:advanced_mesh')
    event.create("createsifter:netherite_mesh", "createsifter:mesh")
    event.create('createsifter:advanced_netherite_mesh','createsifter:advanced_mesh')

    event.create("materialfactory:thermostat_charm", "basic").rarity("epic").displayName("Thermostat Charm").tag("curios:charm").maxStackSize(1);

    event.create("materialfactory:cactus_sandwich","basic")
        .food(foodBuilder=>{
            foodBuilder
                .saturation(0.5)
                .hunger(4)
                .eaten(foodEatenEvent => {
                /**
                 * @type {$Player}
                 */
                let player = foodEatenEvent.getPlayer()
                if (foodEatenEvent.getPlayer() != null){
                    player.attack(1)
                }
            })
        });
    event.create('materialfactory:charge_spool', "basic")
        .maxDamage(128)
        .unstackable()
        .attachCapability(
            CapabilityBuilder.ENERGY.customItemStack()
                .canReceive(i => true)
                .getEnergyStored(i => (128 - i.damageValue) * 1000)
                .getMaxEnergyStored(i => 128000)
                .receiveEnergy((itm, amount, sim) => {
                    let energyPerDurability = 1000;
                    let maxDurabilityToRestore = Math.floor(amount / energyPerDurability);
                    let actualDurabilityToRestore = Math.min(maxDurabilityToRestore, itm.damageValue);
                    if (actualDurabilityToRestore > 0 && !sim) {
                        itm.damageValue -= actualDurabilityToRestore;
                    }
                    return actualDurabilityToRestore * energyPerDurability;
                })
        )
    event.create('materialfactory:crushed_capacitor','basic')
    event.create('allthemodium:incomplete_vibranium_allthemodium_alloy_dust', "create:sequenced_assembly")
    event.create('allthemodium:dirty_vibranium_allthemodium_alloy_dust', "basic")
    event.create('materialfactory:antimatter_ball','basic').rarity("epic")
    event.create('mekanism:enriched_allthemodium','basic').rarity("gold").tag('mekanism:enriched').tag('mekanism:enriched/allthemodium')
    event.create('materialfactory:vibranium_mass','basic')
    event.create('materialfactory:unobtainium_mass','basic')
    event.create('materialfactory:brass_speed_cardx2','basic').maxStackSize(4)
    event.create('materialfactory:brass_speed_cardx4','basic').maxStackSize(4)
    event.create('materialfactory:brass_speed_cardx8','basic').maxStackSize(4)
    event.create('materialfactory:brass_parallel_card','basic').maxStackSize(16)
    event.create('materialfactory:wooden_shears', 'shears')
            .maxDamage(59)
            .burnTime(40)
            .tag('forge:shears')
            .tag('minecraft:shears');
    event.create('materialfactory:industrial_dye_blend', 'basic')
    event.create('materialfactory:soul_attuned_dye_blend', 'basic')
    event.create('materialfactory:incomplete_source_catalyst', 'basic')
            .fireResistant(true)
    event.create('materialfactory:source_catalyst', 'basic')
            .glow(true)
            .fireResistant(true)
            .tooltip(Text.translate('tooltip.materialfactory.source_catalyst'))
            .rarity("epic")
})

ItemEvents.modification(event =>{
    event.modify('mysticalagriculture:infinity_seeds', item=>{
        item.rarity = "cosmic"
    })

    event.modify('materialfactory:anon_chihaya', item=>{
        item.rarity = "epic"
    })

    event.modify('notreepunching:clay_tool',item=>{
        item.craftingRemainder = Item.of('notreepunching:clay_tool').item;
    });
})