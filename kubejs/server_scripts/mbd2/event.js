/**
 * 坩埚交互
 * @param {Internal.BlockRightClickedEventJS} event
 * @param {Internal.Block_} crucible
 * @param {Internal.ItemStack_} inputItem
 * @param {Internal.FluidStackJS_} outputFluid
 * @returns
 */
const handleCrucibleInteraction = (event, crucible, inputItem, outputFluid) => {
    const { hand, block, item, player} = event;
    if (hand != 'MAIN_HAND') return;    

    if (block == crucible) {
        const itemCap = block.entity.getCapability(ForgeCapabilities.ITEM_HANDLER).resolve().get();
        const fluidCap = block.entity.getCapability(ForgeCapabilities.FLUID_HANDLER).resolve().get();

        if (item.hasTag(inputItem) && !player.isCrouching()) {
            if (itemCap.getStackInSlot(0).isEmpty() || itemCap.getStackInSlot(0).is(item)) {
                if (itemCap.getStackInSlot(0).count < 64) {
                    itemCap.insertItem(item.withCount(1), false);
                    item.count--;
                }
                player.swing();
                event.cancel();
            }
        }

        if (item.isEmpty() && player.isCrouching()) {
            player.give(itemCap.getStackInSlot(0).withCount(1));
            itemCap.extractItem(0, 1, false);
            player.swing();
        }

        if (item == 'bucket' && fluidCap.getFluidInTank(0).amount >= 1000) {
            fluidCap.drain(Fluid.of(outputFluid), 'execute');
            player.give(Fluid.of(outputFluid).fluid.bucket);
            item.count--;
            player.swing();
        }

        if (item == "woodenbucket:wooden_bucket" && fluidCap.getFluidInTank(0).amount >= 1000) {
            let isEmpty = !item.nbt || !item.nbt.Fluid || item.nbt.Fluid.Amount === 0;
            if (isEmpty) {
                fluidCap.drain(Fluid.of(outputFluid), 'execute');
                item.nbt.merge({Fluid:{Amount:1000,FluidName:`${outputFluid}`}});
                player.swing()
            }
        }
    }
};

BlockEvents.rightClicked((event) => {
    handleCrucibleInteraction(event, 'materialfactory:oak_crucible', 'materialfactory:melting_item', 'water');
});


BlockEvents.rightClicked('materialfactory:unbonded_machine_frame_pity', event =>{
  const { hand, block, item, player } = event;
    if (hand != 'MAIN_HAND') return;
        const fluidCap = block.entity.getCapability(ForgeCapabilities.FLUID_HANDLER).resolve().get();

    if (item == 'industrialforegoing:latex_bucket' && fluidCap.getFluidInTank(0).amount == 0) {
        fluidCap.fill(Fluid.of('industrialforegoing:latex'), 'execute');
        player.give("bucket");
        item.count--;
        player.swing();
    }

    if (item == 'thermal:latex_bucket' && fluidCap.getFluidInTank(0).amount == 0) {
        fluidCap.fill(Fluid.of('thermal:latex'), 'execute');
        player.give("bucket");
        item.count--;
        player.swing();
    }

    if (item == "woodenbucket:wooden_bucket" && fluidCap.getFluidInTank(0).amount == 0) {
            let isFluid = item.nbt && item.nbt.Fluid && item.nbt.Fluid.FluidName == 'industrialforegoing:latex';
            if (isFluid) {
                fluidCap.fill(Fluid.of('industrialforegoing:latex'), 'execute');
                item.nbt.remove('Fluid')
                player.swing()
            }
        }

    if (item == "woodenbucket:wooden_bucket" && fluidCap.getFluidInTank(0).amount == 0) {
        let isFluid = item.nbt && item.nbt.Fluid && item.nbt.Fluid.FluidName == 'thermal:latex';
        if (isFluid) {
            fluidCap.fill(Fluid.of('thermal:latex'), 'execute');
            item.nbt.remove('Fluid')
            player.swing()
        }
    }
})