const { ShardingManager } = require('discord.js');
const shard = new ShardingManager('./tamarro.js', {
  token: process.env.TOKEN2,
  autoSpawn: true
});

shard.spawn(2);

shard.on('launch', shard => console.log(`[SHARD] Shard ${shard.id}/${shard.totalShards}`));
