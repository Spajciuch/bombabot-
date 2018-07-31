const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_CHANNELS"))
  return message.reply("Nie masz uprawnień")
    let everyone = message.guild.roles.find(`name`, "@everyone");
      await message.channel.overwritePermissions(everyone, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
  
               });
      message.reply("Kanał został zablokowany")
      message.react("🚦")
}
module.exports.help = {
	name: "lock",
	category:"admin"
}