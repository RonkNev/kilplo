const Discord = require("discord.js")
const firebase = require('firebase')
const database = firebase.database()


module.exports.run = async (bot, message, args, prefix) => { 
    if(args[0] === "status"){
        database.ref(`Servidores/${message.guild.id}/addbot/abilitado`).once("value").then(async ab => {
            let a;
            if(ab.val() === null) a = "Desabilitado"
            if(ab.val()) a = "Abilitado"
            message.channel.send(a)
        })
    }
    if(args[0] === "disable"){
         if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('vc n tem permissao para realizar este comando')
        database.ref(`Servidores/${message.guild.id}/addbot/abilitado`).once("value").then(async a => {
            if(a.val() === null) return message.channel.send("Este modulo ja esta desabilitado")

        database.ref(`Servidores/${message.guild.id}/addbot`).set({
            abilitado: null
        })
        message.channel.send('MODULO DESABILITADO')
    })
    }
    if(args[0] === "enable" || args[0] === "on"){
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('vc n tem permissao para realizar este comando')
        database.ref(`Servidores/${message.guild.id}/addbot/abilitado`).once("value").then(async a => {
            if(a.val() === "Sim") return message.channel.send("Este modulo ja esta abilitado")

        database.ref(`Servidores/${message.guild.id}/addbot`).set({
            abilitado: "Sim"
        })
        message.channel.send('MODULO ABILITADO')
    })

    }
    try{
    if(args[0]) return
    database.ref(`Servidores/${message.guild.id}/addbot/abilitado`).once('value').then(async dab =>{
        if(dab.val() !== "Sim") return message.channel.send('Abilite este modulo')
    const canal = message.guild.channels.find(c => c.name === ("addbots" || "add-bots"))
    await message.channel.send("Informe os dados do bot no privado")
    
    message.author.send("qual o prefixo do bot")
    var dm = await message.member.createDM();
    const filter = b => !b.author.bot && b.author.id == message.author.id;
    
    const a = await dm.createMessageCollector(filter, {max: 1, time: 30000,})
    a.on("collect", async d => {
    const prefixo = d.content
    a.on("end", c => {
        if(c.size == 0) {
         message.author.send("vc n especificou o prefixo do bot")
        }
    })
    
    await message.author.send("qual o id do bot?")
    
    const g = await dm.createMessageCollector(filter, {max: 1, time: 30000,})
    g.on("collect", async e => {
    const id = e.content
    const renal = bot.users.get(id)
    if(renal){
    if(!renal.bot) return message.author.send("este cara num eh um bot fio")
    }
    g.on("end", h => {
        if(h.size == 0) {
         message.channel.send("vc n especificou o id do bot")
        }
    })
    await message.author.send(`Quais sao as permsissoes necessarias?`)
    const k = await dm.createMessageCollector(filter, {max: 1, time: 30000,})
    k.on("collect", async ç => {
    let perms = ç.content
        k.on("end", y => {
            if(y.size == 0) {
                message.channel.send("vc n especificou as permssões necessarias do bot")
               }
            })
    
    if(!canal){
        return message.author.send("peça para algum moderador criar um canal chamado ```addbots```")
    }
    if(canal){
    if(renal){
        message.author.send("deu certo pia")
    let embed = new Discord.RichEmbed()
    .setTitle(`Add bot`)
    .setColor(`36393E`)
    .setDescription(`Nome: **${renal.username}**\n` +
    `Id: **${id}**\n` +
    `Prefixo: **${prefixo}**\n` +
    `Permissões necessarias: **${perms}** \n` +
    `Link para add o bot: [clique aq](https://discordapp.com/oauth2/authorize?=&client_id=${id}&scope=bot&permissions=8)`)
    .setImage(`${renal.displayAvatarURL}`)
    canal.send(embed)
    }
    if(!renal){
        message.author.send("deu certo pia")
        let n = new Discord.RichEmbed()
        .setTitle(`Add bot`)
        .setColor(`36393E`)
        .setDescription(`Id: ${id}\n` +
        `Prefixo: ${prefixo}\n` +
        `Permissões necessarias: ${perms} \n` +
        `Link para add o bot: **[clique aq](https://discordapp.com/oauth2/authorize?=&client_id=${id}&scope=bot&permissions=8)**`)
        canal.send(n)
    }
    }
    })
    })
    })
    })
    }catch(e){
        message.author.send("algo deu errado")
    }
    }
    exports.config = {
        name: "addbot",
        alias: ["adicionarbot", "botadd", "botadicionar"],
        description: "Comando para sugerir um bot ao servidor",
        usage: `)addbot`,
        categoria: "Utility"
    }