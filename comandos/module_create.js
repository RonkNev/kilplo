const Discord = require("discord.js")
const fs = require("fs")
module.exports.run = async (bot, message, args, prefix) =>{
if(message.author.id !== process.env.OWNERID && message.author.id !== "519192605511254017") return message.channel.send("C TEM DEMENCIA?")
message.channel.send("Qual o nome do arquivo?")
const filter = b => !b.author.bot && b.author.id == message.author.id

const a = await message.channel.createMessageCollector(filter, {max: 1, time: 30000,})
a.on("collect", async d => {
this.arquivo = d.content

message.channel.send(`O nome do arquivo será: \`${this.arquivo}\`? (digite qualquer coisa menos "nao" para continuar)`)
const b = await message.channel.createMessageCollector(filter, {max: 1, time: 30000,})
b.on("collect", async e => {
this.resposta = e.content
this.listaN = this.resposta === "cancelar" || this.resposta === "Naum" || this.resposta === "naum" || this.resposta === "Cancelar"

if(this.listaN){
    return message.channel.send("operaçaum cançelada")
}


message.channel.send("oq ira conter dentro do comandos")
const u = await message.channel.createMessageCollector(filter, {max: 1, time: 500000,})
u.on("collect", async comando => {
this.conterarquivo = comando.content
message.channel.send("Qual o nome do comando?")

const ç = await message.channel.createMessageCollector(filter, {max: 1, time: 30000,})
ç.on("collect", async nome => {
this.name = nome.content
message.channel.send("Quais sao os aliases comando?")

const e = await message.channel.createMessageCollector(filter, {max: 1, time: 30000,})
e.on("collect", async aliases => {
this.aliases = aliases.content

message.channel.send("So para ops?")
const f = await message.channel.createMessageCollector(filter, {max: 1, time: 30000,})
f.on("collect", async OPS => {
this.ops = OPS.content
message.channel.send("Qual a descricão?")

const desc = await message.channel.createMessageCollector(filter, {max: 1, time: 30000,})
desc.on("collect", async descricaum => {
this.description = descricaum.content
message.channel.send("Qual a categoria do comando?")

const categoria = await message.channel.createMessageCollector(filter, {max: 1, time: 30000,})
categoria.on("collect", async clousse => {
this.categoria = clousse.content
message.channel.send("Como usar o comando?")

const Usage = await message.channel.createMessageCollector(filter, {max: 1, time: 30000,})
Usage.on("collect", async usage => {
this.usage = usage.content

if(comando.content){
    try{
    const f = require(`./${this.arquivo}`)
    if(f){
        return message.channel.send("este arquivo ja existe")
    }
}
    catch(e){
        fs.writeFile(`./comandos/${this.arquivo}`, `const Discord = require("discord.js") \n` +
        `module.exports.run = async (bot, message, args, prefix, database) => { \n` +
        `${this.conterarquivo} \n` +
        `} \n` +
        `exports.config = { \n` +
        `   name: "${this.name}", \n` +
        `   alias: ${this.aliases}, \n` +
        `   ops: "${this.ops}", \n` +
        `   description: "${this.description}", \n` +
        `   categoria: "${this.categoria}", \n` +
        `   usage: "${this.usage}" \n` +
        `}`, encoding='utf8', async function(err){
            if (err) throw err;
            await message.channel.send(`comando criado`)
            .then(async () => await bot.destroy(5000))
            .then(async () => await bot.login(process.env.TOKEN));
        })
    }
}
})
})
})
})
})
})
})
})
})
}
exports.config = {
    name: "createmodule",
    alias: ["create_module", "create_file", "create_cmd", "createfile", "createcmd"],
    ops: "sim"
}