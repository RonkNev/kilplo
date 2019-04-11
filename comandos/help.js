const Discord = require("discord.js")
const fs = require("fs")
module.exports.run = async (bot, message, args, prefix) =>{
let commandAlt = args[0] ? bot.commands.find(c => c.config.name === args[0] && c.config.ops !== "sim" || c.config.alias.includes(args[0]) && c.config.ops !== "sim") : false
if(commandAlt) {
let a = bot.commands.find(c => c.config.alias === commandAlt.config.alias).config.alias
this.b = ""
if(a === null || a === "" || a === "" || !a){
    this.b += "Nenhum aliases"
}
if(a !== null){
    this.b += a
}

let administrador;
if(commandAlt.config.admin === "sim") administrador = "Sim"
if(!commandAlt.config.admin) administrador = "Não"

let categoria;
if(commandAlt.config.categoria === "Fun") categoria = "Diversão"
if(commandAlt.config.categoria === "Moderation") categoria = "Moderação"
if(commandAlt.config.categoria === "Utility") categoria = "Utilidades"
    let embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setTitle(`HELP DO COMANDO: ${commandAlt.config.name.toUpperCase()}`)
    .addField(`Como usar:`, `\`\`\`${commandAlt.config.usage}\`\`\``)
    .addField(`Descrição:`, `\`\`\`${commandAlt.config.description}\`\`\``)
    .addField(`Aliases:`, `\`\`\`${this.b  ? `${this.b}` : `Nenhum aliases`}\`\`\``)
    .addField(`Só para admins:`, "```" + administrador + "```")
    .addField(`Categoria:`, `\`\`\`${categoria}\`\`\``)
    .setFooter(`${bot.user.username}, criado por: Ronkzinho`, bot.user.displayAvatarURL);
    return message.channel.send(embed)
}
if(args[0] && !commandAlt){
    return message.channel.send("este comando n existe")
}
const comandossize = bot.commands.filter(c => c.config.ops !== "sim").size
let inicialembed = new Discord.RichEmbed()
.setTitle(`MENU DE AJUDA`)
.setDescription(`Bem vindo ao bot ${bot.user.username} \n` +
`Espero que goste dos meus **${comandossize}** comandos \n` +
` \n ` +
`Reaja com 📁 para abrir o menu de ajuda \n` +
`E se quiser uma ajuda mais expecifica digite \`)help <comando>\``)
.setColor("BLUE")
message.channel.send(inicialembed).then(async msg => {
await msg.react('📁')

let inicial = (reaction, user) => reaction.emoji.name === "📁" && user.id === message.author.id;  

const coletorinicial = msg.createReactionCollector(inicial, {time: 60000});

coletorinicial.on("collect", async r => {
let pEmbed = new Discord.RichEmbed()

.setTimestamp()
.setTitle(`Comandos:`)
.setDescription(`<a:hypertada:560629637651103765> Diversão <a:hypertada:560629637651103765> \n` +
`\n` +
`<a:sino:556516427851628565> Moderação <a:sino:556516427851628565> \n` +
`\n` +
`<a:Policia:548167356556247051> Utilidades <a:Policia:548167356556247051>`)
.setColor("BLUE")
.setFooter(`${bot.user.username}, criado por: Ronkzinho`, bot.user.displayAvatarURL);

await msg.edit(pEmbed)
await msg.clearReactions()
await msg.react('⬅')
await msg.react('560629637651103765')
await msg.react('556516427851628565')
await msg.react('548167356556247051')
await msg.react('❌')

let DiversãoEmbed = new Discord.RichEmbed()
.setTitle("COMANDOS:")
.setDescription(`${bot.commands.filter(c => c.config.ops !== "sim" && c.config.categoria === "Fun").map(c => `\`)${c.config.name}\` | **${c.config.description}**`).join(` \n` +
` `)}`)
.setColor("BLUE")
.setTimestamp()
.setFooter(`${bot.user.username}, criado por: Ronkzinho`, bot.user.displayAvatarURL);

let ModeraçãoEmbed = new Discord.RichEmbed()
.setTitle("COMANDOS:")
.setDescription(`${bot.commands.filter(c => c.config.ops !== "sim" && c.config.categoria === "Moderation").map(c => `\`)${c.config.name}\` | **${c.config.description}**`).join(` \n` +
` `)}`)
.setColor("BLUE")
.setTimestamp()
.setFooter(`${bot.user.username}, criado por: Ronkzinho`, bot.user.displayAvatarURL);

let UtilidadesEmbed = new Discord.RichEmbed()
.setTitle("COMANDOS:")
.setDescription(`${bot.commands.filter(c => c.config.ops !== "sim" && c.config.categoria === "Utility").map(c => `\`)${c.config.name}\` | **${c.config.description}**`).join(` \n` +
` `)}`)
.setColor("BLUE")
.setTimestamp()
.setFooter(`${bot.user.username}, criado por: Ronkzinho`, bot.user.displayAvatarURL);


let Diversão = (reaction, user) => reaction.emoji.name === "hypertada" && user.id === message.author.id;  

const coletorDiversão = msg.createReactionCollector(Diversão, {time: 60000});

coletorDiversão.on("collect", async r => {
await msg.clearReactions()
await msg.react('◀')
await msg.edit(DiversãoEmbed)
await msg.react('❌')
})

let Moderação = (reaction, user) => reaction.emoji.name === "sino" && user.id === message.author.id;  

const coletorModeração = msg.createReactionCollector(Moderação, {time: 60000});

coletorModeração.on("collect", async r => {
await msg.clearReactions()
await msg.react('◀')
await msg.edit(ModeraçãoEmbed)
await msg.react('❌')
})

let Utilidades = (reaction, user) => reaction.emoji.name === "Polica" && user.id === message.author.id;  

const coletorUtilidades = msg.createReactionCollector(Utilidades, {time: 60000});

coletorUtilidades.on("collect", async r => {
await msg.clearReactions()
await msg.react('◀')
await msg.edit(UtilidadesEmbed)
await msg.react('❌')
})

let fechar = (reaction, user) => reaction.emoji.name === "❌" && user.id === message.author.id;  

const coletorFechar = msg.createReactionCollector(fechar, {time: 60000});
coletorFechar.on("collect", async r => {
await msg.delete()
})

let voltarInicial = (reaction, user) => reaction.emoji.name === "⬅" && user.id === message.author.id;

const coletorVoltarInicial = msg.createReactionCollector(voltarInicial, {time: 60000});

coletorVoltarInicial.on("collect", async r => {
    await msg.clearReactions()
    await msg.edit(inicialembed)
    await msg.react('📁')
})

let voltar = (reaction, user) => reaction.emoji.name === "◀" && user.id === message.author.id;  

const coletorVoltar = msg.createReactionCollector(voltar, {time: 60000});

coletorVoltar.on("collect", async r => {
    await msg.clearReactions()
    await msg.edit(pEmbed)
    await msg.react('⬅')
    await msg.react('560629637651103765')
    await msg.react('556516427851628565')
    await msg.react('548167356556247051')
    await msg.react('❌')
})
})
})
}
exports.config = {
    name: "help",
    alias: ["ajuda"],
    description: "Comando de ajuda",
    usage: ")help\n)help <comando>",
    categoria: "Utility"
}