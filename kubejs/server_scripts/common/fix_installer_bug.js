BlockEvents.rightClicked(event => {
    let { item, player, block } = event
    if (!block.hasTag('materialfactory:anti_install')) return;
    if (player.isCrouching()) {
        if (item.hasTag('mekanism:installers')) {
            player.setStatusMessage(Text.translatable("message.bugfix.antiinstaller"))
            event.cancel()
        }
    }
})