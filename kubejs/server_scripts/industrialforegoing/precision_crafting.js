ServerEvents.recipes(event =>{
    //创造插件：概率
    event.custom({
        "type": "ifeu:precision_shapeless",
        "chance": 0.1,
        "inputs": [
            {
            "tag": "forge:storage_blocks/redstone"
            },
            {
            "tag": "forge:glass_panes/colorless"
            },
            {
            "item": "minecraft:enchanted_book"
            },
            {
            "item": 'ifeu:rough_dragon_star'
            }
        ],
        "output": {
            "count": 1,
            "item": 'ifeu:creative_chance_addon'
        }
    })
})