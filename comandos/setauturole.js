const Discord = require("discord.js") 
const fs = require("fs")

module.exports.run = async (bot, message, args, prefix, database) => { 
    const cargo = message.mentions.roles.first() || message.guild.roles.get(args[0])
    database.ref(`Servidores/${message.guild.id}/autorole`).set({
        role: cargo.id
    })
  message.channel.send(`Cargo setado para: ${args[0]}`)
}
exports.config = {
    name: "setautorole",
    alias: ["setarautorole"],
    description: "Comando para setar a auto role do servidor",
    admin: "sim",
    usage: "<prefix>setautorole <id da role>\n<prefix>setautorole <menção da role>",
    categoria: "Moderation"
}