const Discord = require('discord.js');
const client = new Discord.Client();
const at = require('auto-updater');
const fs = require('fs');
const updateDescription = "**Update v.1.2.4**\n- Added automatic updates, so now the bot will be up to date, planning to add also translations...";

const prefix = process.env.PREFIX;
const ownerID = process.env.OWNERID;

var autoupdater = new at({
    pathToJson: '',
    autoupdate: true,
    checkgit: true,
    jsonhost: 'raw.githubusercontent.com',
    contenthost: 'codeload.github.com',
    progressDebounce: 0,
    devmode: false
});

autoupdater.on('check.out-dated', function(v_old, v){
    console.log("[Express Service] Updating to version " + v + "...");
});

autoupdater.on('update.extracted', function(){
    fs.readdir("./", (err, files) => {
        files.forEach(file => {
            delete require.cache[require.resolve(file)];
        });
    });
    client.users.get(ownerID).send(updateDescription);
});

autoupdater.fire('check');

client.login(process.env.TOKEN);