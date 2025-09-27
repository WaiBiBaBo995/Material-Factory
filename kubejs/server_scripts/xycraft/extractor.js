ServerEvents.recipes(event => {
    //通量粉尘
    event.custom({
        "type": "xycraft_machines:extractor",
        "adjacent": [],
        "catalyst": {
            "block": 'minecraft:obsidian',
            "predicate_type": "xycraft_core:block_rule"
        },
        "item_result": {
            "Count": 1,
            "id": 'fluxnetworks:flux_dust'
        },
        "target": {
            "block": 'fluxnetworks:flux_block',
            "predicate_type": "xycraft_core:block_rule"
        },
        "ticks": 40,
        "valid_directions": [
            "down",
            "up",
            "north",
            "south",
            "west",
            "east"
        ]
    })
})