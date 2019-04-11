const Discord = require("discord.js")
const tokenfile = require("./token.json")
const bot = new Discord.Client()
const fs = require("fs")
const firebase = require('firebase')

var config = {
  apiKey: "AIzaSyAqAXPhV1RHr0Nw7XF3l1thgsz0Ve8So4w",
  authDomain: "kilplo.firebaseapp.com",
  databaseURL: "https://kilplo.firebaseio.com",
  projectId: "kilplo",
  storageBucket: "kilplo.appspot.com",
  messagingSenderId: "942326519653"
};
firebase.initializeApp(config);
const database = firebase.database()

    bot.commands = new Discord.Collection();
    bot.alias = new Discord.Collection();

    fs.readdir("./eventos/", (err, files) => {
      if (err) return console.error(err);
      files.forEach(file => {
          const event = require(`./eventos/${file}`);
          let eventName = file.split(".")[0];
          bot.on(eventName, event.bind(null, bot));
      });
      });

    fs.readdir('./comandos', async (err, file) => {
      if(err) console.log(err.stack)
      let jsf = file.filter(f => f.split('.').pop() === 'js')
      if(jsf.length < 0){
        console.log('Nenhum comandos foi encontrado');//quando não foi encontrado os comandos ou não há algum arquivo ".js"
        return;
      }
      jsf.forEach((f,i) => {
        let p = require(`./comandos/${f}`)
        console.log(`${f} carregado`)
        bot.commands.set(p.config.name, p)
        p.config.alias.forEach(a => {
          bot.alias.set(a, p.config.name)
        })
      })
    })

bot.login(tokenfile.token)