//priority: 900

const fastAirDropEvent = {
  name: "materialfactory:airdrop",
  displayName: "快速空投",
  description: "每10天一次的快速空投",
  chance: 1.0,
  minDistance: 64,
  maxDistance: 160,
  size: 10,
  checkBlocks: ["minecraft:air"],
  requireBlockBelow: "minecraft:sand",
  itemDespawnTime: 400,
  stage: null,
  disableStage: null,
  priority: 900,

  /**
   * 
   * @param {*} event 
   * @param {Internal.Player_} player 
   * @param {Internal.BlockContainerJS_} location 
   * @param {*} name 
   */
  execute(event, player, location, name) {
    let eventServer = player.getServer();
    var offset = location.pos.subtract(player.blockPosition());

    let relative = { message: "", blocks: 0 };
    if (Math.abs(offset.z) > Math.abs(offset.x)) {
      relative.blocks = Math.abs(offset.z);
      relative.message = offset.z > 0 ? "南" : "北";
    } else {
      relative.blocks = Math.abs(offset.x);
      relative.message = offset.x > 0 ? "东" : "西";
    }

    // 使用翻译键的title指令 - 空投即将到达
    level.runCommandSilent(`title ${player.getName()} title {"translate":"event.airdrop.fast.incoming.title","color":"green"}`);
    level.runCommandSilent(`title ${player.getName()} subtitle {"translate":"event.airdrop.fast.incoming.subtitle","with":["${relative.message}","${relative.blocks}"]}`);
    level.runCommandSilent(`title ${player.getName()} times 10 40 10`);

    player.tell(Text.translate("event.airdrop.fast_incoming", [relative.message, relative.blocks]));

    let spawned = false;

    const level = player.getLevel();

    const structureManager = level.getStructureManager();
    const raft = structureManager.getOrCreate("ftb:overworld/airdrops/basic_raft");

    const palettes = raft.getPalettes();

    let blocks = [];

    for (let i = 0; i < palettes.size(); i++) {
      for (let j = 0; j < palettes[i].blocks().size(); j++) {
        let blck = palettes[i].blocks()[j];
        blocks.push({ pos: blck.pos(), state: blck.state() });
      }
    }

    let entities = [];
    let startTime = eventServer.getTickCount();
    
    // 清理旧的空投实体
    level.getEntities().forEach((entity) => {
      if(entity.getType().toString() == 'minecraft:block_display' && entity.tickCount > 20*60*2){
        entity.discard();
      }
    })

    // 生成高度：200格
    const spawnHeight = 200;
    // 目标高度：64格
    const targetHeight = 64;
    // 下落速度：比普通空投快
    const fallSpeed = -0.2;

    for (let i = 0; i < blocks.length; i++) {
      let blockData = blocks[i];
      if (!blockData || blockData.state.id == "minecraft:air") continue;

      let entity = level.createEntity("minecraft:block_display");

      let stateNBT = NBT.toTagCompound({});
      let propsNBT = NBT.toTagCompound({});

      blockData.state.getProperties().forEach((property) => {
        propsNBT.putString(property.name, property.value(blockData.state).value().toString());
      });

      stateNBT.put("Name", blockData.state.id);
      stateNBT.put("Properties", propsNBT);

      entity.setNbt({
        block_state: stateNBT,
        Motion: [0, fallSpeed, 0],
        view_range: NBT.intTag(9999),
        teleport_duration: NBT.intTag(10), // 更短的传送持续时间，看起来更流畅
        tags: NBT.stringTag("fast_airdrop"),
      });

      entity.x = blockData.pos.x + location.pos.x;
      entity.y = blockData.pos.y + spawnHeight; // 从200格开始
      entity.z = blockData.pos.z + location.pos.z;
      entity.spawn();

      entities.push({
        block: blockData,
        falling: entity,
      });
    }

    let handler = entities[0];
    const $Double = Java.loadClass("java.lang.Double");

    let checkPositionInterval = setInterval(() => {
      try {
        entities.forEach((entity) => {
          let entPos = entity.falling.position();
          entity.falling["moveTo(double,double,double)"](
            new $Double(entPos.x + 0),
            new $Double(entPos.y + fallSpeed), // 使用更快的下落速度
            new $Double(entPos.z + 0)
          );
        });

        let y = handler.falling.position().y;

        // 检测是否到达目标高度64格
        if (y < targetHeight + 0.5) {
          if (!spawned) {
            spawned = true;
            // 使用翻译键的title指令 - 空投已着陆
            level.runCommandSilent(`title ${player.getName()} title {"translate":"event.airdrop.fast.landed.title","color":"yellow"}`);
            level.runCommandSilent(`title ${player.getName()} subtitle {"translate":"event.airdrop.fast.landed.subtitle","color":"green"}`);
            level.runCommandSilent(`title ${player.getName()} times 10 40 10`);

            var placedBlocks = [];
            entities.forEach((entity) => {
              var blockpos = entity.block.pos.offset(location.pos.x, targetHeight, location.pos.z);
              let block = level.getBlock(blockpos.x, blockpos.y, blockpos.z);

              if (block.id == "minecraft:air") {
                level.setBlockAndUpdate(blockpos, entity.block.state);
                placedBlocks.push({x: blockpos.x, y: blockpos.y, z: blockpos.z, id: entity.block.state.id});

                if (entity.block.state.id == "minecraft:chest") {
                  let block = level.getBlock(blockpos);
                  block.setEntityData({ LootTable: "ftbstuff:blocks/raft_crate" });
                }
              }

              entity.falling.discard();
              clearInterval(checkPositionInterval);
            });

            if (!eventServer.persistentData.contains("landed_airdrops"))
              eventServer.persistentData.put("landed_airdrops", NBT.listTag());

            var list = eventServer.persistentData.getList("landed_airdrops", 10)
            var airdropTag = NBT.toTagCompound({})
            var blocksTag = NBT.listTag()

            airdropTag.putInt("timer", 0);
            placedBlocks.forEach(block => {
              var blockTag = NBT.toTagCompound({})

              blockTag.putInt("x", block.x)
              blockTag.putInt("y", block.y)
              blockTag.putInt("z", block.z)
              blockTag.putString("id", block.id)

              blocksTag.add(blockTag)
            })

            airdropTag.put("blocks", blocksTag);
            list.add(airdropTag)
            eventServer.persistentData.put("landed_airdrops", list);
          }
        }

        // 超时保护：2分钟
        if (eventServer.getTickCount() - startTime >= 20*60*2) {
          console.log("Fast airdrop did not land! Clearing anyway...");
          clearInterval(checkPositionInterval);
          entities.forEach((entity) => {
            if (entity && entity.falling) entity.falling.discard();
          });
        }
      } catch (error) {
        console.error("Fast airdrop error:", error);
        clearInterval(checkPositionInterval);
        entities.forEach((entity) => {
          if (entity && entity.falling) entity.falling.discard();
        });
      }
    }, 50); // 保持50ms的更新间隔，但下落速度更快
  },
};

