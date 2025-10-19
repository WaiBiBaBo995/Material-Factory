CapabilityEvents.blockEntity((event) => {
    event.attach(
        'xycraft_machines:valve',
        BotaniaCapabilityBuilder.MANA.blockEntity()
            .receiveMana((sf, amount) => {
                let fluidCap = sf.getCapability(ForgeCapabilities.FLUID_HANDLER).orElse(null);
                if (fluidCap == null) return 0; // 添加空值检查
                let result = fluidCap.fill(Fluid.of('materialfactory:liquid_mana', 0.1 * amount), 'EXECUTE');
                return result > 0 ? amount : 0; // 确保返回接收的魔力量
            })
            .getCurrentMana((sf) => {
                let fluidCap = sf.getCapability(ForgeCapabilities.FLUID_HANDLER).orElse(null);
                if (fluidCap == null) return 0; // 添加空值检查
                return fluidCap.getFluidInTank(0).getAmount();
            })
            .isFull((sf) => {
                let fluidCap = sf.getCapability(ForgeCapabilities.FLUID_HANDLER).orElse(null);
                if (fluidCap == null) return true; // 添加空值检查，返回true表示已满
                return fluidCap.getTankCapacity(0) <= fluidCap.getFluidInTank(0).getAmount();
            })
    );
});