const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
  var firebase = require('firebase')
  var database = firebase.database()
  await database.ref(`/config/${message.guild.id}/util`).once('value')
  .then(async pingi => {
    if(pingi.val() == false) return message.reply('Komenda jest wyłączona');
      if(!message.member.roles.some(r=>["Admin","Administrator", "Moderator", "podkomisarze w Hyrule", "agent FBI w Hyrule", "właściciele", "Administracja"].includes(r.name)))
    return message.reply("Nie masz uprawnień")

      let member = message.mentions.members.first();
      if (!member)
        return message.reply("Oznacz właściwą osobę");
      if (!member.kickable)
        return message.reply("Nie mogę wywalić tej osoby, czy mam wszystkie uprawnienia");


      let reason = args.slice(1).join(' ');
      if(!reason) reason = " `Nie podano powodu`";

      await member.kick(reason)
        .catch(error => message.reply(`${message.author} Nie mogłem wykopać usera, powód: ${error}`));
      const embed = {
        "title": "Kick",
        "description": `Osoba: ${member.user.username}\nWywalono przez: ${message.author.username}\nPowód: ${reason}`,
        "color": 43519,
        "timestamp": "",
        "thumbnail": {
          "url": message.mentions.members.first().user.avatarURL
        }
      };
      message.channel.send({ embed })
    })
}
module.exports.help = {
	name: "kick",
  category:"admin"
}