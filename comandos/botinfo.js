const Discord = require("discord.js") 
const fs = require("fs") 
const moment = require("moment");
moment.locale("pt-BR");
const os = require('os')
const cpuStat = require("cpu-stat");

module.exports.run = async (bot, message, args, prefix, database) => { 
    let { version } = require("discord.js");
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
          return console.log(err);
        }
let embed = new Discord.RichEmbed()
.setTitle("INFORMAÇÕES DO BOT")
.setDescription(`Username: **${bot.user.username}** \n` +
`Id: **${bot.user.id}** \n` +
`Criado em: **${moment(bot.user.createdAt).format("LLL")}** \n` +
`Total de comandos: **${bot.commands.filter(c => !c.config.ops).size}** \n` +
`Ram: **${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB** \n` +
`Criador: <@370007502643003403> \n` +
`Link para add: **[clique aq](https://discordapp.com/oauth2/authorize?=&client_id=561980818906677259&scope=bot&permissions=8)** \n` +
``)
.setColor("BLUE")
.setFooter('POR: ' + message.author.tag.toUpperCase(), message.author.displayAvatarURL)
message.channel.send(embed)
}) 
}
exports.config = { 
name: 'botinfo', 
alias: [],
description: "Algumas informações sobre o bot",
usage: "<prefix>botinfo",
categoria: "Fun"
}