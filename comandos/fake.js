const Discord = require("discord.js") 
module.exports.run = async (bot, message, args, prefix, database) => { 
message.delete()
    try {
let user;

if (message.mentions.users.first()) {
  user = message.mentions.users.first();
  
} else if(args[0]) {
    user = bot.users.get(args[0]);

}
let botmessage = args.slice(1).join(' ')

if (args[0] == null) {return message.channel.send(`❌ **Mencione um usuário !**`)}


if (args[1] == null) {return message.channel.send(`❌ **Diga algo !**`)}
message.channel.createWebhook(user.username, user.avatarURL).then(w => {
    w.send(botmessage);
    w.delete();
})

} catch (err) {
message.channel.send('❌ **Eu não tenho permissão para criar um Webhook neste servidor, ou não encontrei este usuário.**')
} 
} 
exports.config = { 
   name: "fake", 
   alias: [], 
   ops: "sim", 
   description: "Comando para criar um webhook de alguem", 
   categoria: "Fun", 
   usage: "<prefix>fake <user>" 
}