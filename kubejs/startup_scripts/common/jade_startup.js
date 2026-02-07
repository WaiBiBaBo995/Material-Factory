let $WailaClientRegistration;
let $WailaBlockAccessor;
if (Platform.isClientEnvironment()) {
    $WailaClientRegistration = Java.loadClass('snownee.jade.impl.WailaClientRegistration');
    $WailaBlockAccessor = Java.loadClass('snownee.jade.api.BlockAccessor');
}
 
StartupEvents.postInit(event => {
    if (!Platform.isClientEnvironment()) return;
 
    //botania魔力显示
    $WailaClientRegistration.INSTANCE.addTooltipCollectedCallback(0, (tooltip, accessor) => {
        if (!(accessor instanceof $WailaBlockAccessor)) return;
        if (accessor.getBlockEntity() == null) return;
        if (accessor.getBlockEntity().getCurrentMana == null || accessor.getBlockEntity().getMaxMana == null) return;
        let addToTooltip = comp => tooltip['add(net.minecraft.network.chat.Component)'](comp);
        let mana = accessor.getBlockEntity().getCurrentMana();
        let cap = accessor.getBlockEntity().getMaxMana();
        addToTooltip(Text.aqua(`${Text.translate('jade.tooltip.mana').getString()}: ${mana}/${cap}`));
    });
 
    //botania绑定
    $WailaClientRegistration.INSTANCE.addTooltipCollectedCallback(0, (tooltip, accessor) => {
        if (!(accessor instanceof $WailaBlockAccessor)) return;
        if (accessor.getBlockEntity() == null) return;
        let blockEntity = accessor.getBlockEntity();
        if (blockEntity.getMana == null || blockEntity.getMaxMana == null || blockEntity.getBindingPos == null) return;
        let addToTooltip = comp => tooltip['add(net.minecraft.network.chat.Component)'](comp);
        let pos = blockEntity.getBindingPos();
        let mana = blockEntity.getMana();
        let cap = blockEntity.getMaxMana();
        addToTooltip(
            Text.aqua(
                `${
                    pos == null
                        ? Text.translate('jade.tooltip.notbound').getString()
                        : `${Text.translate('jade.tooltip.boundto').getString()} ${pos.x} ${pos.y} ${pos.z}`
                }`
            )
        );
        addToTooltip(Text.aqua(`${Text.translate('jade.tooltip.mana').getString()}: ${mana}/${cap}`));
    });
 
    //botania符文祭坛
    $WailaClientRegistration.INSTANCE.addTooltipCollectedCallback(0, (tooltip, accessor) => {
        if (!(accessor instanceof $WailaBlockAccessor)) return;
        if (accessor.block.id != 'botania:runic_altar') return;
        let addToTooltip = comp => tooltip['add(net.minecraft.network.chat.Component)'](comp);
        let mana = accessor.getBlockEntity().getCurrentMana();
        let cap = accessor.getBlockEntity().manaToGet;
        addToTooltip(Text.aqua(`${Text.translate('jade.tooltip.mana').getString()}: ${mana}/${cap}`));
    });

    //魔源显示
    $WailaClientRegistration.INSTANCE.addTooltipCollectedCallback(0, (tooltip, accessor) => {
        if (!(accessor instanceof $WailaBlockAccessor)) return;
        if (!accessor.block.id.startsWith("ars_nouveau:")) return;
        if (accessor.getBlockEntity() == null) return;
        const blockEntity = accessor.getBlockEntity();
        
        // 检查是否有 source 属性
        if (blockEntity.source == null) return;
        
        let addToTooltip = comp => tooltip['add(net.minecraft.network.chat.Component)'](comp);
        let source = blockEntity.source;
        
        addToTooltip(Text.lightPurple(`${Text.translate('jade.tooltip.source').getString()}: ${source}`));
    });
});