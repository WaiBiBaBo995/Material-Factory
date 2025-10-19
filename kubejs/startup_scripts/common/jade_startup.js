//参考FalAut的代码
const $BlockEntity = Java.loadClass('net.minecraft.world.level.block.entity.BlockEntity');
JadeEvents.onCommonRegistration((event) => {
    const manaMethods = ['currentMana', 'maxMana', 'mana', 'manaToGet'];

    event.blockDataProvider('materialfactory:mana_display', $BlockEntity).setCallback((tag, accessor) => {
        const { blockEntity } = accessor;

        manaMethods.forEach((key) => {
            if (blockEntity[key] != null) {
                tag.putInt(key, blockEntity[key]);
            }
        });
    });

    event.blockDataProvider('materialfactory:source_display', $BlockEntity).setCallback((tag, accessor) => {
        const { blockEntity } = accessor;

        if (blockEntity.source != null) {
            tag.putInt('source', blockEntity.source);
        }
    });
});
