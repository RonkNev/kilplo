const Discord = require("discord.js")
const bot = new Discord.Client()
const fs = require("fs")
const firebase = require('firebase')
const http = require('http');
const express = require('express');
const app = express();
app.disable('x-powered-by');
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
module.exports = { Discord, bot, fs, firebase, http, express, app}
