const Discord = require('discord.js')
module.exports = async (bot, message) => {
    bot.user.setStatus("dnd")
    console.log('---------------');
    console.log(`${bot.user.username} Esta Online em ${bot.guilds.size} Servidores! ${bot.users.size} pessoas`);
    console.log(`${bot.user.username} Linguagem: JavaScript`)
    
      let status = [     
      {name: `alegria e felicidade`, type: `STREAMING`, url: 'https://www.twitch.tv/ronkzinho'},
      {name: `comandos do meu criador`, type: `LISTENING`},  
      {name: `sensações boas`, type: 'STREAMING', url: 'https://www.twitch.tv/alanzoka'}

    
      ];   
      //STREAMING = TRANSMITINDO
      //LISTENING = OUVINDO
      //PLAYING = JOGANDO
      //WATCHING = ASSISTINDO
    
      function setStatus() {
          let randomStatus = status[Math.floor(Math.random() * status.length)];
          bot.user.setPresence({game: randomStatus});
      }
    
      setStatus();
      setInterval(() => setStatus(), 6000);
      
}