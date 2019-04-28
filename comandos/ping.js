const Discord = require("discord.js") 
const fs = require("fs") 
module.exports.run = async (bot, message, args, prefix, database) => { 
const m = await message.channel.send("Ping?");
  m.edit(`O ping do bot é: ${m.createdTimestamp - message.createdTimestamp}ms e o ping da API é: ${Math.round(bot.ping)}ms`);
}

exports.config = {
  name: "ping",
  alias: [],
  description: "Comando para mostrar o ping do bot",
  usage: "<prefix>ping",
  categoria: "Utility"
}