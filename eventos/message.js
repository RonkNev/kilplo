const Discord = require('discord.js')
const firebase = require('firebase')
const database = firebase.database()

module.exports = async (bot, message) => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    if(message.channel.id === "566402278245007391" && message.content.includes("sugestão")){
      await message.react("certo:567724329555591213")
      await message.react("errado:567724230226214912")
    }

    database.ref(`Membros/${message.author.id}/banbot/banbot`)
    .once("value").then(async b => {
      
      
    database.ref(`Servidores/${message.guild.id}/prefixo/prefixo`)
    .once("value").then(async a => {
    const prefix = `${a.val() ? `${a.val()}` : process.env.PREFIX}`

    if(message.content.startsWith(`<@${bot.user.id}>`) || message.content.startsWith(`<@!${bot.user.id}>`)){
      return message.channel.send(`COLE VIADO, \`${prefix}\` eh o meu prefixo`)
    }

    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let comando = args.shift().toLowerCase();

    database.ref(`Servidores/${message.guild.id}/comandos/comando1/comando`).once("value").then(async comandos => {
    database.ref(`Servidores/${message.guild.id}/resposta/resposta1/resposta`).once("value").then(async resposta => {
      if(!message.content.startsWith(prefix)) return

    if(comando === `${comandos.val()}`){
      if(!resposta.val() || !comandos.val()) return
      return message.channel.send(resposta.val().replace("{guild}", `${message.guild.name}`).replace("@{author}", `<@${message.author.id}>`).replace("{author}", `**${message.author.username}**`))
    }
    
    let commandfile = bot.commands.get(comando) || bot.commands.get(bot.alias.get(comando));
    if(commandfile){
      if(b.val()) return message.channel.send("Vc esta banido do bot")
      commandfile.run(bot, message, args, prefix, database);
      if(message.author.id === process.env.OWNERID) return
      let embed = new Discord.RichEmbed()
      .setTitle("Comando usado")
      .setDescription(`*Comando: **${prefix + comando}**\n` +
      `Servidor: **${message.guild.name} | ${message.guild.members.size} membros | ${message.guild.id} | ${message.guild.owner.user.tag}**\n` +
      `Usado por: **<@${message.author.id}>** \n` +
      `Canal: **<#${message.channel.id}>**\n` +
      `Args: **${args.join(" ") ? args.join(" ") : `nenhum`}***`)
      .setColor(message.member.highestRole.hexColor)
      bot.channels.get("569634719248154625").send(embed)
    }

    })
  })
  })
  })
}