const Discord = require("discord.js") 
const fs = require("fs") 
const moment = require("moment")
module.exports.run = async (bot, message, args, prefix) => { 
let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(member === message.guild.member(message.mentions.users.first())) return message.channel.send("Não achei o cara que tu ta mencionando");
    if(member === message.guild.member(message.guild.members.get(args[0]))) return message.channel.send("Não achei o cara que tu ta colocando o id");
    if(!member) return message.channel.send("Coloque algum membro")
    let rasão = args.join(" ").slice(2);
    if(!rasão) return message.channel.send("Informe a rasão pfv")
    if(!message.member.hasPermission("ADMINISTRATOR") || member.highestRole.position > message.member.highestRole.position || member.highestRole.position === message.member.highestRole.position) return message.channel.send("Vc n tem permissão garai!");

    await message.channel.send(`<@${member.id}> foi kickado pelo: <@${message.author.id}>, pelo motivo: **${rasão ? rasão : `nenhuma(a ce dizer <:velho:558845017662291979>)`}**`)

    
message.guild.member(member).kick(rasão);
member.user.send(`Vc foi kickado do servidor: ${message.guild.name}, por **${rasão ? rasão : `nenhuma rasão especificada`}**`)
} 
exports.config = { 
name: "kick", 
alias: ["kickar"] ,
description: "Comando para kickar membros do servidor",
admin: "sim",
categoria: "Moderation",
usage: "<prefix>kick <id>\n)kick <menção>"
}