exports.run = async (client, message, args, ops) => {

    if(message.author.id !== ops.ownerID) return message.reply("**Only the bot's creator can use this command!**");
    const { inspect } = require('util');

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