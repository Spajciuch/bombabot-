const Discord = require("discord.js");
const ms = require("ms");
const config = require('../config.json')
module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES"))
  return message.reply("Nie masz uprawnień")
    if(pingi.val() == false) return message.reply('Komenda jest wyłączona');
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nie masz uprawnień");
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("Nie mogę znaleźć tego użytkownika");
    let muterole = message.guild.roles.find(`name`, "Muted");
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
tomute.removeRole(muterole.id);
message.channel.send(`<@${tomute.id}> został odmutowany!`);

}

exports.conf = {
    aliases: [],
    permLevel: 2
};

module.exports.help = {
    name: "unmute",
    category:"admin"
}
