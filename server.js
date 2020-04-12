const { ShardingManager } = require('discord.js');
const shard = new ShardingManager('./tamarro.js', {
  token: "Njk4MDg1MzQ1MDg2MDEzNDgw.XpBz8w.p4g4qhJYURtlaB49d6CquSN-3r0",
  autoSpawn: true
});

shard.spawn(2);

shard.on('launch', shard => console.log(`[SHARD] Shard ${shard.id}/${shard.totalShards}`));
