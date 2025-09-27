ServerEvents.recipes(event => {
    event.custom({
        "type": "thoriumreactors:blasting",
        "ticks": 200,
        "temperature": 800,
        "input": {
            "slot-0": {
            "tag": 'forge:ores/nickel'
            }
        },
        "output": {
            "slot-0": {
            "tag": 'forge:ingots/nickel'
            },
            "slot-1": {
            "tag": 'forge:nuggets/cobalt'
            },
            "chance": 30
        }
    })
})