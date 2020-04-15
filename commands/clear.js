exports.run = (client, message, args, ops) => {
	if (!args[0]) return msg.reply('You haven\'t given an amount of messages which should be deleted!');
    if (isNaN(args[0])) return msg.reply('The amount parameter isn`t a number!');
    if (args[0] > 100) return msg.reply('You can`t delete more than 100 messages at once!');
    if (amount < 1) return msg.reply('You have to delete at least 1 message!');

    if(message.author.hasPermission('ADMINISTRATOR') || message.author.hasPermmission('MANAGE_MESSAGES')) await msg.channel.messages.fetch({ limit: amount }).then(messages => {
        msg.channel.bulkDelete(messages)
    });
}