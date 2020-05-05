const Discord = require('discord.js');
const client = new Discord.Client();
const active = new Map();
pingFrequency = (30 * 1000);

const prefix = "%";
const ownerID = '480987124405895168';

client.on("guildCreate", guild => {
    console.log("Joined a new guild: " + guild.name);
    let joinedChannel = client.channels.cache.get("702228736988413954");
    if(joinedChannel) joinedChannel.send("Joined a new guild: " + "**" + guild.name + "**");
});

client.on("guildDelete", guild => {
    console.log("Left a guild: " + guild.name);
    let joinedChannel = client.channels.cache.get("702228736988413954");
    if(joinedChannel) joinedChannel.send("Left a guild: " + "**" + guild.name + "**");
});

client.on('message', message => {

	let args = message.content.slice(prefix.length).trim().split(' ');
	let cmd = args.shift().toLowerCase();

	if(message.author.bot) return;
	if(!message.content.startsWith(prefix)) return;

	try {
		let ops = {
			ownerID: ownerID,
            active: active
		}
		let commandFile = require(`./commands/${cmd}.js`);
		commandFile.run(client, message, args, ops);
	} catch (e) {
		console.log(e.stack);
	}
});

function getGuildsNumber() {
	client.shard.fetchClientValues('guilds.cache.size')
	.then(results => {
		return client.user.setActivity(`%help | %invite | ${results.reduce((prev, guildCount) => prev + guildCount, 0)} servers`);
	})
	.catch(console.error);
}

client.on('ready', () => {
	getGuildsNumber();
    client.setInterval(getGuildsNumber, pingFrequency);
});
client.login(process.env.TOKEN);
