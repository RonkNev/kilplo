const Discord = require("discord.js") 
module.exports.run = async (bot, message, args, prefix, database) => { 
   if(!args[0])return message.channel.send('Por favor, mencione um usuário ou forneça o id de uma mensagem.');

   try{
     let user = message.mentions.users.first();
     if(user){
       msg = user.lastMessage;
     }else{
       if(isNaN(args[0]))
         return message.channel.send('Id ou menção inválida.')
       var msg = await message.channel.fetchMessage(args[0]);
     };
   
     var embed = msg.embeds[0];
   
     if(msg && !embed)return message.channel.send('Nenhum embed foi detectado nesta mensagem.');
   } catch(err){
     console.log(err);
     message.channel.send('Não encontrei esta mensagem.');
   };
   
   let result = 'let embed = new Discord.RichEmbed()\n';
   
   function toHex(target){
     if(target == 0)
       return target;
     if(target){
       return Number(target).toString(16);
     } else {
       return '4f545c';
     }
   };
   
   function edit(text){
     return text.replace(/'/g, "\\'").replace(/`/g, '\\`').replace(/\n/g, '\\n').replace(/discord.gg/g, 'discord');
   };
   
   result += `.setColor(0x${toHex(embed.color)})\n`
   
   if(embed.thumbnail)
     result += `.setThumbnail('${embed.thumbnail.url}')\n`
     if(embed.image)
     result += `.setImage('${embed.image.url}')\n`
     
   if(embed.author)
     result += `.setAuthor('${edit(embed.author.name)}'${embed.author.iconURL?`, '${embed.author.iconURL}`:''}'${embed.author.url?`, ${embed.icon.url}`:''})\n`;
   
   if(embed.title)
     result += `.setTitle('${edit(embed.title)}')\n`;
   
   if(embed.description)
     result += `.setDescription('${edit(embed.description)}')\n`;
   
   if(embed.url)
     result += `.setURL('${edit(embed.url)}')\n`;
   
   if(embed.fields)
     embed.fields.forEach(f => result += `.addField('${edit(f.name)}', '${edit(f.value)}'${f.inline?", true":""})\n`)
   
   if(embed.footer)
     result += `.setFooter('${edit(embed.footer.text)}'${embed.footer.iconURL?`, '${embed.footer.iconURL}'`:''})\n`;
   
   if(embed.timestamp)
     result += `.setTimestamp('${embed.timestamp}')\n`;
   
   result += "message.channel.send(embed);";
   
   message.channel.send("```js\n"+result+"```")
   
   function clean(text){
     if (typeof(text) === "string"){
       return text.replace(/`/g, "" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
     } else {
       return text;
     };
   };
   
   const code = result;
   let evaled = eval(code);
   
   if(typeof evaled !== "string")
     evaled = util.inspect(evaled);
} 
exports.config = { 
   name: "embed", 
   alias: [], 
   description: "Comando para ver a embed do amiguinho", 
   categoria: "Utility", 
   usage: ")embed <menção>\n)embed <id>" 
}