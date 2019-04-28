const Discord = require("discord.js") 
module.exports.run = async (bot, message, args, prefix, database) => { 
const db = database
const server = message.guild.id
if(!args[0]) return message.channel.send(`Escreva um prefixo`)
if(args[1]) return message.reply(`Sem espaço`)
if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("Vc n tem permissão")
db.ref(`Servidores/${server}/prefixo`).set({
        prefixo: args[0]
})
 message.channel.send(`Prefixo setado para: ${args[0]}`)
  
}

exports.config = {
  name: "setprefix",
  alias: [],
  description: "Comando para setar o prefixo do servidor",
  usage: "<prefix>setprefix <prefixo>",
  categoria: "Moderation"
}