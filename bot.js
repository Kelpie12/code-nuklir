const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();

client.on("ready", () => {
    console.log("deployed");
});

const PREFIX = "-";

client.on("message", msg => {
    if(msg.content.includes(`${PREFIX}code`)){
        findCode(msg);
    }
});

function findCode(str){
    const find = str.content.substr(6);
    str.reply(`https://nhentai.net/g/${find}/`);
}

client.login(process.env.TOKEN);