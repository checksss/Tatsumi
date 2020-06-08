const request = require('request');
const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {
    var password = args[1];
    if(!args[0]) return message.reply("Insert the username you want to use");
    if(!args[1]) {
        password = Math.random().toString(36).slice(-8);
    }
    var url = "https://pddimp.yandex.ru/api2/admin/email/add";
    var pddtoken = "CJ2KUWBDSR476JZ2QYPG5D6VKXQYBTWY3TCS5MEI5VBQWVJBV6PA";
    var domain = "expressmail.tk";
    request(url, {
        headers: {
            "PddToken": pddtoken,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        body: `domain=${domain}&login=${args[0]}&password=${password}`,
    }, function(err, response, req, body) {
        if(err) {
            console.log(err);
            return message.reply("Can't create mail at the moment, try again later...");
        }
        mailparse = JSON.parse(response.body);
        console.log(response);
        message.channel.messages.fetch({ limit: 1 }).then(messages => {
            message.channel.bulkDelete(messages)
        });
        if(mailparse.success == "ok") {
            message.reply("I'm sending you a private message with the new mailbox informations");
            const mailEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('New mailbox informations')
            .setURL(`https://mail.${domain}`)
            .setDescription(`WARNING: You shouldn't use this mail for normal use, but for privacy use, you've been warned`)
            .addField("Website URL", `https://mail.${domain}`)
            .addField("Login", `${args[0]}@${domain}`)
            .addField("Password", `${args[0]}`)
            .setFooter("Powered by Yandex", "https://alternativebk.com/wp-content/uploads/2020/02/5e434e2ed746d.png");
            message.author.send(mailEmbed);
        }
        if(mailparse.success == "error") {
            if(mailparse.error == "passwd-tooshort") message.reply("Password is too short!");
            if(mailparse.error == "occupied") message.reply("Username is not available");
        }
    })
}