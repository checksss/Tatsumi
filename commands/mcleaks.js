const request = require('request');
const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {
    var url = "https://auth.mcleaks.net/v1/redeem";
    if(!args[0]) return message.reply("No, this is not a generator, but it is a MCLeaks token validator.\nTo get a token, go to https://mcleaks.net and click **GET MC ACCOUNT NOW**, then copy the token after the command, and you'll get some infos");
    var mcleaksrequest = {
        token: args[0]
    }
    request(url, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(mcleaksrequest)
    }, function(err, response, req, body, mcleaksrequest) {
        if (err) {
            console.log(err);
            return message.reply("Can't get any MCLeaks information at the moment, try again later");
        }
        console.log(`${message.author.tag} requested MCLeaks account informations, this is the log:\n${response.body}`);
        console.log(`Body request:\n${mcleaksrequest}`);
        var mcleaksparse = JSON.parse(response.body);
        if(mcleaksparse.success == false) return message.reply("Token is invalid, try another one.");
        let commandFile = require("./mcskin.js");
        args[0] = mcleaksparse.result.mcname;
        commandFile.run(client, message, args, ops);
    })
}