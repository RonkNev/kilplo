const Discord = require("discord.js") 
module.exports.run = async (bot, message, args, prefix, database) => { 
if(!message.author.id === process.env.OWNERID) return 
const member = message.mentions.users.first() || bot.users.get(args[0])
const quantidade = args[1]
database.ref(`Membros/${member.id}/dimdim`).set({
    dimdim: quantidade
})
message.channel.send("deu certo")
} 
exports.config = { 
   name: "setdimdim", 
   alias: ["setardimdim"], 
   ops: "Sim", 
   description: "Nenhuma", 
   categoria: "Ops", 
   usage: "<prefix>setdimdim <usuario> <quantidade>" 
}