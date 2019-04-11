const Discord = require("discord.js") 
const fs = require("fs") 
module.exports.run = async (bot, message, args, prefix) => { 
let pessoa = args[0] ? message.mentions.users.first() ? message.mentions.users.first() : bot.users.get(args.join(' ')) ? bot.users.get(args.join(' ')) : bot.users.find(user => user.username.toLowerCase() === args.join(' ').toLowerCase()) ? bot.users.find(user => user.username.toLowerCase() === args.join(' ').toLowerCase()) : bot.users.find(user => user.tag.toLowerCase() === args.join(' ').toLowerCase()) ? bot.users.find(user => user.tag.toLowerCase() === args.join(' ').toLowerCase()) : message.guild.members.find(user => user.displayName.toLowerCase() === args.join(' ').toLowerCase()) ? message.guild.members.find(user => user.displayName.toLowerCase() === args.join(' ').toLowerCase()).user : message.guild.members.find(user => user.displayName.toLowerCase().includes(args.join(' ').toLowerCase())) ? message.guild.members.find(user => user.displayName.toLowerCase().includes(args.join(' ').toLowerCase())).user : bot.users.find(user => user.username.toLowerCase().includes(args.join(' ').toLowerCase())) ? bot.users.find(user => user.username.toLowerCase().includes(args.join(' ').toLowerCase())) : message.author : message.author
    let avatar = pessoa.displayAvatarURL
    if (avatar.endsWith(".gif") || avatar.endsWith(".png")) {
      avatar = `${pessoa.displayAvatarURL}?size=2048`
    }
    const embed = new Discord.RichEmbed()
      .setTitle(`${pessoa.tag}`)
      .setDescription(`[Link Direto](${avatar})`)
      .setImage(`${avatar}`)
      .setColor('36393E')
      message.channel.send(embed)

    }
    exports.config = {
    name: "avatar",
    alias: [],
    description: "Comando para mostrar seu avatar ou de um usuario",
    usage: ")avatar\n)avatar <id>\n)avatar <menção>\n)avatar <nick>",
    categoria: "Utility"
    }