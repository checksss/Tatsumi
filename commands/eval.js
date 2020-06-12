exports.run = (client, message, args, ops) => {

    if(message.author.id !== ops.ownerID) return message.reply("**Only the bot's creator can use this command!**");

    const Discord = require('discord.js');
    const post = require('node-superfetch');

    const evalEmbed = new Discord.MessageEmbed()
    .addField("Input", "```\n" + args.join(" ") + "```");

    try {
        const code = args.join("");
        let evaled;
        if(code.includes(`SECRET`) || code.includes(`TOKEN`) || code.includes(`process.env`)) {
            evaled = "Eval can't use environment variables, sorry";
        } else {
            evaled = eval(code);
        }
        if(typeof evaled !== "string") evaled = require('util').inspect(evaled, {depth: 0});
        let output = clean(evaled);
        if(output.length > 1024) {
            const body = await post("https://hastebin.com/documents").send(output);
            evalEmbed.addField("Output", `https://hastebin.com/${body.key}.js`).setColor(0x7289DA);
            if(body.key == undefined) return message.reply("At the moment Hastebin is under maintenance, try again later");
        } else {
            evalEmbed.addField("Output", "```js\n" + output + "```").setColor(0x7289DA);
        }
        message.channel.send(evalEmbed);
    } catch(err) {
        let err = clean(error);
        if (err.length > 1024) {
            const body = await post("https://hastebin.com/documents").send(err);
            evalEmbed.addField("Output", `https://hastebin.com/${body.key}.js`).setColor("RED");
        } else {
            evalEmbed.addField("Output", "```js\n" + output + "```").setColor("RED");
        }
        message.channel.send(evalEmbed);
    }
}

function clean(string) {
    if(typeof text === "string") {
        return string.replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203))
    } else {
        return string;
    }
}