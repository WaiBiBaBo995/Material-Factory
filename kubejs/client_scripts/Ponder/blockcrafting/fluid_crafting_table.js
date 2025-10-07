Ponder.registry((event) => {
	event.create('ifeu:fluid_crafting_table').scene('kubejs:fluid_crafting_table', '流体工作台', 'kubejs:fluid_crafting_table', (scene) => {
        scene.setSceneOffsetY(-1);
        scene.scaleSceneView(0.8);
        scene.showStructure(0);
        scene.idle(40);
        scene.text(60, '首先，我们需要搭建一个“流体工作台”出来');
        scene.idle(10);

        let block1 = [[2, 1, 2],[2, 1, 3],[2, 1, 4],
                      [3, 1, 2],[3, 1, 3],[3, 1, 4],
                      [4, 1, 2],[4, 1, 3],[4, 1, 4],
                      [2, 2, 2],[2, 2, 3],[2, 2, 4],
                      [3, 2, 2],          [3, 2, 4],
                      [4, 2, 2],[4, 2, 3],[4, 2, 4],
                      [2, 3, 2],[2, 3, 3],[2, 3, 4],
                      [3, 3, 2],          [3, 3, 4],
                      [4, 3, 2],[4, 3, 3],[4, 3, 4],];
                block1.forEach((pos) => {
				scene.world.showSection(pos, Direction.UP);
				scene.idle(2)
			})
        scene.idle(20);
            scene.world.showSection([3, 2, 3], Direction.UP);
        scene.idle(10)
            scene.world.showSection([3, 3, 3], Direction.UP);
        scene.idle(20);
        scene.text(40, "此处玻璃可以使用其他种类或模组的玻璃", [2, 2.5, 2]).attachKeyFrame()
        scene.idle(50);
        scene.text(60, '搭建完毕后，用任意一种扳手右键上面的流体漏斗即可变成流体工作台').attachKeyFrame();
        scene.idle(20);
        scene.showControls(20, [3, 3.5, 3], 'left').rightClick().withItem("pipez:wrench");
        scene.overlay.showOutline('red', 1, [3, 3, 3], 20);
        scene.idle(50);

        for (let x = 0; x <= 6; x++) {
            for (let y = 1; y <= 4; y++) {
                for (let z = 0; z <= 6; z++) {
                    scene.world.destroyBlock([x, y, z]);
                }
            }
        }


        scene.world.createItemEntity([3.5, 1.5, 3.5], Direction.UP, 'ifeu:fluid_crafting_table');
        scene.idle(5);
        scene.showControls(30, [3, 1, 3], "up").withItem('ifeu:fluid_crafting_table')

        scene.idle(40);
        scene.text(100, '快去尝试叭喵~');
    })
})