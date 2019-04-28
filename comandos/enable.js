const Discord = require("discord.js") 
module.exports.run = async (bot, message, args, prefix, database) => { 
const db = database
if(!message.member.hasPermission("MANAGE_GUILD") && message.author.id !== process.env.OWNERID) return message.channel.send("tu nem perm tem")
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
if(args[0] === "addbot"){
      if(!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== process.env.OWNERID) return message.channel.send('vc n tem permissao para realizar este comando')
        database.ref(`Servidores/${message.guild.id}/addbot/abilitado`).once("value").then(async a => {
            if(a.val() === "Sim") return message.channel.send("Este modulo ja esta abilitado")

        database.ref(`Servidores/${message.guild.id}/addbot`).set({
            abilitado: "Sim"
        })
        message.channel.send('MODULO ABILITADO')
    })
}
} 
exports.config = { 
   name: "enable", 
   alias: ["abilitar"], 
   ops: "não", 
   description: "Comando para abilitar algum modulo ou comando", 
   categoria: "Moderation", 
   usage: "<prefix>enable <comando e/ou modulo>" 
}