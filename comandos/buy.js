const Discord = require('discord.js')
module.exports.run = async (bot, message, args, prefix, database) => { 
if(!args[0] === "nada" || !args[0] === "comando" || !args[0]) return message.channel.send("Coloque um item valido")
database.ref(`Membros/${message.author.id}/dimdim/dimdim`).once("value").then(async a => {
    if(a.val() === null || a.val() === "0"){
        message.channel.send("VC N TEM NADA DE DIMDIM")
        if(a.val() === null){
            database.ref(`Membros/${message.author.id}/dimdim`).set({
                dimdim: "0"
            })
        }
    }

if(args[0] === "comando"){

}
})
}
exports.config = {
    name: "buy",
    alias: ["comprar"],
    description: "Comando para comprar coisas com seu dim dim",
    categoria: "Fun",
    usage: "<prefix>buy <item>"
}