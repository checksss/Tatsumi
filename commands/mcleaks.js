const request = require('request');
const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {
    var url = "https://auth.mcleaks.net/v1/redeem";
    request(url, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: {
            "token": "GFUGuKqxCDHjdNAz"
        }
    }, function(err, response, req, body) {
        if (err) {
            console.log(err);
            message.reply("Can't get any MCLeaks account, try again later");
        }
        console.log(response);
    })
}