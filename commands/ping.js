const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  const m = await message.channel.send("Ping? :ping_pong: ");
  m.edit(`:ping_pong: Pong! Różnica pomiędzy 2 wiadomościami ${m.createdTimestamp - message.createdTimestamp}ms. W stosunku do API ${Math.round(client.ping)}ms`);
}
module.exports.help = {
  name: "ping",
  category:"info",
  use:"zwykłe",
  description:"Pokazuje ping bota"
}