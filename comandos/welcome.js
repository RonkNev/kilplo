const Discord = require("discord.js") 

module.exports.run = async (bot, message, args, prefix, database) => { 
const db = database
if(!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== process.env.OWNERID) return message.channel.send("sem perm")
db.ref(`Servidores/${message.guild.id}/guildMemberAdd/welcome/enable`).once("value").then(async enable => {
    if(!enable.val()) return message.channel.send("Este modulo n esta abilitado")
  
db.ref(`Servidores/${message.guild.id}/guildMemberAdd/msg/msg`).once("value").then(async msg => {
db.ref(`Servidores/${message.guild.id}/guildMemberAdd/canal/canal`).once("value").then(async canal => {
  
if(args[0] === "replaces" || args[0] === "variaveis"){
  let embed = new Discord.RichEmbed()
       .setTitle("Variaveis de resposta para o Welcome")
       .setDescription(`*\`@{member}\` - <@${message.author.id}> \n` +
        `\`{member}\` - ${message.author.username} \n` +
        `\`{guild}\` - ${message.guild.name} \n` +
        `\`{members}\` - ${message.guild.members.size}*`)
       .setAuthor(message.author.tag, message.author.displayAvatarURL)
       .setColor(message.member.highestRole.hexColor)
       return message.channel.send(embed)
}
  
if(args[0] === "status"){
 let embed = new Discord.RichEmbed()
 .setTitle("Status " + exports.config.name)
 .setDescription(`Mensagem: \`${msg.val()}\` \n` +
 `Canal: \`<#${canal.val()}\``)
 .setColor(message.member.highestRole.hexColor)
 .setAuthor(message.author.tag, message.author.displayAvatarURL)
 message.channel.send(embed)
  return
}

    if(!args[0]) return message.channel.send(`Iai mano, para utilizar o comando digite: \`${exports.config.usage}\``)


    if(args[0] === "channel" || args[0] === "canal"){
        if(!args[1]){
                if(!canal.val()) return message.channel.send("N existe nenhum canal setado")
                return message.channel.send(`<#${canal.val()}>`)
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
                if(!msg.val()) return message.channel.send("N existe nenhum msg setado")
                return message.channel.send(`A msg eh: \`${msg.val()}\``)
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
})
})
}
exports.config = {
    name: "welcome",
    alias: [],
    description: "Comando para setar algumas funções quando alguem entra no servidor",
    categoria: "Moderation",
    usage: "<prefix>welcome <função> <config ou set> <canal ou msg>"
}