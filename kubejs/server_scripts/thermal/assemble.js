ServerEvents.recipes(event => {
    //冶金灌注机
    event.custom(
        {
            "type": "thermal_extra:component_assembly",
            "energy": 100000,
            "ingredients": [
                { "amount": 4, "tag": 'forge:ingots/steel' },
                { "item": 'industrialforegoing:machine_frame_advanced' },
                { "amount": 2, "item": 'thermal:rf_coil' },
                { "item": 'ironfurnaces:iron_furnace' },
                { "item": 'mekanism:basic_chemical_tank' },
                { "amount": 2, "tag": 'forge:ingots/osmium' },
                { "amount": 250, "fluid": "thermal_extra:polyolefin" }
            ],
            "result": [{
                "chance": 1.0,
                "item": 'mekanism:metallurgic_infuser'
            }]
        }).id('mekanism:metallurgic_infuser')

    //工厂安装器
    //基础
    event.custom(
        {
            "type": "thermal_extra:component_assembly",
            "energy": 2000,
            "ingredients": [
                { "amount": 4, "item": "minecraft:redstone" },
                { "amount": 2, "tag": 'forge:ingots/iron' },
                { "amount": 2, "item": "mekanism:basic_control_circuit" },
                { "amount": 1, "tag": 'minecraft:planks' },
                { "amount": 100, "fluid_tag": "forge:latex" }
            ],
            "result": [{
                "chance": 1.0,
                "item": "mekanism:basic_tier_installer"
            }]
        }).id('mekanism:tier_installer/basic')
    //高级
    event.custom(
        {
            "type": "thermal_extra:component_assembly",
            "energy": 10000,
            "ingredients": [
                { "amount": 4, "item": "mekanism:alloy_infused" },
                { "amount": 2, "tag": 'forge:ingots/osmium' },
                { "amount": 2, "item": "mekanism:advanced_control_circuit" },
                { "amount": 1, "item": "mekanism:basic_tier_installer" },
                { "amount": 100, "fluid": 'industrialforegoing:pink_slime' }
            ],
            "result": [{
                "chance": 1.0,
                "item": "mekanism:advanced_tier_installer"
            }]
        }).id('mekanism:tier_installer/advanced')
    //精英
    event.custom(
        {
            "type": "thermal_extra:component_assembly",
            "energy": 50000,
            "ingredients": [
                { "amount": 4, "item": "mekanism:alloy_reinforced" },
                { "amount": 2, "item": "minecraft:gold_ingot" },
                { "amount": 2, "item": "mekanism:elite_control_circuit" },
                { "amount": 1, "item": "mekanism:advanced_tier_installer" },
                { "amount": 100, "fluid": 'industrialforegoing:ether_gas' }
            ],
            "result": [{
                "chance": 1.0,
                "item": "mekanism:elite_tier_installer"
            }]
        }).id('mekanism:tier_installer/elite')
    //终极
    event.custom(
        {
            "type": "thermal_extra:component_assembly",
            "energy": 400000,
            "ingredients": [
                { "amount": 4, "item": "mekanism:alloy_atomic" },
                { "amount": 2, "item": "mekanism:enriched_diamond" },
                { "amount": 2, "item": "mekanism:ultimate_control_circuit" },
                { "amount": 1, "item": "mekanism:elite_tier_installer" },
                { "amount": 100, "fluid": 'ifeu:liquid_dragon_breath' }
            ],
            "result": [{
                "chance": 1.0,
                "item": "mekanism:ultimate_tier_installer"
            }]
        }).id('mekanism:tier_installer/ultimate')
    //绝对
    event.custom(
        {
            "type": "thermal_extra:component_assembly",
            "energy": 900000,
            "ingredients": [
                { "amount": 4, "item": "mekanism_extras:alloy_radiance" },
                { "amount": 2, "item": "botanicalmachinery:mana_emerald" },
                { "amount": 2, "item": "mekanism_extras:absolute_control_circuit" },
                { "amount": 1, "item": "mekanism:ultimate_tier_installer" },
                { "amount": 100, "fluid": 'thermal_extra:soul_infused' }
            ],
            "result": [{
                "chance": 1.0,
                "item": "mekanism_extras:absolute_tier_installer"
            }]
        }).id('mekanism_extras:tier_installer/absolute')
    //至尊
    event.custom(
        {
            "type": "thermal_extra:component_assembly",
            "energy": 1500000,
            "ingredients": [
                { "amount": 4, "item": "mekanism_extras:alloy_thermonuclear" },
                { "amount": 2, "item": "cagedmobs:star_infused_netherite_ingot" },
                { "amount": 2, "item": "mekanism_extras:supreme_control_circuit" },
                { "amount": 1, "item": "mekanism_extras:absolute_tier_installer" },
                { "amount": 100, "fluid": 'tconstruct:molten_signalum' }
            ],
            "result": [{
                "chance": 1.0,
                "item": "mekanism_extras:supreme_tier_installer"
            }]
        }).id('mekanism_extras:tier_installer/supreme')
    //寰宇
    event.custom(
        {
            "type": "thermal_extra:component_assembly",
            "energy": 6000000,
            "ingredients": [
                { "amount": 4, "item": "mekanism_extras:alloy_shining" },
                { "type": "forge:nbt", "item": 'productivebees:configurable_honeycomb', "nbt": "{EntityTag:{type:\"productivebees:refined_obsidian\"}}" },
                { "amount": 2, "item": "mekanism_extras:cosmic_control_circuit" },
                { "amount": 1, "item": "mekanism_extras:supreme_tier_installer" },
                { "amount": 100, "fluid": 'thermal_extra:twinite' }
            ],
            "result": [{
                "chance": 1.0,
                "item": "mekanism_extras:cosmic_tier_installer"
            }]
        }).id('mekanism_extras:tier_installer/cosmic')
    //悖论
    event.custom(
        {
            "type": "thermal_extra:component_assembly",
            "energy": 10000000,
            "ingredients": [
                { "amount": 4, "item": "mekanism_extras:alloy_spectrum" },
                { "amount": 2, "item": "mekmm:uu_matter" },
                { "amount": 2, "item": "mekanism_extras:infinite_control_circuit" },
                { "amount": 1, "item": "mekanism_extras:cosmic_tier_installer" },
                { "amount": 100, "fluid": 'ifeu:dragon_star_essence' }
            ],
            "result": [{
                "chance": 1.0,
                "item": "mekanism_extras:infinite_tier_installer"
            }]
        }).id('mekanism_extras:tier_installer/infinite')

    //钢制外壳
    event.custom(
        {
            "type": "thermal_extra:component_assembly",
            "energy": 20000,
            "ingredients": [
                { "amount": 1, "item": "thermal:machine_frame" },
                { "amount": 2, "item": "materialfactory:industrial_dye_blend" },
                { "amount": 4, "item": "enderio:fused_quartz" },
                { "amount": 500, "fluid": 'materialfactory:molten_steel_osmium_alloy' }
            ],
            "result": [{
                "chance": 1.0,
                "item": "mekanism:steel_casing"
            }]
        }).id('mekanism:steel_casing')

    event.custom(
        {
            "type": "thermal_extra:component_assembly",
            "energy": 50000,
            "ingredients": [
                { "amount": 2, "item": "minecraft:redstone" },
                { "amount": 2, "item": "mekanism:basic_control_circuit" },
                { "amount": 2, "tag": 'forge:glass/silica' },
                { "amount": 1, "item": "mekanism:steel_casing" },
                { "amount": 250, "fluid": "thermal_extra:polyolefin" }
            ],
            "result": [{
                "chance": 1.0,
                "item": "mekanism:energized_smelter"
            }]
        }).id('mekanism:energized_smelter')
})

