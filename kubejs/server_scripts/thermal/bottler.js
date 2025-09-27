ServerEvents.recipes(event =>{
    //水史莱姆球
    event.custom({
    "type": "thermal:bottler",
    "ingredients": [
        {
        "item": 'slimeoverhaul:earth_slime_ball'
        },
        {
        "fluid": "minecraft:water",
        "amount": 250
        }
    ],
    "result": [
        {
        "item": 'slimeoverhaul:water_slime_ball'
        }
    ],
    "energy": 1000,
    "experience": 0.1
    })
})