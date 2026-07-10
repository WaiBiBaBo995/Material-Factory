// thanks for FalAut
if (Platform.isClientEnvironment()) {
    let $ModernFixClient = Java.loadClass('org.embeddedt.modernfix.ModernFixClient');
    let $SystemToast = Java.loadClass('net.minecraft.client.gui.components.toasts.SystemToast');
    let $SimpleSoundInstance = Java.loadClass('net.minecraft.client.resources.sounds.SimpleSoundInstance');
    let $SoundInstance = Java.loadClass('net.minecraft.client.resources.sounds.SoundInstance');

    let isStartup = false;

    ForgeEvents.onEvent('net.minecraftforge.event.TickEvent$ClientTickEvent', (event) => {
        if (event.phase != 'END' || isStartup) return;

        let gameStartTimeSeconds = $ModernFixClient.gameStartTimeSeconds.toFixed(1);
        if (gameStartTimeSeconds == -1) return;
        let randomValue = Math.floor(Math.random() * 100) + 1
        Client.toasts.addToast(
            new $SystemToast(
                'narrator_toggle',
                Text.translate('message.startup.time', gameStartTimeSeconds),
                Text.translate('message.startup.performance', randomValue.toFixed(0))
            )
        );

        let randomSource = $SoundInstance.createUnseededRandom();
        Client.soundManager.play(
            new $SimpleSoundInstance('entity.experience_orb.pickup', 'master', 0.25, 1.0, randomSource, 0, 0, 0)
        );

        isStartup = true;
    });
}
