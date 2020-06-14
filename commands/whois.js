const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {
    var whois = message.mentions.members.first();
    if(!whois) {
		try {
			if (!message.guild.members.get(args.slice(0, 1).join(' '))) throw new Error('Couldn\'t get a Discord user with this userID!');
			user = message.guild.members.get(args.slice(0, 1).join(' '));
			user = user.user;
		} catch (error) {
			return message.reply('Couldn\'t get a Discord user with this userID!');
		}
	}

    const whoisEmbed = new Discord.MessageEmbed()
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
    ])
    .setFooter(`${whois.user.tag}`, `${whois.user.avatarURL}`);
    message.channel.send(whoisEmbed);
}