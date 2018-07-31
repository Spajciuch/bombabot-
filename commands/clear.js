

const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(pingi.val() == false) return message.reply('Komenda jest wyłączona');
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nie masz uprawnień.");
  if(!args[0]) return message.channel.send("Podaj liczbę wiadomości do usunięcia");
  if(args[0]<2) return message.reply("Podaj liczbę w przedziale od 2 do 100")
  if(args[0]>100) return message.reply("Podaj liczbę w przedziale od 2 do 100")
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Usunięto ${args[0]} wiadomości.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "clear",
  category:"admin",
  description:"Czyści wiadomości (od 2 do 100)",
  use:"<prefix>clear <liczba od 2 do 100>"
}
