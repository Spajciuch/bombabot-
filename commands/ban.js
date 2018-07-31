const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("BAN_MEMBERS"))
  return message.reply("Nie masz uprawnień")
    let member = message.mentions.members.first();
  if(!member)
    return message.reply("Oznacz osobę do zbanowania");
  if(!member.bannable)
    return message.reply("Nie mogę go zbanować, przesuń moją rolę na samą górę i upewnij się, że mam wszystkie uprawnienia");
  let reason = args.slice(1).join(' ');
  if(!reason) reason = " `Nie podano powodu`";

  await member.ban(reason)
  const embed = {
    "title": "Ban",
    "description": `Osoba: ${member.user.username}\nZbanowano przez: ${message.author.username}\nPowód: ${reason}`,
    "color": 43519,
    "timestamp": "",
    "thumbnail": {
      "url": message.mentions.members.first().user.avatarURL
    }
  };

  message.channel.send({ embed })
  message.memeber.send({embed});
}
module.exports.help = {
	name: "ban",
  category:"admin",
  description:"Banuje osobę, którą oznaczysz",
  use:"<prefix>ban <oznacz osobę>"
}