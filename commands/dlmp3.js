const ytdl = require('ytdl-core');
const fs = require('fs');

exports.run = async (client, message, args, ops) => {
    if (!args[0]) return message.reply("Please search or input an url following the command!");

    let validate = await ytdl.validateURL(args[0]);
    if (!validate) {
        let commandFile = require("./dev/searchdl.js");
        commandFile.run(client, message, args, ops);
    }

    let info = await ytdl.getInfo(args[0]);

    let filename = Math.random().toString(36).slice(-8);

    ytdl(args[0], { filter: 'audioonly', format: 'mp3'})
    .pipe(fs.createWriteStream(`/app/commands/tempdl/${filename}.mp3`), function(err) {
        if (err) {
            console.log(err);
            return message.reply("There was an error executing this command");
        }
    });

    message.reply("Wait a few seconds...");

    setTimeout(function(){
        let commandFile = require("./clear.js");
        args[0] = "1";
        commandFile.run(client, message, args, ops);
    }, 9000);

    setTimeout(function(){
        message.channel.send('**' + info.title + '**', {files: [{attachment: `/app/commands/tempdl/${filename}.mp3`, name: info.title + '.mp3'}]});
    }, 10000);
}