const Discord = require("discord.js") 
const jimp = require("jimp")
module.exports.run = async (bot, message, args, prefix, database) => { 
message.channel.send("teste") 
} 
exports.config = { 
   name: "jimp", 
   alias: [], 
   ops: "Sim", 
   description: "Comando para teste de jimp", 
   categoria: "sla", 
   usage: "<prefix>jimp" 
}