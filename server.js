const { ShardingManager } = require('discord.js');
const shard = new ShardingManager('./expressbot.js', {
  token: process.env.TOKEN,
  autoSpawn: true
});

try {
  shard.spawn(2);
} catch (err) {
}