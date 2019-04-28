const Discord = require("discord.js") 
const fs = require("fs") 
module.exports.run = async (bot, message, args, prefix, database) => { 

if (message.author.id !== '370007502643003403') return message.channel.send("Vc acha msm que tem perm pra isso?")
const member = message.mentions.users.first() || args[0]
database.ref(`Membros/${member.id}/banbot/banbot`)
.once("value").then(a => {
    if(a.val() !== null) return message.channel.send("este membro ja esta banido")
    database.ref(`Membros/${member.id}/banbot`)
    .set({
        banbot: "true"
    })
message.channel.send(`O membro foi banido com sucesso`)
}) 
} 
exports.config = { 
name: "banbot", 
alias: [],
ops: "sim" 
}