ServerEvents.recipes(event => {
  event.remove({ id: "compactcrafting:medium_glass_walls_obsidian_center" })
  event.remove({ id: "compactcrafting:basic_mixed_medium_iron" })
  event.remove({ id: "compactcrafting:chicken" })
  event.remove({ id: "compactcrafting:compact_walls" })
  event.remove({ id: "compactcrafting:ender_crystal" })

  // machine_tiny
  event.recipes.compactcrafting
    .miniaturization(
      Item.of('compactmachines:machine_tiny', 1),
      Item.of('enderio:clayed_glowstone', 1),
      160,
      3
    ).setLayers([
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A"],
        ["A", "A", "A"],
        ["A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A"],
        ["A", "B", "A"],
        ["A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A"],
        ["A", "A", "A"],
        ["A", "A", "A"]
      ])
    ]).setComponents(new CCBlockComponent()
      .add("A", "compactmachines:wall")
      .add("B", "minecraft:copper_block")
      .build()
    ).id('compactmachines:machine_tiny')

  // machine_small
  event.recipes.compactcrafting
    .miniaturization(
      Item.of('compactmachines:machine_small', 1),
      Item.of('enderio:clayed_glowstone', 1),
      160,
      5
    ).setLayers([
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "B", "C", "B", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"]
      ])
    ]).setComponents(new CCBlockComponent()
      .add("A", "compactmachines:wall")
      .add("B", "minecraft:iron_block")
      .add("C", "compactmachines:machine_tiny")
      .build()
    ).id('compactmachines:machine_small')

  // machine_normal
  event.recipes.compactcrafting
    .miniaturization(
      Item.of('compactmachines:machine_normal', 1),
      Item.of('enderio:clayed_glowstone', 1),
      160,
      5
    ).setLayers([
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "B", "C", "B", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"]
      ])
    ]).setComponents(new CCBlockComponent()
      .add("A", "compactmachines:wall")
      .add("B", "minecraft:gold_block")
      .add("C", "compactmachines:machine_small")
      .build()
    ).id('compactmachines:machine_normal')

  // machine_large
  event.recipes.compactcrafting
    .miniaturization(
      Item.of('compactmachines:machine_large', 1),
      Item.of('enderio:clayed_glowstone', 1),
      160,
      5
    ).setLayers([
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "B", "C", "B", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"]
      ])
    ]).setComponents(new CCBlockComponent()
      .add("A", "compactmachines:wall")
      .add("B", "minecraft:obsidian")
      .add("C", "compactmachines:machine_normal")
      .build()
    ).id('compactmachines:machine_large')

  // machine_giant
  event.recipes.compactcrafting
    .miniaturization(
      Item.of('compactmachines:machine_giant', 1),
      Item.of('enderio:clayed_glowstone', 1),
      160,
      5
    ).setLayers([
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "B", "C", "B", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"]
      ])
    ]).setComponents(new CCBlockComponent()
      .add("A", "compactmachines:wall")
      .add("B", "minecraft:diamond_block")
      .add("C", "compactmachines:machine_large")
      .build()
    ).id('compactmachines:machine_giant')

  // machine_maximum
  event.recipes.compactcrafting
    .miniaturization(
      Item.of('compactmachines:machine_maximum', 1),
      Item.of('enderio:clayed_glowstone', 1),
      160,
      5
    ).setLayers([
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "B", "C", "B", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A"]
      ])
    ]).setComponents(new CCBlockComponent()
      .add("A", "compactmachines:wall")
      .add("B", "minecraft:netherite_block")
      .add("C", "compactmachines:machine_giant")
      .build()
    ).id('compactmachines:machine_maximum')

  // infinity_heat_output
  event.recipes.compactcrafting
    .miniaturization(
      Item.of('materialfactory:infinity_heat_output', 1),
      Item.of('mekmm:uu_matter', 1),
      200,
      9
    ).setLayers([
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "D", "X", "D", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ])
    ]).setComponents(new CCBlockComponent()
      .add("A", "avaritia:infinity")
      .add("B", "mekanism_extras:supreme_thermodynamic_conductor")
      .add("C", "mekanism_extras:cosmic_thermodynamic_conductor")
      .add("D", "mekanism_extras:infinite_thermodynamic_conductor")
      .add("X", "mekanism_extras:naquadah_reactor_port")
      .build()
    ).id('materialfactory:infinity_heat_output')

  // infinity_fluid_input
  event.recipes.compactcrafting
    .miniaturization(
      Item.of('materialfactory:infinity_fluid_input', 1),
      Item.of('mekmm:uu_matter', 1),
      200,
      9
    ).setLayers([
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "D", "X", "D", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ])
    ]).setComponents(new CCBlockComponent()
      .add("A", "avaritia:infinity")
      .add("B", "mekanism_extras:supreme_mechanical_pipe")
      .add("C", "mekanism_extras:cosmic_mechanical_pipe")
      .add("D", "mekanism_extras:infinite_mechanical_pipe")
      .add("X", "mekanism_extras:naquadah_reactor_port")
      .build()
    ).id('materialfactory:infinity_fluid_input')

  // infinity_item_output
  event.recipes.compactcrafting
    .miniaturization(
      Item.of('materialfactory:infinity_item_output', 1),
      Item.of('mekmm:uu_matter', 1),
      200,
      9
    ).setLayers([
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "D", "X", "D", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ])
    ]).setComponents(new CCBlockComponent()
      .add("A", "avaritia:infinity")
      .add("B", "mekanism_extras:supreme_logistical_transporter")
      .add("C", "mekanism_extras:cosmic_logistical_transporter")
      .add("D", "mekanism_extras:infinite_logistical_transporter")
      .add("X", "materialfactory:entropy_matrix_item_output")
      .build()
    ).id('materialfactory:infinity_item_output')

  // infinity_item_input
  event.recipes.compactcrafting
    .miniaturization(
      Item.of('materialfactory:infinity_item_input', 1),
      Item.of('mekmm:uu_matter', 1),
      200,
      9
    ).setLayers([
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "D", "X", "D", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ])
    ]).setComponents(new CCBlockComponent()
      .add("A", "avaritia:infinity")
      .add("B", "mekanism_extras:supreme_logistical_transporter")
      .add("C", "mekanism_extras:cosmic_logistical_transporter")
      .add("D", "mekanism_extras:infinite_logistical_transporter")
      .add("X", "materialfactory:entropy_matrix_item_input")
      .build()
    ).id('materialfactory:infinity_item_input')

  // infinity_gas_output
  event.recipes.compactcrafting
    .miniaturization(
      Item.of('materialfactory:infinity_gas_output', 1),
      Item.of('mekmm:uu_matter', 1),
      200,
      9
    ).setLayers([
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "D", "X", "D", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "D", "D", "D", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "C", "C", "C", "C", "C", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ])
    ]).setComponents(new CCBlockComponent()
      .add("A", "avaritia:infinity")
      .add("B", "mekanism_extras:supreme_pressurized_tube")
      .add("C", "mekanism_extras:cosmic_pressurized_tube")
      .add("D", "mekanism_extras:infinite_pressurized_tube")
      .add("X", "materialfactory:entropy_matrix_chemical_port")
      .build()
    ).id('materialfactory:infinity_gas_output')

    //巨型附魔装置
    event.recipes.compactcrafting
    .miniaturization(
      Item.of('materialfactory:huge_enchanting_apparatus', 1),
      Item.of('arseng:portable_source_cell_256k', 1),
      200,
      9
    ).setLayers([
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "C", "B", "B", "B", "B", "B", "C", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "C", "B", "B", "B", "B", "B", "C", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["_", "_", "_", "_", "_", "_", "_", "_", "_"],
        ["_", "B", "B", "B", "B", "B", "B", "B", "_"],
        ["_", "B", "_", "_", "_", "_", "_", "B", "_"],
        ["_", "B", "_", "_", "_", "_", "_", "B", "_"],
        ["_", "B", "_", "_", "_", "_", "_", "B", "_"],
        ["_", "B", "_", "_", "_", "_", "_", "B", "_"],
        ["_", "B", "_", "_", "_", "_", "_", "B", "_"],
        ["_", "B", "B", "B", "B", "B", "B", "B", "_"],
        ["_", "_", "_", "_", "_", "_", "_", "_", "_"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["_", "_", "_", "_", "_", "_", "_", "_", "_"],
        ["_", "B", "B", "B", "B", "B", "B", "B", "_"],
        ["_", "B", "_", "_", "_", "_", "_", "B", "_"],
        ["_", "B", "_", "_", "_", "_", "_", "B", "_"],
        ["_", "B", "_", "_", "_", "_", "_", "B", "_"],
        ["_", "B", "_", "_", "_", "_", "_", "B", "_"],
        ["_", "B", "_", "_", "_", "_", "_", "B", "_"],
        ["_", "B", "B", "B", "B", "B", "B", "B", "_"],
        ["_", "_", "_", "_", "_", "_", "_", "_", "_"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "_", "_", "_", "_", "_", "B", "A"],
        ["A", "B", "_", "_", "_", "_", "_", "B", "A"],
        ["A", "B", "_", "_", "_", "_", "_", "B", "A"],
        ["A", "B", "_", "_", "_", "_", "_", "B", "A"],
        ["A", "B", "_", "_", "_", "_", "_", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
      ]),
      CCLayerType.MIXED.withPattern([
        ["_", "_", "_", "_", "_", "_", "_", "_", "_"],
        ["_", "B", "B", "B", "B", "B", "B", "B", "_"],
        ["_", "B", "_", "_", "_", "_", "_", "B", "_"],
        ["_", "B", "_", "_", "_", "_", "_", "B", "_"],
        ["_", "B", "_", "_", "_", "_", "_", "B", "_"],
        ["_", "B", "_", "_", "_", "_", "_", "B", "_"],
        ["_", "B", "_", "_", "_", "_", "_", "B", "_"],
        ["_", "B", "B", "B", "B", "B", "B", "B", "_"],
        ["_", "_", "_", "_", "_", "_", "_", "_", "_"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["_", "_", "_", "_", "_", "_", "_", "_", "_"],
        ["_", "B", "B", "B", "B", "B", "B", "B", "_"],
        ["_", "B", "_", "_", "_", "_", "_", "B", "_"],
        ["_", "B", "_", "_", "_", "_", "_", "B", "_"],
        ["_", "B", "_", "_", "_", "_", "_", "B", "_"],
        ["_", "B", "_", "_", "_", "_", "_", "B", "_"],
        ["_", "B", "_", "_", "_", "_", "_", "B", "_"],
        ["_", "B", "B", "B", "B", "B", "B", "B", "_"],
        ["_", "_", "_", "_", "_", "_", "_", "_", "_"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["_", "_", "_", "_", "_", "_", "_", "_", "_"],
        ["_", "B", "B", "B", "B", "B", "B", "B", "_"],
        ["_", "B", "_", "_", "_", "_", "_", "B", "_"],
        ["_", "B", "_", "_", "_", "_", "_", "B", "_"],
        ["_", "B", "_", "_", "_", "_", "_", "B", "_"],
        ["_", "B", "_", "_", "_", "_", "_", "B", "_"],
        ["_", "B", "_", "_", "_", "_", "_", "B", "_"],
        ["_", "B", "B", "B", "B", "B", "B", "B", "_"],
        ["_", "_", "_", "_", "_", "_", "_", "_", "_"]
      ]),
      CCLayerType.MIXED.withPattern([
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
        ["A", "C", "B", "B", "B", "B", "B", "C", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
        ["A", "C", "B", "B", "B", "B", "B", "C", "A"],
        ["A", "A", "A", "A", "A", "A", "A", "A", "A"]
      ]),
    ]).setComponents(new CCBlockComponent()
      .add("A", 'ars_nouveau:source_gem_block')
      .add("B", 'enderio:fused_quartz_enm_pink')
      .add("C", 'ifeu:dragon_star_block')
      .build()
    ).id('materialfactory:huge_enchanting_apparatus')
})