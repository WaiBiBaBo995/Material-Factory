Ponder.registry((event) => {
	event.create('oak_sapling').scene('kubejs:sapling', '第一颗树', 'kubejs:oak_sapling', (scene) => {
        scene.setSceneOffsetY(-1);
        scene.scaleSceneView(0.8);
        scene.showStructure(0);
        scene.idle(40);
        scene.text(60, '首先，我们需要搭建一个“树”出来');
        scene.idle(10);
        for (let y = 1; y <= 4; y++) {
            scene.world.showSection([3, y, 3], 'up');
            scene.idle(20);
        }

            scene.world.showSection([2, 3, 3], Direction.DOWN);
            scene.world.showSection([3, 3, 2], Direction.DOWN);
            scene.world.showSection([3, 3, 4], Direction.DOWN);
            scene.world.showSection([4, 3, 3], Direction.DOWN);
                scene.idle(3);
            
        scene.idle(40);

        scene.text(60, '搭建完毕后，空手右键枯萎的灌木即可变成树苗').attachKeyFrame();
        scene.showControls(20, [3, 1.5, 3], 'left').rightClick();
        scene.overlay.showOutline('red', 1, [3, 1, 3], 20);
        scene.idle(20);

        for (let x = 0; x <= 6; x++) {
            for (let y = 1; y <= 7; y++) {
                for (let z = 0; z <= 6; z++) {
                    scene.world.destroyBlock([x, y, z]);
                }
            }
        }

        scene.world.createItemEntity([3.5, 1.5, 3.5], Direction.UP, 'oak_sapling');
        scene.idle(5);
        scene.showControls(30, [3, 1, 3], "up").withItem('oak_sapling')
        scene.idle(40);
        scene.text(100, '快去尝试叭喵~');
    })
})