const Discord = require("discord.js") 

module.exports.run = async (bot, message, args, prefix, database) => { 
const db = database
if(!message.member.hasPermission("MANAGE_GUILD") && message.author.id !== process.env.OWNERID) return message.channel.send("tu nem perm tem")
if(args[0] === "comando" || args[0] === "command"){
db.ref(`Servidores/${message.guild.id}/commandEnable`).update({
      hein: null
})
message.channel.send("DITO E FEITO <:velho:558845017662291979>")
}
if(args[0] === "welcome"){
      db.ref(`Servidores/${message.guild.id}/guildMemberAdd/welcome`).update({
            enable: null
      })
      message.channel.send("DITO E FEITO <:velho:558845017662291979>")
}
if(args[0] === "addbot"){
      if(!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== process.env.OWNERID) return message.channel.send('vc n tem permissao para realizar este comando')
        database.ref(`Servidores/${message.guild.id}/addbot/abilitado`).once("value").then(async a => {
            if(a.val() === null) return message.channel.send("Este modulo ja esta desabilitado")

        database.ref(`Servidores/${message.guild.id}/addbot`).set({
            abilitado: null
        })
        message.channel.send("DITO E FEITO <:velho:558845017662291979>")
    })
}
} 
exports.config = { 
   name: "disable", 
   alias: ["desabilitar"], 
   ops: "não", 
   description: "Comando para desabilitar algum modulo ou comando", 
   categoria: "Moderation", 
   usage: "<prefix>enable <comando e/ou modulo>" 
}
