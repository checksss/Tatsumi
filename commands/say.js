exports.run = (client, message, args, ops) => {
    const toSay = args.slice(0).join(' ');
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have the permission to execute this command!");
    if(!toSay) return message.reply("What you want to make me say?");
    message.channel.messages.fetch({ limit: 1 }).then(messages => {
            message.channel.bulkDelete(messages)
    });
    message.channel.send(toSay);
}
