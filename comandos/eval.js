const Discord = require("discord.js")
const fs = require("fs")
module.exports.run = async (bot, message, args, prefix, database) =>{
let oi = [
    "#aa00ff",
    "36393E"
    ]
    let exemplo = Math.floor((Math.random() * oi.length));




    const Discord = require('discord.js')

    if (message.author.id !== '370007502643003403') return;
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