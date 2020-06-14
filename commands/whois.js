const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {
    let user = message.mentions.members.first();
    if(!user) return message.reply("You must mention a member");

    const whoisEmbed = new Discord.MessageEmbed()
    .setAuthor(user.user.tag, user.user.avatarURL)
    .addField("User information", [
        `**ID:** ${user.id}`,
        `**Tag:** ${user.user.tag}`
        `**Registered on:** ${user.user.createdAt}`,
    ])
    .addField("Server information", [
        `**Display name:** ${message.guild.members.find('id', user.id).displayName}`,
        `**Joined at:** ${message.guild.members.find('id', user.id).joinedAt}`,
        `**Current roles:** ${message.guild.members.find('id', user.id).roles.join(", ")}`
    ])
}