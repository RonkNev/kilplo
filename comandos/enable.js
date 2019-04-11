const Discord = require("discord.js") 
module.exports.run = async (bot, message, args, prefix, database) => { 
const db = database
if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("tu nem perm tem")
if(args[0] === "comando" || args[0] === "command"){
db.ref(`Servidores/${message.guild.id}/commandEnable`).update({
      hein: "sim"
})
message.channel.send("DITO E FEITO <:velho:558845017662291979>")
}
if(args[0] === "welcome"){
      db.ref(`Servidores/${message.guild.id}/guildMemberAdd/welcome`).update({
            enable: "true"
      })
      message.channel.send("DITO E FEITO <:velho:558845017662291979>")
}
} 
exports.config = { 
   name: "enable", 
   alias: ["abilitar"], 
   ops: "não", 
   description: "Comando para abilitar algum modulo ou comando", 
   categoria: "Moderation", 
   usage: ")enable <comando e/ou modulo>" 
}