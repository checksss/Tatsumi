const { ShardingManager } = require('discord.js');
const shard = new ShardingManager('./expressbot.js', {
  token: process.env.TOKEN,
  autoSpawn: true
});

shard.spawn(2);