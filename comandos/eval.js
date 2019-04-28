const Discord = require("discord.js")
const fs = require("fs")
module.exports.run = async (bot, message, args, prefix, database) =>{

    if (message.author.id !== process.env.OWNERID) return;
    try {
        let evel = args.join(" ");
        let oi = eval(evel);

        if (typeof oi !== 'string')
            oi = require('util').inspect(oi, { depth: 0 });
        message.channel.send(oi)
    } catch(e) {
        message.channel.send(`n foi possivel pelo erro: ${e}`);
    }
}

exports.config = { 
    name: 'eval',
    alias: [],
    ops: "sim"
}