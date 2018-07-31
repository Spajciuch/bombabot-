
const Discord = require("discord.js");
module.exports.run = async (client, message, args) =>{

    if(pingi.val() == false) return message.reply('Komenda jest wyłączona');
  if(!message.member.hasPermission("MANAGE_CHANNELS"))
  return message.reply("Nie masz uprawnień")
  message.channel.setName(args.join(" "))

 .catch(console.error);

}
module.exports.help = {
  name: "channelname",
  category:"admin",
  description:"Zmienia nazwę kanału",
  use:"<prefix>channelname <nowa nazwa kanału>"
}
