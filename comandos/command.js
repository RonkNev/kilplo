const Discord = require("discord.js") 
const tokenfile = require("../token.json")
module.exports.run = async (bot, message, args, prefix, database) => { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Vc precisa ter \`Administrador\``)

database.ref(`Servidores/${message.guild.id}/commandEnable/hein`).once("value").then(async a => {
if(!a.val()) return message.channel.send("Este servidor não abilitou o modulo de comando ;(")

    let nome = args[0]
    let resposta = args.slice(1).join(" ")

    function isUpperCase(str) {
        return str === str.toUpperCase();
    }
    if(isUpperCase(nome)) return message.channel.send("pfv coloque em minusculo o nome do comando")
    

    if(!nome) return message.channel.send("Coloque o nome do comando")
    if(!resposta) return message.channel.send("Coloque a resposta do comando")
    database.ref(`Servidores/${message.guild.id}/comandos/${nome}`).once("value").then(async slk => {
    if(slk.val()){
        message.channel.send("Este comando ja existe, tem certeza que deseja substituilo?")
        const filter = b => !b.author.bot && b.author.id == message.author.id;
        const a = await message.channel.createMessageCollector(filter, {max: 1, time: 30000})
        a.on("collect", async d => {
            if(d.content === "sim" || d.content === "Sim"){
                database.ref(`Servidores/${message.guild.id}/comandos/${nome}`).update({
                    comando: nome
                })
                message.channel.send("pronto kk")
                .then(async ()=> bot.destroy(true))
                .then(async () => await bot.login(tokenfile.token));
            }
            if(d.content === "não" || d.content === "nao"){
                return message.channel.send("Ok")
            }
            return
        })
    }
    database.ref(`Servidores/${message.guild.id}/comandos/${nome}`).update({
        comando: nome
    })
    
    database.ref(`Servidores/${message.guild.id}/resposta/${nome}`).update({
        resposta: resposta
    })    
    message.channel.send("pronto kk")
    .then(async ()=> bot.destroy(true))
    .then(async () => await bot.login(tokenfile.token));
})
})
} 
exports.config = { 
   name: "command", 
   alias: ["setarComandoDoServidor"], 
   ops: "Comando para setar **UM** comando em expecifico para o servidor(necessario comprar o item)", 
   description: "Comando para setar **UM** comando em expecifico para o servidor(necessario comprar o item)", 
   categoria: "Fun", 
   usage: ")setServerCommand <nome> <resposta>" 
}