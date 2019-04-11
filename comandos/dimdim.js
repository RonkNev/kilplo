const Discord = require("discord.js") 
module.exports.run = async (bot, message, args, prefix, database) => { 
const member = message.mentions.users.first() || bot.users.get(args[0]) || message.author
database.ref(`Membros/${member.id}/dimdim/dimdim`).once("value").then(async dinhero => {
const dimdim = dinhero.val()

let dim;
if(!dimdim || dimdim === "0") dim = `**${member.username}** n tem **NADA** de dim dim`
if(dimdim && dimdim !== "0" && dimdim && member === message.author) dim = `TU TEM \`${dimdim}\` de dim dim`
if(dimdim && dimdim !== "0" && dimdim && member !== message.author) dim = `**${member.username}** tem \`${dimdim}\` de dim dim`


message.channel.send(`${dim}`)
}) 
} 
exports.config = { 
   name: "dimdim", 
   alias: ["dinhero"], 
   ops: "nao", 
   description: "Comando para ver quanto tu tem de dim dim", 
   categoria: "Fun", 
   usage: ")dimdim \n)dimdim <menção>" 
}