exports.run = (client, message, args, ops) => {
	let activity = await (args.join(' '), function(err, res) {
		client.user.setActivity(`${args[0]}`);
		message.channel.send(`Successfully set status to: **${args[0]}**`);
		console.log(`Successfully set status to: ${args[0]}`);
	});
}