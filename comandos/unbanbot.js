const Discord = require("discord.js") 
const fs = require("fs") 
module.exports.run = async (bot, message, args, prefix, database) => { 
if (message.author.id !== '370007502643003403') return message.channel.send("Vc acha msm que tem perm pra isso?")
const member = message.mentions.users.first() || bot.users.get(args[0])
database.ref(`Membros/${member.id}/banbot/banbot`)
.once("value").then(a => {
    if(a.val() == null) return message.channel.send("este membro n esta banido")
    database.ref(`Membros/${member.id}/banbot`)
    .set({
        banbot: null
    })
message.channel.send(`O membro foi desbanido com sucesso`)
}) 
} 
exports.config = { 
    name: "unbanbot", 
    alias: [],
    ops: 'sim'
}