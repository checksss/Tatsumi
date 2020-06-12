const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {
    if(!args[0]) return message.reply("What type of report do you want to make? `bug` or `suggestion`?");
    var description = args.slice(1).join(" ");
    if(!description) return message.reply("What do you want to report or suggest?");
    if(args[0] == "bug") {
        const bugEmbed = new Discord.MessageEmbed()
        .setAuthor("Reported by: " + message.author.tag, message.member.avatarURL)
        .setDescription(description)
        .setFooter(process.env.BOT_NAME);
        client.channels.cache.get("698571108139532369").send(bugEmbed);
    }
    if(args[0] == "suggestion") {
        const suggestEmbed = new Discord.MessageEmbed()
        .setAuthor("Suggested by: " + message.author.tag, message.member.avatarURL)
        .setDescription(description)
        .setFooter(process.env.BOT_NAME);
        client.channels.cache.get("698571152888430672").send(suggestEmbed);
    }
}