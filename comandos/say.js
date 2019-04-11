const Discord = require("discord.js") 
const fs = require("fs") 
module.exports.run = async (bot, message, args, prefix) => { 
const say = args.join(" ")
if(say.includes("@everyone") && !message.member.hasPermission("ADMINISTRATOR") || say.includes("@here") && !message.member.hasPermission("ADMINISTRATOR")){
    return message.channel.send("vc n tem permissão para isso")
}
message.channel.send(say)
}
exports.config = {
    name: "say",
    alias: [],
    description: "Comando para o bot falar algo",
    usage: ")say <msg>",
    categoria: "Fun"
}