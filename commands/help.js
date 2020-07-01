const prefix = process.env.PREFIX;
const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {
  helpMsg = new Discord.MessageEmbed()
  .setTitle(process.env.BOT_NAME)
  .setDescription("Thank you for using **" + process.env.BOT_NAME + "**, here are all the commands.\nIf you have an issue with a command, report it to us using `report bug`")
  .addField("🔊 Music", "`play`, `leave`, `pause`, `resume`, `search`, `skip`, `musiclink`, `volume`")
  .addField("👮‍ Moderation", "`clear` (or `purge`), `ban`, `kick`, `nick`, `mute`, `unmute`, `serverinfo`, `whois`, `destroy`")
  .addField("🔥 Fun and Misc", "`help`, `invite`, `8ball`, `meme`, `fotd`, `ping`")
  .addField("🚀 Utility", "`mail`, `covid19`, `report`, `say`")
  .addField("🔧 Administration (advanced users and bot owner only)", "`eval`, `dev/...`")
  .addField("made by checks#4145")
  .setColor('RANDOM')
  message.channel.send(helpMsg);
}
