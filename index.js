const { Discord, bot, fs, firebase, http, express, app } = require("./utils/variaveis")
const { database } = require("./utils/utils-config")

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
        console.log('Nenhum comandos foi encontrado');
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

bot.login(process.env.TOKEN)