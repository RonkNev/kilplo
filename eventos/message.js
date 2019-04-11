const Discord = require('discord.js')
const firebase = require('firebase')
const database = firebase.database()

module.exports = async (bot, message) => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    database.ref(`Membros/${message.author.id}/banbot/banbot`)
    .once("value").then(async b => {
      
      
    let prefix = ")";
    var prefixes = [")", "<@561980818906677259> ", "<@!561980818906677259> "];
    function checkSW(p) {
        if (message.content.startsWith(p)) {
            prefix = p;
        }
        return message.content.startsWith(p);
    }
    if (!prefixes.some(checkSW) && message.content.startsWith("<@561980818906677259>") || message.content.startsWith("<@!561980818906677259>")){
      message.channel.send(`COLE VIADO, \`)\` eh o meu prefixo`)
    }
    if (!prefixes.some(checkSW)) return

    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let comando = args.shift().toLowerCase();

    database.ref(`Servidores/${message.guild.id}/comandos/comando1`).once("value").then(async comandos => {
      database.ref(`Servidores/${message.guild.id}/resposta/`).once("value").then(async resposta => {

    if(comando === `${comandos.val()}`){
      return message.channel.send(`${resposta.val().replace("{guildName}", `${message.guild.name}`).replace("@{author}", `<@${message.author.id}>`)}`)
    }
    
    let commandfile = bot.commands.get(comando) || bot.commands.get(bot.alias.get(comando));
    if(commandfile){
      if(b.val()) return message.channel.send("Vc esta banido do bot")
      commandfile.run(bot, message, args, prefix, database);
    }

    })
  })
  })
}