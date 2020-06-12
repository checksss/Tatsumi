const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {
    if(!args[0]) return message.reply("What type of report do you want to make? `bug` or `suggestion`?");
    var description = args.slice(1).join(" ");
    if(!description) return message.reply("What do you want to report or suggest?");
    if(args[0] == "bug") {
        const bugEmbed = new Discord.MessageEmbed()
        .setAuthor("Reported by: " + message.author.tag, message.author.avatarURL)
        .setDescription(description)
        .setColor('RED')
        .setFooter(process.env.BOT_NAME);
        client.channels.cache.get("698571108139532369").send(bugEmbed);
    }
    if(args[0] == "suggestion") {
        const suggestEmbed = new Discord.MessageEmbed()
        .setAuthor("Suggested by: " + message.author.tag, message.author.avatarURL)
        .setDescription(description)
        .setColor('18f02a')
        .setFooter(process.env.BOT_NAME);
        client.channels.cache.get("698571152888430672").send(suggestEmbed);
    }
    message.reply("Your report was officially sent to the support server, thank you for reporting/giving us a suggestion ;), because it really helps us to improve the bot");
}