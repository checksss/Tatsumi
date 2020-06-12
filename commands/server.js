exports.run = (client, message, args, ops) => {
    const Discord = require('discord.js');

    const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
    const members = message.guild.members.cache;
    const channels = message.guild.channels.cache;
    const emojis = message.guild.emojis.cache;

    const serverinfoEmbed = new Discord.MessageEmbed()
    .setTitle(`${message.guild.name} server informations`)
    .setColor('RANDOM')
    .setDescription('Here you can see the informations about **' + message.guild.name + '**')
    .setThumbnail(message.guild.iconURL({ dynamic: true}))
    .addField('General', [
        `**Name:** ${message.guild.name}`,
        `**ID:** ${message.guild.id}`,
        `**Owner:** ${message.guild.owner.user.tag} (${message.guild.ownerID})`,
        `**Region:** ${message.guild.region}`,
        `**Boost Level:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,
        `\u200b`
    ])
    .addField('Statistics', [
        `**Role Count:** ${roles.length}`,
        `**Emoji Count:** ${emojis.size}`,
        `**Regular Emoji Count:** ${emojis.filter(emoji => !emoji.animated).size}`,
        `**Animated Emoji Count:** ${emojis.filter(emoji => emoji.animated).size}`,
        `**Member Count:** ${message.guild.memberCount}`,
        `**Humans:** ${members.filter(member => !member.user.bot).size}`,
        `**Bots:** ${members.filter(member => member.user.bot).size}`,
        `**Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`,
        `**Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`,
        `**Boost Count:** ${message.guild.premiumSubscriptionCount || '0'}`,
        `\u200b`
    ])
    .addField('Presence', [
        `**Online:** ${members.filter(member => member.presence.status === 'online')}`,
        `**Idle:** ${members.filter(member => member.presence.status === 'idle')}`,
        `**Do Not Disturb:** ${members.filter(member => member.presence.status === 'dnd')}`,
        `**Offline:** ${members.filter(member => member.presence.status === 'offline')}`,
        `\u200b`
    ])
    .addField(`Roles [${roles.length - 1}]`, roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : 'None')
    .setTimestamp();
    message.channel.send(serverinfoEmbed);
}