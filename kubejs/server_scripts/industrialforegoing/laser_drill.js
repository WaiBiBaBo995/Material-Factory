ServerEvents.recipes(event => {
  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "type": "forge:not",
            "value": {
              "type": "forge:tag_empty",
              "tag": 'forge:raw_materials/allthemodium'
            }
          }
        ],
        "recipe": {
          "type": "industrialforegoing:laser_drill_ore",
          "catalyst": {
            "item": 'allthemodium:allthemodium_pickaxe'
          },
          "output": {
            "tag": 'forge:raw_materials/allthemodium'
          },
          "pointer": 0,
          "rarity": [
            {
              "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                  "minecraft:the_end",
                  "minecraft:the_void",
                  "minecraft:small_end_islands",
                  "minecraft:end_barrens",
                  "minecraft:end_highlands",
                  "minecraft:end_midlands"
                ]
              },
              "depth_max": 20,
              "depth_min": 2,
              "weight": 4,
              "whitelist": {}
            }
          ]
        }
      }
    ]
  });

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "type": "forge:not",
            "value": {
              "type": "forge:tag_empty",
              "tag": 'forge:raw_materials/vibranium'
            }
          }
        ],
        "recipe": {
          "type": "industrialforegoing:laser_drill_ore",
          "catalyst": {
            "item": 'allthemodium:vibranium_pickaxe'
          },
          "output": {
            "tag": 'forge:raw_materials/vibranium'
          },
          "pointer": 0,
          "rarity": [
            {
              "whitelist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                  "minecraft:warped_forest",
                  "minecraft:crimson_forest"
                ]
              },
              "depth_max": 123,
              "depth_min": 100,
              "weight": 0,
              "blacklist": {}
            }
          ]
        }
      }
    ]
  });

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "type": "forge:not",
            "value": {
              "type": "forge:tag_empty",
              "tag": 'forge:raw_materials/unobtainium'
            }
          }
        ],
        "recipe": {
          "type": "industrialforegoing:laser_drill_ore",
          "catalyst": {
            "item": 'allthemodium:unobtainium_pickaxe'
          },
          "output": {
            "tag": 'forge:raw_materials/unobtainium'
          },
          "pointer": 0,
          "rarity": [
            {
              "whitelist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                  "minecraft:end_highlands",
                  "minecraft:end_midlands"
                ]
              },
              "depth_max": 60,
              "depth_min": 30,
              "weight": 0,
              "blacklist": {}
            }
          ]
        }
      }
    ]
  });

  //灵魂矿石
  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "type": "forge:not",
            "value": {
              "type": "forge:tag_empty",
              "tag": 'forge:ores/soulium'
            }
          }
        ],
        "recipe": {
          "type": "industrialforegoing:laser_drill_ore",
          "catalyst": {
            "item": 'industrialforegoing:laser_lens12'
          },
          "output": {
            "tag": 'forge:ores/soulium'
          },
          "pointer": 0,
          "rarity": [
            {
              "whitelist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                  "minecraft:nether_wastes",
                  "minecraft:warped_forest",
                  "minecraft:crimson_forest"
                ]
              },
              "depth_max": 70,
              "depth_min": 10,
              "weight": 0,
              "blacklist": {}
            }
          ]
        }
      }
    ]
  });

  //铬铁
  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "type": "forge:mod_loaded",
            "modid": "industrialforegoing"
          }
        ],
        "recipe": {
          "type": "industrialforegoing:laser_drill_ore",
          "catalyst": {
            "item": 'industrialforegoing:laser_lens10'
          },
          "output": {
            "item": 'thoriumreactors:chromite_ore'
          },
          "pointer": 0,
          "rarity": [
            {
              "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                  "minecraft:the_end",
                  "minecraft:the_void",
                  "minecraft:small_end_islands",
                  "minecraft:end_barrens",
                  "minecraft:end_highlands",
                  "minecraft:end_midlands"
                ]
              },
              "depth_max": 150,
              "depth_min": -20,
              "weight": 2,
              "whitelist": {}
            }
          ]
        }
      }
    ]
  });

  //氟石
  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "type": "forge:not",
            "value": {
              "type": "forge:tag_empty",
              "tag": 'forge:ores/fluorite'
            }
          }
        ],
        "recipe": {
          "type": "industrialforegoing:laser_drill_ore",
          "catalyst": {
            "item": 'industrialforegoing:laser_lens3'
          },
          "output": {
            "tag": 'forge:ores/fluorite'
          },
          "pointer": 0,
          "rarity": [
            {
              "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                  "minecraft:the_end",
                  "minecraft:the_void",
                  "minecraft:small_end_islands",
                  "minecraft:end_barrens",
                  "minecraft:end_highlands",
                  "minecraft:end_midlands"
                ]
              },
              "depth_max": 40,
              "depth_min": -30,
              "weight": 4,
              "whitelist": {}
            }
          ]
        }
      }
    ]
  });

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "type": "forge:mod_loaded",
            "modid": "industrialforegoing"
          }
        ],
        "recipe": {
          "type": "industrialforegoing:laser_drill_ore",
          "catalyst": {
            "item": 'industrialforegoing:laser_lens3'
          },
          "output": {
            "item": 'thoriumreactors:fluorite_ore'
          },
          "pointer": 0,
          "rarity": [
            {
              "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                  "minecraft:the_end",
                  "minecraft:the_void",
                  "minecraft:small_end_islands",
                  "minecraft:end_barrens",
                  "minecraft:end_highlands",
                  "minecraft:end_midlands"
                ]
              },
              "depth_max": 40,
              "depth_min": -30,
              "weight": 4,
              "whitelist": {}
            }
          ]
        }
      }
    ]
  });

  //石墨
  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "type": "forge:mod_loaded",
            "modid": "industrialforegoing"
          }
        ],
        "recipe": {
          "type": "industrialforegoing:laser_drill_ore",
          "catalyst": {
            "item": 'industrialforegoing:laser_lens15'
          },
          "output": {
            "item": 'thoriumreactors:graphite_ore'
          },
          "pointer": 0,
          "rarity": [
            {
              "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                  "minecraft:the_end",
                  "minecraft:the_void",
                  "minecraft:small_end_islands",
                  "minecraft:end_barrens",
                  "minecraft:end_highlands",
                  "minecraft:end_midlands"
                ]
              },
              "depth_max": 60,
              "depth_min": -64,
              "weight": 4,
              "whitelist": {}
            }
          ]
        }
      }
    ]
  });

  //锰矿
  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "type": "forge:mod_loaded",
            "modid": "industrialforegoing"
          }
        ],
        "recipe": {
          "type": "industrialforegoing:laser_drill_ore",
          "catalyst": {
            "item": 'industrialforegoing:laser_lens11'
          },
          "output": {
            "item": 'thoriumreactors:manganese_ore'
          },
          "pointer": 0,
          "rarity": [
            {
              "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                  "minecraft:the_end",
                  "minecraft:the_void",
                  "minecraft:small_end_islands",
                  "minecraft:end_barrens",
                  "minecraft:end_highlands",
                  "minecraft:end_midlands"
                ]
              },
              "depth_max": 80,
              "depth_min": -55,
              "weight": 1,
              "whitelist": {}
            }
          ]
        }
      }
    ]
  });

  //钼矿
  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "type": "forge:mod_loaded",
            "modid": "industrialforegoing"
          }
        ],
        "recipe": {
          "type": "industrialforegoing:laser_drill_ore",
          "catalyst": {
            "item": 'industrialforegoing:laser_lens14'
          },
          "output": {
            "item": 'thoriumreactors:molybdenum_ore'
          },
          "pointer": 0,
          "rarity": [
            {
              "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                  "minecraft:the_end",
                  "minecraft:the_void",
                  "minecraft:small_end_islands",
                  "minecraft:end_barrens",
                  "minecraft:end_highlands",
                  "minecraft:end_midlands"
                ]
              },
              "depth_max": 65,
              "depth_min": -50,
              "weight": 1,
              "whitelist": {}
            }
          ]
        }
      }
    ]
  });

  //镍矿
  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "type": "forge:not",
            "value": {
              "type": "forge:tag_empty",
              "tag": 'forge:ores/nickel'
            }
          }
        ],
        "recipe": {
          "type": "industrialforegoing:laser_drill_ore",
          "catalyst": {
            "item": 'industrialforegoing:laser_lens4'
          },
          "output": {
            "tag": 'forge:ores/nickel'
          },
          "pointer": 0,
          "rarity": [
            {
              "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                  "minecraft:the_end",
                  "minecraft:the_void",
                  "minecraft:small_end_islands",
                  "minecraft:end_barrens",
                  "minecraft:end_highlands",
                  "minecraft:end_midlands"
                ]
              },
              "depth_max": 65,
              "depth_min": -50,
              "weight": 4,
              "whitelist": {}
            }
          ]
        }
      }
    ]
  });

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "type": "forge:mod_loaded",
            "modid": "industrialforegoing"
          }
        ],
        "recipe": {
          "type": "industrialforegoing:laser_drill_ore",
          "catalyst": {
            "item": 'industrialforegoing:laser_lens4'
          },
          "output": {
            "item": 'thoriumreactors:nickel_ore'
          },
          "pointer": 0,
          "rarity": [
            {
              "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                  "minecraft:the_end",
                  "minecraft:the_void",
                  "minecraft:small_end_islands",
                  "minecraft:end_barrens",
                  "minecraft:end_highlands",
                  "minecraft:end_midlands"
                ]
              },
              "depth_max": 65,
              "depth_min": -50,
              "weight": 4,
              "whitelist": {}
            }
          ]
        }
      }
    ]
  });

  //烧绿石
  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "type": "forge:mod_loaded",
            "modid": "industrialforegoing"
          }
        ],
        "recipe": {
          "type": "industrialforegoing:laser_drill_ore",
          "catalyst": {
            "item": 'industrialforegoing:laser_lens6'
          },
          "output": {
            "item": 'thoriumreactors:pyrochlor_ore'
          },
          "pointer": 0,
          "rarity": [
            {
              "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                  "minecraft:the_end",
                  "minecraft:the_void",
                  "minecraft:small_end_islands",
                  "minecraft:end_barrens",
                  "minecraft:end_highlands",
                  "minecraft:end_midlands"
                ]
              },
              "depth_max": 50,
              "depth_min": -40,
              "weight": 3,
              "whitelist": {}
            }
          ]
        }
      }
    ]
  });

  //钍
  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "type": "forge:not",
            "value": {
              "type": "forge:tag_empty",
              "tag": 'forge:ores/nickel'
            }
          }
        ],
        "recipe": {
          "type": "industrialforegoing:laser_drill_ore",
          "catalyst": {
            "item": 'industrialforegoing:laser_lens1'
          },
          "output": {
            "tag": 'forge:storage_blocks/thorium'
          },
          "pointer": 0,
          "rarity": [
            {
              "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                  "minecraft:the_end",
                  "minecraft:the_void",
                  "minecraft:small_end_islands",
                  "minecraft:end_barrens",
                  "minecraft:end_highlands",
                  "minecraft:end_midlands"
                ]
              },
              "depth_max": 300,
              "depth_min": 15,
              "weight": 4,
              "whitelist": {}
            }
          ]
        }
      }
    ]
  });

  //钛铁矿
  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "type": "forge:mod_loaded",
            "modid": "industrialforegoing"
          }
        ],
        "recipe": {
          "type": "industrialforegoing:laser_drill_ore",
          "catalyst": {
            "item": 'industrialforegoing:laser_lens1'
          },
          "output": {
            "item": 'thoriumreactors:titanic_iron_ore'
          },
          "pointer": 0,
          "rarity": [
            {
              "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                  "minecraft:the_end",
                  "minecraft:the_void",
                  "minecraft:small_end_islands",
                  "minecraft:end_barrens",
                  "minecraft:end_highlands",
                  "minecraft:end_midlands"
                ]
              },
              "depth_max": 30,
              "depth_min": -50,
              "weight": 1,
              "whitelist": {}
            }
          ]
        }
      }
    ]
  });

  //铀矿
  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "type": "forge:not",
            "value": {
              "type": "forge:tag_empty",
              "tag": 'forge:ores/uranium'
            }
          }
        ],
        "recipe": {
          "type": "industrialforegoing:laser_drill_ore",
          "catalyst": {
            "item": 'industrialforegoing:laser_lens5'
          },
          "output": {
            "tag": 'forge:ores/uranium'
          },
          "pointer": 0,
          "rarity": [
            {
              "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                  "minecraft:the_end",
                  "minecraft:the_void",
                  "minecraft:small_end_islands",
                  "minecraft:end_barrens",
                  "minecraft:end_highlands",
                  "minecraft:end_midlands"
                ]
              },
              "depth_max": 90,
              "depth_min": -40,
              "weight": 4,
              "whitelist": {}
            }
          ]
        }
      }
    ]
  });

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "type": "forge:mod_loaded",
            "modid": "industrialforegoing"
          }
        ],
        "recipe": {
          "type": "industrialforegoing:laser_drill_ore",
          "catalyst": {
            "item": 'mekanism:meka_tool'
          },
          "output": {
            "item": 'mekanism_extras:naquadah_ore'
          },
          "pointer": 0,
          "rarity": [
            {
              "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                  "minecraft:the_end",
                  "minecraft:the_void",
                  "minecraft:small_end_islands",
                  "minecraft:end_barrens",
                  "minecraft:end_highlands",
                  "minecraft:end_midlands"
                ]
              },
              "depth_max": -62,
              "depth_min": -64,
              "weight": 1,
              "whitelist": {}
            }
          ]
        }
      }
    ]
  });

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "type": "forge:mod_loaded",
            "modid": "industrialforegoing"
          }
        ],
        "recipe": {
          "type": "industrialforegoing:laser_drill_ore",
          "catalyst": {
            "item": 'mekanism:meka_tool'
          },
          "output": {
            "item": 'mekanism_extras:end_naquadah_ore'
          },
          "pointer": 0,
          "rarity": [
            {
              "whitelist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                  "minecraft:end_highlands",
                  "minecraft:end_midlands"
                ]
              },
              "depth_max": 30,
              "depth_min": 0,
              "weight": 2,
              "blacklist": {}
            }
          ]
        }
      }
    ]
  });

  //币
  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "type": "forge:mod_loaded",
            "modid": "industrialforegoing"
          }
        ],
        "recipe": {
          "type": "industrialforegoing:laser_drill_ore",
          "catalyst": {
            "item": "actuallyadditions:drill_light_blue"
          },
          "output": {
            "item": "thermal:silver_coin"
          },
          "pointer": 0,
          "rarity": [
            {
              "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                  "minecraft:the_end",
                  "minecraft:the_void",
                  "minecraft:small_end_islands",
                  "minecraft:end_barrens",
                  "minecraft:end_highlands",
                  "minecraft:end_midlands"
                ]
              },
              "depth_max": 64,
              "depth_min": -60,
              "weight": 1,
              "whitelist": {}
            }
          ]
        }
      }
    ]
  });
  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "type": "forge:mod_loaded",
            "modid": "industrialforegoing"
          }
        ],
        "recipe": {
          "type": "industrialforegoing:laser_drill_ore",
          "catalyst": {
            "item": "actuallyadditions:drill_light_gray"
          },
          "output": {
            "item": "thermal:iron_coin"
          },
          "pointer": 0,
          "rarity": [
            {
              "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                  "minecraft:the_end",
                  "minecraft:the_void",
                  "minecraft:small_end_islands",
                  "minecraft:end_barrens",
                  "minecraft:end_highlands",
                  "minecraft:end_midlands"
                ]
              },
              "depth_max": 64,
              "depth_min": -60,
              "weight": 1,
              "whitelist": {}
            }
          ]
        }
      }
    ]
  });
  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "type": "forge:mod_loaded",
            "modid": "industrialforegoing"
          }
        ],
        "recipe": {
          "type": "industrialforegoing:laser_drill_ore",
          "catalyst": {
            "item": "actuallyadditions:drill_cyan"
          },
          "output": {
            "item": "thermal:tin_coin"
          },
          "pointer": 0,
          "rarity": [
            {
              "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                  "minecraft:the_end",
                  "minecraft:the_void",
                  "minecraft:small_end_islands",
                  "minecraft:end_barrens",
                  "minecraft:end_highlands",
                  "minecraft:end_midlands"
                ]
              },
              "depth_max": 64,
              "depth_min": -60,
              "weight": 1,
              "whitelist": {}
            }
          ]
        }
      }
    ]
  });
})