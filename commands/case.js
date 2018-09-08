const Discord = require("discord.js");
var config = require("../config.json")
module.exports.run = async (client, message, args) => {
var cases = ["FAMAS - Cyanospatter", "G3SG1 - Green Apple", "PP-Bizon - Night Ops", "Nova - Caged Steel", "P200 - Granite Marbleized", "Tec-9 - VariCamo", "Dual Berettas - Stained", "UMP-45 - Gunsmoke", "M249 - Gator Mesh", "Sawed-Off - Snake Camo", "Five-SeveN - Forest Night", "UMP-45 - Urban DDPAT", "MP7 - Forest DDPAT", "Dual Berettas - Colony", "MP-7 - Army Recon", "Dual Berettas - Contractor", "SSg-08 - Blue Spruce", "Galil AR - Sage Spray", "Negev - Army Sheen", "P250 - Sand Dune"]

var choose = Math.floor((Math.random() * 19));
let embed = new Discord.RichEmbed()
.setColor(config.embed_color)
.setTitle("Losowanie CS")
.addField("Wylosowałeś: ", cases[choose].split(" - ")[1], true)
.addField("Do: ", cases[choose].split(" - ")[0], true)
.setImage("https://media.giphy.com/media/pObL5kzwNrFdeL8mFB/giphy.gif")
message.channel.send({embed})
}
module.exports.help = {
  name: "case",
  category:"util"
}
