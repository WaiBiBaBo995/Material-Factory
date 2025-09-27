Ponder.registry((event) => {
	event.create(['minecraft:warden_spawn_egg','minecraft:sculk_shrieker','minecraft:sculk_vein']).scene("kubejs:warden", "监守者", "kubejs:warden", (scene) => {
        scene.setSceneOffsetY(-1);
        scene.scaleSceneView(0.8);
        scene.showStructure(0);
        scene.idle(40);
        scene.text(60, '首先，我们需要搭建一个“监守者”出来');
        scene.idle(10);
        scene.world.showSection([3, 1, 3], Direction.UP)
        scene.idle(8)
        scene.world.showSection([3, 2, 3], Direction.UP)
        scene.idle(10)
        scene.world.showSection([2, 2, 3], Direction.EAST)
        scene.world.showSection([4, 2, 3], Direction.WEST)
        scene.idle(20);
        scene.world.showSection([3, 3, 3], Direction.DOWN)
        scene.idle(40);
        scene.text(60, '搭建完毕后，用幽匿脉络右键幽匿催发体').attachKeyFrame();
        scene.showControls(20, [3, 2.5, 3], 'left').rightClick().withItem("minecraft:sculk_vein");
        scene.overlay.showOutline('red', 1, [3, 2, 3], 20);
        scene.idle(40);

        for (let x = 0; x <= 6; x++) {
            for (let y = 1; y <= 7; y++) {
                for (let z = 0; z <= 6; z++) {
                    scene.world.destroyBlock([x, y, z]);
                }
            }
        }

        scene.world.createEntity("minecraft:warden", [3, 1.5, 3])

        scene.idle(40);
        scene.text(100, '快去尝试叭喵~');
    })
})