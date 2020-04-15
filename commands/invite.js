exports.run = (client, message, args, ops) => {
	message.reply("I'm sending you the invite to add the bot in your Discord server");
	message.author.send("https://discordapp.com/api/oauth2/authorize?client_id=698085345086013480&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.gg%2FHKqb6V7&scope=bot");
}