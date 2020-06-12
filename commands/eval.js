exports.run = async (client, message, args, ops) => {

    if(message.author.id !== ops.ownerID) return message.reply("**Only the bot's creator can use this command!**");
    const { inspect } = require('util');

    function sendEmbed(title, description) {
        if(!title || !description) return message.reply("Usage: `sendEmbed('My title', 'My description');`");
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
        .setTitle(title)
        .setDescription(description)
        .setColor("RANDOM");
        message.channel.send(embed);
    }

    function execute(command, input) {
        if(!command || !input) return message.reply("Usage: `execute(command, args);`");
        let commandFile = require(`./${command}.js`);
        let args = input;
        commandFile.run(client, message, args, ops);
    }

    try {
        const start = process.hrtime();
        let output = eval(args.join(" "));
        const difference = process.hrtime(start);
        if(typeof output !== "string") output = inspect(output, {depth: 2});
    } catch (error) {
        console.log(error);
        message.reply("Error: " + error);
    }
}