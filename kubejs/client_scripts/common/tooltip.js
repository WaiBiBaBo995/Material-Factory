ItemEvents.tooltip(event =>{
    event.add('materialfactory:anon_chihaya', Text.translate("item.materialfactory.anon_chihaya.tooltip").gray())

    event.addAdvanced('mysticalagriculture:infinity_seeds',(item,advanced,text) =>{
        text.add(1,Text.translate("item.mysticalagriculture.infinity_seeds.tooltip").darkGray().italic())
    })
    event.addAdvanced('mysticalagriculture:infinity_essence',(item,advanced,text) =>{
        text.add(1,Text.translate("tooltip.materialfactory.infinity_essence").darkGray().italic())
    })
    event.addAdvanced('extendedae_plus:wireless_transceiver',(item,advanced,text) =>{
        text.add(1,Text.translate("tooltip.materialfactory.wireless_transceiver").lightPurple())
    })
    event.addAdvanced('ars_nouveau:mage_block',(item,advanced,text) =>{
        text.add(1,Text.translate("tooltip.materialfactory.mage_block"))
    })
    event.addAdvanced('materialfactory:source_fluid_tank',(item,advanced,text) =>{
        text.add(1,Text.translate("tooltip.materialfactory.source_fluid_tank"))
    })

    let shiftTooltipItems = [
        { item: 'materialfactory:charge_spool', lines: 2 },
        { item: 'materialfactory:starter', lines: 3 },
        { item: 'materialfactory:starter_core', lines: 1},
        { item: 'extendedae_plus:entity_speed_ticker', lines: 1 },
        { item: 'materialfactory:base_crystal_cluster', lines: 1 },
        { item: 'materialfactory:brass_encased_shaft', lines: 1 },
        { item: 'materialfactory:brass_multifunctional_device', lines: 3 },
        { item: 'materialfactory:unbonded_machine_frame_pity', lines: 3 },
        { item: 'materialfactory:oak_crucible', lines: 3},
        { item: 'materialfactory:source_fluid_extractor', lines: 5 },
        { item: 'compactcrafting:field_projector', lines: 3 },
        { item: 'materialfactory:artifical_star', lines: 7 }
    ]
    shiftTooltipItems.forEach((shiftTooltipItem) => {
        const { item, lines } = shiftTooltipItem;
        event.addAdvanced(item, (item, advanced, text) => {
            if (!event.shift) {
                text.add(1, Text.translate('tooltip.materialfactory.hold_shift', Text.yellow('Shift')).gold());
            } else {
                text.add(1, Text.translate('tooltip.materialfactory.hold_shift', Text.white('Shift')).darkGray());
                let itemId = item.id.split(':')[1];
                for (let i = 1; i <= lines; i++) {
                    text.add(i + 1, Text.translate(`tooltip.materialfactory.${itemId}_${i}`).gold());
                }
            }
        })
    });
})