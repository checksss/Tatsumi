const { ShardingManager } = require('discord.js');
const updateFrequency = (10 * 1000);
const updatejs = require('/app/update.js');
const manager = new ShardingManager('./expressbot.js', {
  token: process.env.TOKEN,
  autoSpawn: true
});
console.log("[Express Service] Starting bot shards...");
try {
  manager.spawn(2);
} catch (err) {
}
manager.on('shardCreate', (shard) => console.log(`[Express Service] Shard ${shard.id} launched successfully`));

setInterval(updatejs.run, updateFrequency);