
const Discord = require("discord.js");
module.exports.run = async (client, message, args) =>{

  if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Nie masz uprawnień");
  message.guild.createRole({
    name: args.join(" "),
    permissions: 0
  })
}
module.exports.help = {
  name: "create.role",
  category:"admin"
}
