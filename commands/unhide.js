const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_CHANNELS"))
  return message.reply("Nie masz uprawnień")
    if(util.val() == false) return message.reply('Komenda jest wyłączona');
    let everyone = message.guild.roles.find(`name`, "@everyone");
      await message.channel.overwritePermissions(everyone, {
                    SEND_MESSAGES: true,
                    ADD_REACTIONS: true,
                    READ_MESSAGES: true
  
               });
      message.reply("odkryto kanał")
      message.react("🚦")

}
module.exports.help = {
	name: "show",
	category:"admin"
}