Ponder.registry((event) => {
	event.create(['minecraft:phantom_membrane','minecraft:phantom_spawn_egg']).scene("kubejs:phantom", "幻翼", "kubejs:phantom", (scene) => {
        scene.setSceneOffsetY(-1);
        scene.scaleSceneView(0.8);
        scene.showStructure(0);
        scene.idle(40);
        scene.text(60, '首先，我们需要搭建一个“幻翼”出来');
        scene.idle(10);
        scene.world.showSection([3, 2, 3], Direction.UP)
        scene.idle(30)
        scene.world.showSection([3, 2, 2], Direction.SOUTH)
        scene.world.showSection([2, 2, 3], Direction.EAST)
        scene.world.showSection([4, 2, 3], Direction.WEST)
        scene.world.showSection([3, 2, 4], Direction.NORTH)

        scene.idle(30);
        scene.world.showSection([3, 3, 3], Direction.DOWN)
        scene.idle(40);
        scene.text(60, '搭建完毕后，用皮革右键恶魔南瓜头').attachKeyFrame();
        scene.showControls(20, [3, 2.5, 2], 'left').rightClick().withItem("minecraft:leather");
        scene.overlay.showOutline('red', 1, [3, 2, 2], 20);
        scene.idle(40);

        for (let x = 0; x <= 6; x++) {
            for (let y = 1; y <= 7; y++) {
                for (let z = 0; z <= 6; z++) {
                    scene.world.destroyBlock([x, y, z]);
                }
            }
        }

        scene.world.createEntity("minecraft:phantom", [3, 2.5, 3])

        scene.idle(40);
        scene.text(100, '快去尝试叭喵~');
    })
})