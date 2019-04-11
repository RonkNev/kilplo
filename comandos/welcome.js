const Discord = require("discord.js") 

module.exports.run = async (bot, message, args, prefix, database) => { 
const db = database
db.ref(`Servidores/${message.guild.id}/guildMemberAdd/welcome/enable`).once("value").then(async enable => {
    if(!enable.val()) return message.channel.send("Este modulo n esta abilitado")

    if(!args[0]) return message.channel.send(`Iai mano, para utilizar o comando digite: \`${exports.config.usage}\``)


    if(args[0] === "channel" || args[0] === "canal"){
        if(!args[1]){
            db.ref(`Servidores/${message.guild.id}/guildMemberAdd/canal/canal`).once("value").then(async canal => {
                if(!canal.val()) return message.channel.send("N existe nenhum canal setado")
                return message.channel.send(`<#${canal.val()}>`)
            })
        }
        if(args[1] === "config" || args[1] === "set"){
            let canal = message.guild.channels.get(args[2]) || message.mentions.channels.first() || message.guild.channels.find(c => c.name === args[2]) || message.guild.channels.find(c => c.name.includes === args[2])
            if(!canal || !args[2]) return message.channel.send("Coloque algum canal")
            db.ref(`Servidores/${message.guild.id}/guildMemberAdd/canal`).update({
                canal: canal.id
            })
            await message.channel.send(`Canal setado para <#${canal.id}>`)
        }
        return
    }
    if(args[0] === "mensagem" || args[0] === "msg"){
        if(!args[1]){
            db.ref(`Servidores/${message.guild.id}/guildMemberAdd/msg/msg`).once("value").then(async msg => {
                if(!msg.val()) return message.channel.send("N existe nenhum msg setado")
                return message.channel.send(`A msg eh: \`${msg.val()}\``)
            })
        }
        if(args[1] === "config" || args[1] === "set"){
            let msg = args.slice(2).join(" ")
            if(!msg) return message.channel.send("Coloque alguma msg")
            db.ref(`Servidores/${message.guild.id}/guildMemberAdd/msg`).update({
                msg: msg
            })
            await message.channel.send(`Mensasgem setada para \`${msg}\``)
        }
        return
    }
})
}
exports.config = {
    name: "welcome",
    alias: [],
    description: "Comando para setar algumas funções quando alguem entra no servidor",
    categoria: "Moderation",
    usage: ")welcome <função> <config ou set> <canal ou msg>"
}