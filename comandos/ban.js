const Discord = require("discord.js") 
const fs = require("fs") 
module.exports.run = async (bot, message, args, prefix) => { 
if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Você não tem permissão para usar esse comando!");
    if(args.length === 0) return message.reply("Utilize ban <@usuário> <motivo>!");
    let banMember = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!banMember) return message.reply("Não foi possível encontrar este usuário!");
    let banReason = args.slice(1).join(" ");
    if(!banReason){
        banReason = "A razão não foi informada!"
    }

    try {
        if(banMember.user.id === bot.user.id || banMember.user.id === `<@${bot.user.id}>`) return message.channel.send("EU IREI ME BANIR AGR MSM KKKKKK")
        banMember.ban(banReason);
        message.channel.send(`O usuário ${banMember.user} foi **banido permanentemente** pelo **motivo**: ${banReason}`);
    } catch (error) {
        message.reply(`${error}`);
    }
} 
exports.config = { 
name: "ban", 
alias: ["banir"],
description: "Comando para banir um usuario do servidor em que o comando foi executado",
admin: "Sim",
usage: "<prefix>ban <id>\n<prefix>ban <menção>",
categoria: "Moderation"
}