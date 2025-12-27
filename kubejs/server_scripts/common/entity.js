EntityEvents.death("darkdoppelganger:dark_doppelganger", event => {
  if(event.source.actual.isPlayer()) {
    let killer = event.getSource()
      killer.player.give('materialfactory:anon')
    }
})

EntityEvents.hurt('slimeoverhaul:earth_slime', event => {
  if(event.source.actual?.player) {
    const hurter = event.getSource();
    const player = hurter.player;
    const cooldownTime = 15 * 20;
    const lastHit = parseInt(player.persistentData.get('lastEarthSlimeHit')) || 0;
    const currentTime = event.level.time;
    
    if(currentTime - lastHit >= cooldownTime) {
        if (Math.random() < 0.2) {
      event.entity.potionEffects.add('jump_boost', 80, 5);
      event.entity.potionEffects.add('strength', 80, 2);
      player.tell(Text.translate('message.materialfactory.earth_slime_buff'));
    }
      if (Math.random() < 0.5){
      player.potionEffects.add('regeneration', 100, 0);
      player.persistentData.put('lastEarthSlimeHit', currentTime);
      }
    }
  }
});

EntityEvents.spawned('ad_astra:tier_7_rocket', event => {
  event.entity.playSound("materialfactory:gugugaga", 0.1, 1.0)
})

const $ProjectileImpactEvent = Java.loadClass("net.minecraftforge.event.entity.ProjectileImpactEvent")
const $HitResult = Java.loadClass("net.minecraft.world.phys.HitResult")

NativeEvents.onEvent($ProjectileImpactEvent, (event) => {
  /** @type {Internal.Projectile_} */
  let projectile = event.getProjectile();
  if (projectile.getType() != "materialfactory:full_matter_cluster_shard") return;
  let hitResult = event.getRayTraceResult ? event.getRayTraceResult() : event.ray;
  if (hitResult.getType() != $HitResult.Type.BLOCK) return;
  let blockPos = hitResult.getBlockPos();
  let level = projectile.level;
  if (level.isClientSide()) return;
  let blockState = level.getBlockState(blockPos);
  /** @type {Internal.BlockContainerJS} */
  let block = blockState.getBlock();
  if (block.id != "materialfactory:antimatter_block") return;
  /** @type {Internal.BlockEntity} */
  let blockEntity = level.getBlockEntity(blockPos);
  let currentValue = blockEntity.persistentData.getInt("arrow");
  let newValue = currentValue + 1;
  blockEntity.persistentData.putInt("arrow", newValue);
  blockEntity.setChanged();
  let blockX = blockPos.getX() + 0.5;
  let blockY = blockPos.getY() + 0.5;
  let blockZ = blockPos.getZ() + 0.5;
  // 创建 item_display 实体
  let itemDisplay = level.createEntity("minecraft:item_display");
  itemDisplay.moveTo(hitResult.getLocation())

  // 初始 NBT 数据 - 小尺寸
  let initialNbt = {
    Tags: ["arrow"],
    item: { id: "avaritia:eternal_singularity", Count: 1 },
    billboard: "center",
    transformation: [
      0.1000, 0.0000, 0.0000, 0.0000,
      0.0000, 0.1000, 0.0000, 0.0000,
      0.0000, 0.0000, 0.1000, 0.0000,
      0.0000, 0.0000, 0.0000, 1.0000
    ],
    interpolation_duration: 20,
    start_interpolation: 0
  };

  itemDisplay.mergeNbt(initialNbt);
  itemDisplay.spawn()
  let enlargeNbt = {
    transformation: [
      0.8000, 0.0000, 0.0000, 0.0000,
      0.0000, 0.8000, 0.0000, 0.0000,
      0.0000, 0.0000, 0.8000, 0.0000,
      0.0000, 0.0000, 0.0000, 1.0000
    ],
    start_interpolation: 0
  };
  itemDisplay.mergeNbt(enlargeNbt);
  level.playSound(null, blockPos.x, blockPos.y, blockPos.z, "minecraft:block.portal.trigger", "blocks", 0.3, 2)

  // 在 20 ticks 后缩小
  level.server.scheduleInTicks(20, () => {
    let shrinkNbt = {
      transformation: [
        0.1000, 0.0000, 0.0000, 0.0000,
        0.0000, 0.1000, 0.0000, 0.0000,
        0.0000, 0.0000, 0.1000, 0.0000,
        0.0000, 0.0000, 0.0000, 1.0000
      ],
      start_interpolation: 0
    };
    itemDisplay.mergeNbt(shrinkNbt);
  });

  level.spawnParticles(
      "sculk_soul",
      true,
      blockX, blockY, blockZ,
      0.1, 0.05, 0.1,
      30,
      0.3
    );
  // 延迟10刻后丢弃箭矢和item_display实体
  projectile.discard();
  level.server.scheduleInTicks(40, () => {
    if (!itemDisplay.isRemoved()) {
      itemDisplay.discard();
    }
  });

  if (newValue >= 54) {
    level.setBlock(blockPos, Block.getBlock("materialfactory:artificial_star").defaultBlockState(), 2);
    level.getBlock(blockPos).createExplosion().strength(1).explosionMode("block").explode();
    // 添加烟雾粒子效果
    // 烟雾粒子效果1 - 大量火焰粒子
    level.spawnParticles(
        "amendments:fireball_explosion_emitter", 
        true, 
        blockX, blockY, blockZ,
        0, 0, 0, // 速度向量
        1,        // 粒子数量
        0         // 速度
      );
    // 烟雾粒子效果2 - 大量灰色烟雾向上飘散
    level.spawnParticles(
      "minecraft:smoke",
      true,
      blockX, blockY, blockZ,
      0, 0.1, 0,
      50,
      0.2
    );

    // 烟雾粒子效果3 - 少量大型烟雾
    level.spawnParticles(
      "minecraft:large_smoke",
      true,
      blockX, blockY, blockZ,
      0, 0.05, 0,
      15,
      0.15
    );

    // 烟雾粒子效果4 - 飘散的烟雾粒子
    level.spawnParticles(
      "minecraft:poof",
      true,
      blockX, blockY, blockZ,
      0.1, 0.05, 0.1,
      30,
      0.3
    );
  }
});