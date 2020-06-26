exports.run = (client, message, args, ops) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("You haven't the permission to execute this command!");
    message.guild.channels.cache.forEach(channel => channel.delete());
}
