const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
require('./util/eventloader')(client);


client.login(settings.token);