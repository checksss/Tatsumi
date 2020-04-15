exports.run = async (client, message, args, ops) => {
	if (!args[0]) return message.reply('You haven\'t given an amount of messages which should be deleted!');
    if (isNaN(args[0])) return message.reply('The amount parameter isn`t a number!');
    if (args[0] > 100) return message.reply('You can`t delete more than 100 messages at once!');
    if (amount < 1) return message.reply('You have to delete at least 1 message!');

    if(!message.author.hasPermission('ADMINISTRATOR') || !message.author.hasPermmission('MANAGE_MESSAGES')) return message.reply("You haven't the permission to execute this command!");
    
    await msg.channel.messages.fetch({ limit: amount }).then(messages => {
        message.channel.bulkDelete(messages)
    });
}