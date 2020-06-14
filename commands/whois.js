const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {
    let whois = message.mentions.members.first();
    if(!whois) return message.reply("You must mention a member");

    const whoisEmbed = new Discord.MessageEmbed()
    .setFooter(`${whois.user.tag}`, `${whois.user.avatarURL}`)
    .setTimestamp()
    .setColor('RANDOM')
    .addField("User information", [
        `**ID:** ${whois.id}`,
        `**Tag:** ${whois.user.tag}`
        `**Registered on:** ${whois.user.createdAt}`,
    ])
    .addField("Server information", [
        `**Display name:** ${message.guild.members.find('id', whois.id).displayName}`,
        `**Joined at:** ${message.guild.members.find('id', whois.id).joinedAt}`,
        `**Current roles:** ${message.guild.members.find('id', whois.id).roles.join(", ")}`
    ]);
    message.channel.send(whoisEmbed);
}