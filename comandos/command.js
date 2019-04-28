const Discord = require("discord.js") 
module.exports.run = async (bot, message, args, prefix, database) => { 
if(!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== process.env.OWNERID) return message.channel.send(`Vc precisa ter \`Administrador\``)

database.ref(`Servidores/${message.guild.id}/commandEnable/hein`).once("value").then(async a => {
if(!a.val()) return message.channel.send("Este servidor não abilitou o modulo de comando ;(")

    let nome = args[0]
    let resposta = args.slice(1).join(" ")
    if(!nome) return message.channel.send("Coloque o nome do comando")
    if(!resposta && nome !== "status" && nome !== "variaveis") return message.channel.send("Coloque a resposta do comando")
    function isUpperCase(str) {
        return str === str.toUpperCase();
    }
    if(isUpperCase(nome) && nome !== "status") return message.channel.send("pfv coloque em minusculo o nome do comando")
    
    if(bot.commands.find(c => c.config.name === nome || c.config.alias.includes(nome))) return message.channel.send("esse cmd n")
    database.ref(`Servidores/${message.guild.id}/comandos/comando1/comando`).once("value").then(async slk => {
      database.ref(`Servidores/${message.guild.id}/resposta/resposta1/resposta`).once("value").then(async repota => {
    if(nome === "status"){
       return message.channel.send(`Comando: \`\`\`${prefix + slk.val()}\`\`\`e resposta: \`\`\`${repota.val()}\`\`\``)
    }
    if(nome === "variaveis"){
       let embed = new Discord.RichEmbed()
       .setTitle("Variaveis de resposta para o comando: " + prefix + exports.config.name)
       .setDescription(`*\`{guild}\` - ${message.guild.name} \n` +
        `\`{author}\` - ${message.author.username} \n` +
        `\`@{author}\` - <@${message.author.id}>*`)
       .setAuthor(message.author.tag, message.author.displayAvatarURL)
       .setColor(message.member.highestRole.hexColor)
       return message.channel.send(embed)
    }
    if(slk.val()){
        message.channel.send("Ja existe um comando para este servidor, tem certeza que deseja substituilo?")
        const filter = b => !b.author.bot && b.author.id == message.author.id;
        const a = await message.channel.createMessageCollector(filter, {max: 1, time: 30000})
        a.on("collect", async d => {
            if(d.content.includes("s") || !d.content.includes("n")){
                database.ref(`Servidores/${message.guild.id}/comandos/comando1`).update({
                    comando: nome
                })
              database.ref(`Servidores/${message.guild.id}/resposta/resposta1`).update({
                    resposta: resposta
                })    
                await message.channel.send("pronto kk")
            return
            }
            if(d.content.includes("n")){
                return message.channel.send("Ok")
            }
            return
        })
      return
    }
    database.ref(`Servidores/${message.guild.id}/comandos/comando1`).update({
        comando: nome
    })
    
    database.ref(`Servidores/${message.guild.id}/resposta/resposta1`).update({
        resposta: resposta
    })    
    message.channel.send("pronto kk")
})
})
})
} 
exports.config = { 
   name: "command", 
   alias: [], 
   ops: "não", 
   description: "Comando para setar *UM* comando em expecifico para o servidor(necessario comprar o item)", 
   categoria: "Fun", 
   usage: "<prefix>command <nome> <resposta>" 
}