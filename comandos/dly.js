const Discord = require("discord.js")
const ms = require('parse-ms')
const math = require('mathjs')

module.exports.run = async (bot, message, args, prefix, database) => { 
const member = message.author

    const timeout = "86400000"
    const quantia = "500"

    database.ref(`Membros/${member.id}/dimdim/dimdim`)
    .once("value").then(a => {
    if(a.val() == null) {
        database.ref(`Membros/${member.id}/dimdim`)
        .set({
            dimdim: "0"
        })
    }
    database.ref(`Membros/${member.id}/daily/time`)
    .once("value").then(b => {
    if(a.val() == null) {
        database.ref(`Membros/${member.id}/daily`)
        .set({
            time: "0"
        })
    }
    const daily = b.val()
    const dimdim = a.val()

    let answer;
            try {
                answer = math.eval(`${dimdim} + ${quantia}`);
            }catch (err) {
                return console.log(err)
            }


    if(daily !== null && timeout - (Date.now() - daily) > 0) {
        const time = ms(timeout - (Date.now() - daily));

        message.channel.send(`ta doido? Espera **${time.hours}h ${time.minutes}m ${time.seconds}s** pra pode usa dnv o burro manso!`)
    } else {

    message.channel.send(`Adiocionado ${quantia} na sua conta`)
    database.ref(`Membros/${member.id}/dimdim`)
    .set({
        dimdim: answer
    })
    database.ref(`Membros/${member.id}/daily`)
    .set({
        time: Date.now()
    })
    

        
    }
})
}) 
} 
exports.config = { 
   name: "daily", 
   alias: ["dly"], 
   ops: "não", 
   description: "Comando para resgatar um dimdim", 
   categoria: "Fun", 
   usage: ")daily" 
}