function MekanismAssemble(energy, input, fluid, result) {
    ServerEvents.recipes(event => {
        // 兼容处理：如果传入的是数组就展开，否则当单个项处理
        let ingredients = Array.isArray(input) ? input.slice() : [input];
        ingredients.push({ "amount": 1, "item": "mekanism:steel_casing" });
        ingredients.push({ "amount": fluid, "fluid": "thermal_extra:polyolefin" });

        event.custom(
            {
                "type": "thermal_extra:component_assembly",
                "energy": energy,
                "ingredients": ingredients,
                "result": [{
                    "chance": 1.0,
                    "item": result
                }]
            }).id(result)
    })
}
function basicMekanism(input, result) {
    MekanismAssemble(50000, [{ "amount": 2, "item": "minecraft:redstone" },
        { "amount": 2, "item": "mekanism:basic_control_circuit" }, input], 250, result)
}

function advancedMekanism(input, result) {
    MekanismAssemble(80000, [{ "amount": 2, "item": "mekanism:alloy_infused" },
        { "amount": 2, "item": "mekanism:advanced_control_circuit" }, input], 500, result)
}

function eliteMekanism(input, result) {
    MekanismAssemble(150000, [{ "amount": 2, "item": "mekanism:alloy_reinforced" },
        { "amount": 2, "item": "mekanism:elite_control_circuit" }, input], 1000, result)
}

function ultimateMekanism(input, result) {
    let inputArray = Array.isArray(input) ? input.slice() : [input];
        inputArray.unshift({ "amount": 2, "item": "mekanism:ultimate_control_circuit" });
        inputArray.unshift({ "amount": 2, "item": "mekanism:ingot_refined_obsidian" });
    MekanismAssemble(200000, inputArray, 2000, result)
}
//其他机器
MekanismAssemble(4000, [{ "item": "minecraft:bucket"}, { "amount": 2, "item": "mekanism:alloy_infused" }, { "amount": 3, "tag": 'forge:ingots/osmium' }], 250, "mekanism:electric_pump")

//基础机器
basicMekanism({ "amount": 2, "item": "minecraft:iron_ingot" }, "mekanism:enrichment_chamber")
basicMekanism({ "amount": 2, "item": "minecraft:lava_bucket" }, "mekanism:crusher")
basicMekanism({ "amount": 2, "item": "minecraft:bowl" }, "mekanism:nutritional_liquifier")

//高级机器
advancedMekanism({ "amount": 2, "item": "minecraft:bucket" }, "mekanism:osmium_compressor")
advancedMekanism({ "amount": 2, "tag": 'forge:ingots/osmium' }, "mekanism:purification_chamber")

//精英机器
eliteMekanism({ "amount": 2, "item": "minecraft:cobblestone" }, "mekanism:combiner")

//终极机器
ultimateMekanism({ "amount": 2, "tag": 'forge:gems/fluorite' }, "mekanism:chemical_crystallizer")
ultimateMekanism([{ "amount": 1, "item": "mekanism:basic_chemical_tank" }, { "amount": 1, "item": "mekanism:advanced_chemical_tank" }], "mekanism:chemical_dissolution_chamber")
ultimateMekanism([{ "amount": 1, "item": "mekanism:basic_chemical_tank" }, { "amount": 1, "item": "mekanism:basic_fluid_tank" }], "mekanism:chemical_washer")