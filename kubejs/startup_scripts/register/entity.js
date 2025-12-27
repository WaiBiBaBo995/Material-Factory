StartupEvents.registry('entity_type', event => {
    event.create('materialfactory:full_matter_cluster_shard', 'entityjs:projectile')
        .isAttackable(false)
        .mobCategory('misc')
        .item(item => {
            item.canThrow(true)
        })
        .sized(0.5, 0.5)
        .renderOffset(0, 0, 0)
        .renderScale(1, 1, 1)
        .updateInterval(3)
        .textureLocation(entity => {
            return "materialfactory:textures/item/full_matter_cluster_shard.png"
        })
        .onHitBlock(context => {
            const { entity, result } = context;
            let blockPos = result.getBlockPos();
            let level = entity.level;
            let blockState = level.getBlockState(blockPos);
            let block = blockState.getBlock();
            if (block.id == "materialfactory:antimatter_block") return;
            level.addParticle('minecraft:enchanted_hit', entity.getX(), entity.getY(), entity.getZ(), 0, 0, 0); // 附魔打击效果
            level.addParticle('minecraft:soul', entity.getX(), entity.getY(), entity.getZ(), 0, 0.1, 0); // 向上飘散的灵魂粒子
            // 制造一个小型粒子环
            let particleCount = 8;
            for (let i = 0; i < particleCount; i++) {
            let angle = (i / particleCount) * Math.PI * 2;
            let speed = 0.1;
            let offX = Math.cos(angle) * speed;
            let offZ = Math.sin(angle) * speed;
            entity.getLevel().addParticle('minecraft:witch', entity.getX(), entity.getY(), entity.getZ(), offX, 0.05, offZ);
            }
            entity.getLevel().playSound(null,entity.getX(), entity.getY(), entity.getZ(),"minecraft:entity.dragon_fireball.explode","ambient",1,1)
        })
        .onHitEntity(context => {
            const { entity, result } = context;
            if (result.entity.living) {
                /** @type {Internal.Entity} */
                let livingentity = result.entity
                livingentity.attack(100)
            }
        })
})