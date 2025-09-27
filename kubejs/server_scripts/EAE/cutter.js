ServerEvents.recipes(event =>{
    event.shapeless(Item.of('actuallyadditions:empowered_restonia_crystal_block', 1),['9x appflux:charged_redstone']);
    event.custom({
    "type": "expatternprovider:circuit_cutter",
    "fluid_input": {
        "amount": 100,
        "ingredient": {
        "fluid": "minecraft:water"
        }
    },
    "item_input": {
        "amount": 1,
        "ingredient": {
        "item": 'actuallyadditions:empowered_restonia_crystal_block'
        }
    },
    "output": {
        "count": 9,
        "item": 'appflux:printed_energy_processor'
    }
    })
})