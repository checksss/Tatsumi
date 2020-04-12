const Discord = require('discord.js');
const client = new Discord.Client();
const active = new Map();

const prefix = '%';
const ownerID = '480987124405895168';

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

client.on('ready', () => {
  client.user.setActivity("%help | https://discord.gg/HKqb6V7"); 
});
client.login("Njk4MDg1MzQ1MDg2MDEzNDgw.XpBz8w.p4g4qhJYURtlaB49d6CquSN-3r0");