// 10天定时器系统
ServerEvents.loaded((event) => {
  let sPData = event.server.persistentData;
  
  // 初始化10天空投计时器
  if (!sPData.contains("fast_airdrop_timer"))
    sPData.putLong("fast_airdrop_timer", 0);
    
  if (!sPData.contains("last_fast_airdrop_day"))
    sPData.putInt("last_fast_airdrop_day", -1);
});

ServerEvents.tick((event) => {
  const server = event.server;
  const level = server.overworld();
  
  // 获取当前游戏天数（Minecraft一天=24000 tick）
  const currentTime = level.getTime();
  const currentDay = Math.floor(currentTime / 24000);
  
  let lastDay = server.persistentData.getInt("last_fast_airdrop_day");
  let timer = server.persistentData.getLong("fast_airdrop_timer");
  
  // 检查是否是新的一天
  if (currentDay !== lastDay) {
    server.persistentData.putInt("last_fast_airdrop_day", currentDay);
    
    // 每10天触发一次
    if (currentDay % 10 === 0 && currentDay > 0) {
      triggerFastAirDrop(server);
    }
  }
  
  server.persistentData.putLong("fast_airdrop_timer", timer + 1);
});

function triggerFastAirDrop(server) {
  console.log("触发10天快速空投事件");
  
  let players = server.players;
  if (players.length === 0) {
    console.log("没有在线玩家，跳过快速空投");
    return;
  }
  
  // 选择随机玩家
  let chosenPlayer = players[Math.floor(Math.random() * players.length)];
  if (chosenPlayer.isCreative() || chosenPlayer.isSpectator()) {
    console.log("玩家处于创造或观察模式，跳过快速空投");
    return;
  }
  
  if (!chosenPlayer.alive) {
    console.log("玩家已死亡，跳过快速空投");
    return;
  }
  
  // 位置检查逻辑（复用原系统的位置检查）
  let level = chosenPlayer.getLevel();
  let playerPos = new BlockPos(chosenPlayer.x, chosenPlayer.y, chosenPlayer.z);
  
  // 检查是否在基地范围内（1000格内不触发）
  if (Math.abs(playerPos.x) < 1000 && Math.abs(playerPos.z) < 1000) {
    console.log("玩家在基地范围内，跳过快速空投");
    return;
  }
  
  let maxAttempts = 15;
  let tries = 0;
  let spawnFound = false;
  let spawnLocation = null;
  
  while (tries < maxAttempts && !spawnFound) {
    let randomLoc = new Ku.Level(level).getRandomLocation(
      playerPos,
      fastAirDropEvent.minDistance,
      fastAirDropEvent.maxDistance
    );
    
    randomLoc = new BlockPos(randomLoc.x, 191, randomLoc.z);
    
    var corners = [
      randomLoc.offset(0, 0, 0),
      randomLoc.offset(8, 0, 0),
      randomLoc.offset(-8, 0, 0),
      randomLoc.offset(0, 0, 8),
      randomLoc.offset(0, 0, -8),
      randomLoc.offset(16, 0, 16),
      randomLoc.offset(-16, 0, 16),
      randomLoc.offset(16, 0, -16),
      randomLoc.offset(-16, 0, -16)
    ];
    
    let validLocation = true;
    corners.forEach(corner => {
      // 检查水面
      if (level.getBlock(corner).blockState.block.id != "minecraft:water") {
        validLocation = false;
        return;
      }
      
      // 检查空中障碍（从64格到200格）
      for (let i = 64; i < 200; i++) {
        let block = level.getBlock(corner.offset(0, i, 0));
        if (block.blockState.block.id != "minecraft:air") {
          validLocation = false;
          return;
        }
      }
    });
    
    if (validLocation) {
      spawnFound = true;
      spawnLocation = { pos: randomLoc, locationInfo: null };
      console.log("找到快速空投位置: " + randomLoc);
      break;
    }
    
    tries++;
  }
  
  if (spawnFound && spawnLocation) {
    // 执行快速空投事件
    fastAirDropEvent.execute({server: server}, chosenPlayer, spawnLocation, "fast_airdrop");
    
    // 向所有玩家广播消息
    players.forEach(player => {
      if (player != chosenPlayer) {
        // 使用翻译键的title指令广播给其他玩家
        level.runCommandSilent(`title ${player.getName()} title {"translate":"event.airdrop.fast.broadcast.title","color":"green"}`);
        level.runCommandSilent(`title ${player.getName()} subtitle {"translate":"event.airdrop.fast.broadcast.subtitle","color":"yellow"}`);
        level.runCommandSilent(`title ${player.getName()} times 10 60 10`);
      }
    });
  } else {
    console.log("未能找到合适的快速空投位置");
    chosenPlayer.tell(Text.translate("event.airdrop.fast.failed"));
  }
}