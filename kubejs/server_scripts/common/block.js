BlockEvents.rightClicked("minecraft:dirt", event => {
  if (event.item === 'minecraft:wheat_seeds') {
    event.server.runCommandSilent(`particle dust 0 0.65 0 1 ${event.getBlock().getX()} ${event.getBlock().getY() + 1.2} ${event.getBlock().getZ()} 0.25 0.2 0.25 1 100 force`)
    event.level.playSound(null, event.getBlock().getX(), event.getBlock().getY(), event.getBlock().getZ(), "minecraft:block.grass.place", "blocks", 1, 1);
  }
  if (event.item === 'minecraft:poisonous_potato') {
    event.server.runCommandSilent(`particle dust 1.02 0 1.02 1 ${event.getBlock().getX()} ${event.getBlock().getY() + 1.2} ${event.getBlock().getZ()} 0.25 0.2 0.25 1 100 force`)
    event.level.playSound(null, event.getBlock().getX(), event.getBlock().getY(), event.getBlock().getZ(), "minecraft:block.grass.place", "blocks", 1, 1);
  }
})

BlockEvents.rightClicked('minecraft:netherrack', event => {
  if (event.item === 'minecraft:crimson_fungus') {
    event.server.runCommandSilent(`particle dust 1.02 0 0 1 ${event.getBlock().getX()} ${event.getBlock().getY() + 1.2} ${event.getBlock().getZ()} 0.25 0.2 0.25 1 100 force`)
    event.level.playSound(null, event.getBlock().getX(), event.getBlock().getY(), event.getBlock().getZ(), "minecraft:block.grass.place", "blocks", 1, 1);
  }
  if (event.item === 'minecraft:warped_fungus') {
    event.server.runCommandSilent(`particle dust 0 1.02 1.02 1 ${event.getBlock().getX()} ${event.getBlock().getY() + 1.2} ${event.getBlock().getZ()} 0.25 0.2 0.25 1 100 force`)
    event.level.playSound(null, event.getBlock().getX(), event.getBlock().getY(), event.getBlock().getZ(), "minecraft:block.grass.place", "blocks", 1, 1);
  }
})

BlockEvents.rightClicked("materialfactory:antimatter_block", event => {
  if (event.hand != 'MAIN_HAND') return;
  if (!event.item.isEmpty()) return;
  event.player.setStatusMessage(Text.translatable("message.antimatter_block.arrow", event.block.entity.persistentData.getInt("arrow").toFixed()))
  event.player.swing()
})
/*
BlockEvents.placed(event => {
    let body = "minecraft:cobblestone";
    let bodyphase = "minecraft:stone";
    let phasetime = 100;

    if (event.block.id == body) {
        // 保存方块的位置和所在的世界
        let targetPos = event.block.pos;
        event.server.scheduleInTicks(phasetime, () => {
            let currentBlock = world.getBlock(targetPos);
            // 检查方块是否还是最初的"尸体方块"
            if (currentBlock.id !== body) return
            // 执行第一阶段替换
            event.block.set(bodyphase);
            //增加腐烂时的粒子效果
            // event.level.runCommandSilent(`particle minecraft:ash ${targetPos.x} ${targetPos.y + 1} ${targetPos.z} 0.5 0.5 0.5 0 20 force`);
        });
    }
});
*/
let megablocks = ["megablock", "white_megablock", "orange_megablock", "magenta_megablock", "light_blue_megablock", "yellow_megablock", "lime_megablock", "pink_megablock", "gray_megablock", "light_gray_megablock", "cyan_megablock", "purple_megablock", "blue_megablock", "brown_megablock", "green_megablock", "red_megablock", "black_megablock"]
megablocks.forEach(blockName => {
  BlockEvents.placed(`materialfactory:${blockName}`, (event) => {
    const { block } = event
    let itemDisplay = block.createEntity("item_display")
    let nbt = {
      Tags: [`${blockName}_${block.pos.x}_${block.pos.y}_${block.pos.z}`],
      brightness: {
        sky: 15,
        block: 15
      },
      item: { id: `materialfactory:${blockName}`, Count: 1 },
      transformation: [
        1.0025, 0.0000, 0.0000, 0.0000,
        0.0000, 1.0025, 0.0000, 0.0000,
        0.0000, 0.0000, 1.0025, 0.0000,
        0.0000, 0.0000, 0.0000, 1.0000
      ],
    };
    itemDisplay.moveTo(block.pos)
    itemDisplay.mergeNbt(nbt);
    itemDisplay.spawn()
  })

  BlockEvents.broken(`materialfactory:${blockName}`, (event) => {
    const { block, level } = event
    const targetTag = `${blockName}_${block.pos.x}_${block.pos.y}_${block.pos.z}`
    const entities = level.getEntitiesWithin(AABB.ofBlock(block.pos))
    entities.forEach(entity => {
      if (entity.getTags().contains(targetTag)) {
        entity.kill()
      }
    })
  })
})