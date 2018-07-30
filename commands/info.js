const Discord = require("discord.js");
var config = require('../config.json')
var moment = require('moment')
module.exports.run = async (client, message, args) => {
	let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
  	let day = message.guild.createdAt.getDate()
 	let month = 1 + message.guild.createdAt.getMonth()
  	let year = message.guild.createdAt.getFullYear()
   	let sicon = message.guild.iconURL;
 	  let serverembed = new Discord.RichEmbed()
   .setAuthor(message.guild.name, sicon)
   .setFooter(`Serwer stworzony • ${day}.${month}.${year}`)
   .setColor(config.embed_color)
   .addField("Nazwa", message.guild.name, true)
   .addField("Właściciel", `${message.guild.owner}`, true)
   .addField("Region", message.guild.region.replace('eu-central', 'Europa Centralna'), true)
   .addField("Kanały", message.guild.channels.size, true)
   .addField("Użytkownicy", message.guild.memberCount, true)
   .addField("Ludzie", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Boty", message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Online", online.size, true)
   .addField("Role", message.guild.roles.size, true);
   message.channel.send(serverembed);
}
module.exports.help = {
  name: "info",
  category:"info",
  use:"zwykłe",
  description:"Pokazuje informacje o serwerze"
}