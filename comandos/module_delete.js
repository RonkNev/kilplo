const Discord = require("discord.js")
const fs = require("fs")
const tokenfile = require("../token.json")

module.exports.run = async (bot, message, args, prefix) =>{
if(message.author.id !== "370007502643003403") return message.channel.send("C TEM DEMENCIA?")
message.channel.send("Qual o nome do arquivo?")
const filter = b => !b.author.bot && b.author.id == message.author.id

const a = await message.channel.createMessageCollector(filter, {max: 1, time: 30000,})
a.on("collect", async d => {
this.arquivo = d.content

message.channel.send(`O nome do arquivo apagado será: \`${this.arquivo}\`? (digite "ss" para continuar)`)
const b = await message.channel.createMessageCollector(filter, {max: 1, time: 30000,})
b.on("collect", async e => {
this.resposta = e.content
this.listaN = this.resposta === "s" || this.resposta === "S" || this.resposta === "ss" || this.resposta === "SS"

if(!this.listaN){
    return message.channel.send("operaçaum cançelada")
}

    try{
    const f = require(`./${this.arquivo}`)
    if(f){
        fs.unlink(`./comandos/${this.arquivo}`, function (err){
            if (err) throw err;
            message.channel.send(`comando deletado`)
            .then(async ()=> await bot.destroy(true))
            .then(async () => await bot.login(tokenfile.token));
        })
    }
}
    catch(e){
        return message.channel.send("este arquivo n existe")
} 
})
})

}
exports.config = {
    name: "deletemodule",
    alias: ["delete_module", "delete_file", "delete_cmd", "deletefile", "deletecmd"],
    ops: "sim"
}