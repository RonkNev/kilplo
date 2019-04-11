const Discord = require("discord.js") 
const fs = require("fs") 
module.exports.run = async (bot, message, args, prefix) => { 
let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Não foi possivel achar o usuário!");
    let kReason = args.join(" ").slice(2);
    if(!kReason) return message.channel.send("Informe a rasão pfv.")
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Vc n tem permissão garai!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Usuário kickado", `${kUser} with ID ${kUser.id}`)
    .addField("Kickado por", `<@${message.author.id}> com o id: ${message.author.id}`)
    .addField("Kickado em", message.channel)
    .addField("Horário", `${moment(message.createdAt).format("LLLL")}`)
    .addField("Rasão", kReason)

    let log = message.guild.channels.find(c => c.name === "log-kick");
    if(!log){
    message.channel.send(kickEmbed);
    message.guild.member(kUser).kick(kReason);
    return
}
message.guild.member(kUser).kick(kReason);
    log.send(kickEmbed); 
} 
exports.config = { 
name: "kick", 
alias: ["kickar"] ,
description: "Comando para kickar membros do servidor",
admin: "sim",
categoria: "Moderation",
usage: ")kick <id>\n)kick <menção>"
}