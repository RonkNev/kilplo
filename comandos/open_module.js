const Discord = require("discord.js")
const fs = require("fs")
module.exports.run = async (bot, message, args, prefix) =>{
if(message.author.id !== "370007502643003403") return message.channel.send("C TEM DEMENCIA?")
message.channel.send("Qual o nome do arquivo?")
const filter = b => !b.author.bot && b.author.id == message.author.id

const a = await message.channel.createMessageCollector(filter, {max: 1, time: 30000,})
a.on("collect", async d => {
this.arquivo = d.content

message.channel.send(`Esse arquivo \`${this.arquivo}\`? (digite qualquer coisa menos "nao" para continuar)`)
const b = await message.channel.createMessageCollector(filter, {max: 1, time: 30000,})
b.on("collect", async e => {
this.resposta = e.content
this.listaN = this.resposta === "cancelar" || this.resposta === "Naum" || this.resposta === "naum" || this.resposta === "Cancelar"

if(this.listaN){
    return message.channel.send("operaçaum cançelada")
}

    try{
    const f = require(`./${this.arquivo}`)
    if(f){
        fs.readFile(`./comandos/${this.arquivo}`, function (err, data){
            if (err) throw err;
            message.channel.send(`aqui esta: \`\`\`${data}\`\`\``)
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
    name: "openmodule",
    alias: ["open_module", "open_file", "open_cmd", "openfile", "opencmd"],
    ops: "sim"
}