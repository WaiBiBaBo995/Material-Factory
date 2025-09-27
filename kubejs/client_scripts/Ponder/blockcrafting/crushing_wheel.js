Ponder.registry((event) => {
	event.create('create:crushing_wheel').scene('kubejs:crushing_wheel', '手搓粉碎轮', 'kubejs:crushing_wheel', (scene) => {
        scene.setSceneOffsetY(-1);
        scene.scaleSceneView(0.8);
        scene.showStructure(0);
        scene.idle(40);
        scene.text(60, '首先，我们需要搭建一个“粉碎轮”出来');
        scene.idle(10);

        let block1 = [[1, 1, 2],[1, 1, 3],[1, 1, 4],
                      [2, 1, 1],[3, 1, 1],[4, 1, 1],
                      [5, 1, 2],[5, 1, 3],[5, 1, 4],
                      [2, 1, 5],[3, 1, 5],[4, 1, 5],
                      [2, 1, 2],[4, 1, 2],
                      [2, 1, 4],[4, 1, 4]];
                block1.forEach((pos) => {
				scene.world.showSection(pos, Direction.UP);
				scene.idle(2)
			})
        scene.idle(20);
            scene.world.showSection([3, 1, 2], Direction.UP);
            scene.world.showSection([2, 1, 3], Direction.UP);
            scene.world.showSection([3, 1, 4], Direction.UP);
            scene.world.showSection([4, 1, 3], Direction.UP);
        scene.idle(5);
        scene.text(40, "此处四个橡木木板可替换为其他种类的木板", [3, 2.5, 2]).attachKeyFrame()

        scene.idle(70);
        scene.world.showSection([3, 1, 3], Direction.DOWN);
        scene.text(40, "此处石头仅可为‘石头,安山岩,闪长岩,花岗岩’这四种", [3, 2.5, 3]).attachKeyFrame()
        scene.idle(70);

        scene.text(60, '搭建完毕后，空手右键中间的石头即可变成粉碎轮').attachKeyFrame();
        scene.idle(20);
        scene.showControls(20, [3, 2.5, 3], 'left').rightClick();
        scene.overlay.showOutline('red', 1, [3, 1, 3], 20);
        scene.idle(30);

        for (let x = 0; x <= 6; x++) {
                for (let z = 0; z <= 6; z++) {
                    scene.world.destroyBlock([x, 1, z]);
                }
        }

        scene.world.createItemEntity([3.5, 1.5, 3.5], Direction.UP, 'create:crushing_wheel');
        scene.idle(5);
        scene.showControls(30, [3, 1, 3], "up").withItem('create:crushing_wheel')

        scene.idle(40);
        scene.text(100, '快去尝试叭喵~');
    })
})