const Discord = require('discord.js')
const firebase = require("firebase")
const db = firebase.database()

module.exports = async (bot, member) => {
db.ref(`Servidores/${member.guild.id}/guildMemberAdd/autorole/role`).once("value").then(async cargoid => {
    const cargo = cargoid.val()
    if(cargo){
    member.addRole(cargo)
    }

db.ref(`Servidores/${member.guild.id}/guildMemberAdd/canal/canal`).once("value").then(async canalid => {
    const canal = member.guild.channels.get(canalid.val())
    if(!canal) return

    db.ref(`Servidores/${member.guild.id}/guildMemberAdd/msg/msg`).once("value").then(async msg => {
    const mensagem = msg.val()
    if(!mensagem) return

    canal.send(`${mensagem.replace("@{member}", `<@${member.user.id}>`).replace("{guild}", `${member.guild.name}`).replace("{member}", `**${member.user.username}**`).replace("{guildMembers}", `${member.guild.members.size}`)}`)
})
})
})
}