exports.run = (client, message, args, ops) => {
    var ping = "**" + Date.now() - message.createdTimestamp + " ms**";
    message.channel.send("Your ping is " + ping);
}