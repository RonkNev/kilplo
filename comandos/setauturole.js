const Discord = require("discord.js") 
const fs = require("fs")
const firebase = require('firebase')
const database = firebase.database() 
module.exports.run = async (bot, message, args, prefix) => { 
    const cargo = message.mentions.roles.first() || message.guild.roles.get(args[0])
    database.ref(`Servidores/${message.guild.id}/autorole`).set({
        role: cargo.id
    })
}
exports.config = {
    name: "setautorole",
    alias: ["setarautorole"],
    description: "Comando para setar a auto role do servidor",
    admin: "sim",
    usage: ")setautorole <id da role>\n)setautorole <menção da role>",
    categoria: "Moderation"
}