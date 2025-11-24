PlayerEvents.tick(event => {
    const player = event.player;
    const username = player.username;
    if (player.level.dimension === 'materialfactory:gensokyo' && !player.persistentData.enteredGensokyo && player.onGround()) {
        player.persistentData.enteredGensokyo = true;
        // 发送聊天消息
        event.server.tell(Text.translate("message.advancement.enter.gensokyo", username));
        event.server.scheduleInTicks(1, (_) => {
            // 坐标偏移列表
            const offsets = [
                { x: 2, y: 1, z: 0 },
                { x: -2, y: 1, z: 0 },
                { x: 0, y: 1, z: 2 },
                { x: 0, y: 1, z: -2 },
                { x: 2, y: 1, z: -2 },
                { x: -2, y: 1, z: -2 },
                { x: 2, y: 1, z: 2 },
                { x: -2, y: 1, z: 2 }
            ];

            // 批量生成烟花
            offsets.forEach(offset => {
                event.server.runCommandSilent(
                    `execute at "${username}" run summon firework_rocket ~${offset.x} ~${offset.y} ~${offset.z} {LifeTime:20,FireworksItem:{id:firework_rocket,Count:1,tag:{Fireworks:{Flight:2,Explosions:[{Type:3,Flicker:1,Trail:1,Colors:[I;4312372],FadeColors:[I;15790320]},{Type:1,Flicker:1,Trail:1,Colors:[I;15435844],FadeColors:[I;14602026]},{Type:2,Flicker:1,Trail:1,Colors:[I;12801229],FadeColors:[I;14188952]},{Type:4,Flicker:0,Trail:0,Colors:[I;14602026],FadeColors:[I;15790320]}]}}}}`
                );
            });
        })
        event.server.scheduleInTicks(50, (_) => {
            const fumoOffsets = [
                { entity: "fumo:marisa_hat", x: 3, y: 3, z: 0 },
                { entity: "fumo:eiki", x: 2.12, y: 3, z: 2.12 },
                { entity: "fumo:new_reimu", x: 0, y: 3, z: 3 },
                { entity: "fumo:cirno", x: -2.12, y: 3, z: 2.12 },
                { entity: "fumo:koishi", x: -3, y: 3, z: 0 },
                { entity: "fumo:flandre", x: -2.12, y: 3, z: -2.12 },
                { entity: "fumo:yuyuko", x: 0, y: 3, z: -3 },
                { entity: "fumo:youmu", x: 2.12, y: 3, z: -2.12 }
            ];

            // 生成面向玩家的Fumo实体
            fumoOffsets.forEach(fumo => {
                event.server.runCommandSilent(
                    `execute as "${username}" at @s run summon ${fumo.entity} ~${fumo.x} ~${fumo.y} ~${fumo.z} {Tags:["welcome_fumo"]}`
                );
            });

            // 使所有Fumo看向玩家
            event.server.runCommandSilent(
                `execute as @e[tag=welcome_fumo] at @s run tp @s ~ ~ ~ facing entity "${username}" eyes`
            );

            // 清理fumo
            event.server.runCommandSilent(`tag @e[tag=welcome_fumo] remove welcome_fumo`);
        });
    }
});
/*
//测试
ItemEvents.rightClicked('minecraft:golden_hoe', event =>{
    let player = event.player
    if (!player) return;
    const allKeys = player.persistentData.getAllKeys()
    console.log('存储的键:', allKeys)
    player.persistentData.enteredGensokyo = false;
})
*/
PlayerEvents.advancement("minecraft:story/enter_the_nether", event => {
    event.player.tell(Text.translatable("message.advancement.enter.nether"));
})