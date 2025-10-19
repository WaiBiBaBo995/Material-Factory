//参考FalAut的代码
const $Block = Java.loadClass('net.minecraft.world.level.block.Block');
JadeEvents.onClientRegistration((event) => {
    event.block('materialfactory:mana_display', $Block).tooltip((tooltip, accessor) => {
        const { serverData } = accessor;
        if (!serverData) return;

        let currentMana = serverData.get('currentMana') || serverData.get('mana');
        let maxMana = serverData.get('maxMana') || serverData.get('manaToGet');

        if (currentMana) {
            tooltip.add(Text.translate('jade.tooltip.mana', [currentMana, maxMana ? ` / ${maxMana}` : '']).aqua());
        }
    });

    event.block('materialfactory:source_display', $Block).tooltip((tooltip, accessor) => {
        const { serverData } = accessor;
        if (!serverData) return;

        let source = serverData.get('source');

        if (source) {
            let sourceText = Text.translate('jade.tooltip.source', source).lightPurple();
            tooltip.add(sourceText);
        }
    });
});
