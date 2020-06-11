const ytdl = require('ytdl-core');
const fs = require('fs');
const ffmpeg = require('ffmpeg');

exports.run = async (client, message, args, ops) => {
    if (!args[0]) return message.reply("Please input an url following the command!");

    let validate = await ytdl.validateURL(args[0]);

    if(!validate) return message.reply("Please input a valid YouTube URL");

    let info = await ytdl.getInfo(args[0]);

    let filename = Math.random().toString(36).slice(-8);

    let stream = ytdl(args[0], { filter: 'audioonly', format: 'mp3'})
    .pipe(fs.createWriteStream(`tempdl/${filename}.mp3`));

    setTimeout(message.channel.send('**' + info.title + '**', {files: [{attachment: './tempdl/' + filename + '.mp3', name: info.title + '.mp3'}]}), 5 * 1000);
    
    setTimeout(fs.unlinkSync('./tempdl/' + filename + '.mp3'), 600 * 1000);
}