const ytdl = require('ytdl-core');
const fs = require('fs');

exports.run = async (client, message, args, ops) => {
    if (!args[0]) return message.reply("Please search or input an url following the command!");

    let validate = await ytdl.validateURL(args[0]);
    if (!validate) {
        let commandFile = require("./dev/searchdl.js");
        return commandFile.run(client, message, args, ops);
    }

    let info = await ytdl.getInfo(args[0]);

    let filename = Math.random().toString(36).slice(-8);

    function ytdlmp3() {
        return Promise
        .all[(
            ytdl(args[0], { filter: 'audioonly', quality: 'highestaudio', maxReconnect: 50 })
            .pipe(fs.createWriteStream(`/app/commands/tempdl/${filename}.mp3`), function(err) {
                if (err) {
                    console.log(err);
                    return message.reply("There was an error executing this command");
                }
            })
        )]
        .then(function(){
            message.channel.send('**' + info.title + '**', {files: [{attachment: `/app/commands/tempdl/${filename}.mp3`, name: info.title + '.mp3'}]});
        })
        .catch(error => console.error(error));
    }

    ytdlmp3();

    setTimeout(function(){
        fs.unlinkSync(`/app/commands/tempdl/${filename}.mp3`);
    }, 60000);
}