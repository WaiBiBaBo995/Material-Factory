// 震动强度（角度单位：度）
let shakeIntensity = 1.0;
const DECAY = 0.92;
const MAX_SHAKE = 10.0;

/**
 * 外部调用：触发一次画面震动
 * @param {number} intensity 震动力度，会累加到当前强度
 */
global.addShake = (intensity) => {
    shakeIntensity = Math.min(shakeIntensity + intensity, MAX_SHAKE);
};

// 每客户端 tick 衰减震动强度
const $ClientTickEvent = Java.loadClass('net.minecraftforge.event.TickEvent$ClientTickEvent')
NativeEvents.onEvent($ClientTickEvent, (event) => {
    if (event.phase !== 'END') return;
    shakeIntensity *= DECAY;
    if (shakeIntensity < 0.01) shakeIntensity = 0.0;
});

// 修改相机角度
const $ComputeCameraAngles = Java.loadClass('net.minecraftforge.client.event.ViewportEvent$ComputeCameraAngles')
NativeEvents.onEvent($ComputeCameraAngles, (event) => {
    if (shakeIntensity <= 0) return;

    const level = Client.level;
    if (!level) return;

    // 平滑的时间 = 游戏时间 + 部分刻
    const time = level.time + Minecraft.getInstance().getPartialTick();

    // 多正弦波叠加，产生不规则抖动
    const yawOffset = (Math.sin(time * 1.3) * 1.2 + Math.sin(time * 2.7) * 0.8) * shakeIntensity;
    const pitchOffset = (Math.cos(time * 1.7) * 1.0 + Math.cos(time * 3.1) * 0.6) * shakeIntensity;
    const rollOffset = Math.sin(time * 2.3) * 0.5 * shakeIntensity;

    event.setYaw(event.getYaw() + yawOffset);
    event.setPitch(event.getPitch() + pitchOffset);
    event.setRoll(event.getRoll() + rollOffset);
});