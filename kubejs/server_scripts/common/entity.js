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
      player.tell('§c有只土史莱姆生气了！');
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