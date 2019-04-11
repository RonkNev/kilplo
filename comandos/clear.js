const Discord = require("discord.js") 
module.exports.run = async (bot, message, args, prefix, database) => { 
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Você não tem o direito de usar esse comando!");
    const deleteCount = parseInt(args[0], 10);
    if (!deleteCount || deleteCount < 2 || deleteCount > 100)
        return message.reply("Por favor, forneça um número entre 2 e 100 para o número de mensagens a serem excluídas");
    const fetched = await message.channel.fetchMessages({ limit: deleteCount });
    message.channel.bulkDelete(fetched)
        .catch(error => message.reply(`Não foi possível deletar mensagens devido a: ${ error }`));
    await message.channel.send(`Limpei ${args[0]} pra tu rapa`).then(msg => msg.delete(5000))
} 
exports.config = { 
   name: "clear", 
   alias: ["limpar"], 
   ops: "não", 
   description: "Comando para limpar o chat", 
   categoria: "Moderation", 
   usage: ")clear <quantidade>" 
}