var express = require('express');
var app     = express();

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

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
    if(find != "auto"){
        str.reply(`https://nhentai.net/g/${find}/`);
    }else{
        str.reply("NGENTOT");
    }
}

client.login(process.env.TOKEN);