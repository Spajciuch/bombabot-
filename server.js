const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection()
var config = require("./config.json")
var prefix = config.prefix
var fs = require('fs')
fs.readdir(`./commands/`,(err, files)=>{
  if(err) console.log(err)
  let jsfile = files.filter(f => f.split(".").pop() == "js")
  if(jsfile.length <= 0){
    console.log("Nie znaleziono komend!")
  }
  jsfile.forEach((f,i)=> {
    let props = require(`./commands/${f}`)
    console.log(`[Załadowano] ${f}`)
    client.commands.set(props.help.name, props)
  })
})


client.on('ready', () => {
	var moment = require('moment')
	var ytspeak = client.guilds.get("349889832899706883")
	
	setInterval(function(){
		let online = ytspeak.members.filter(member => member.user.presence.status !== 'offline');
	var hr = new Date().getHours() +2
	if(hr == 25) hr = 1
		var high = ''
		if(high<online.size-ytspeak.members.filter(m => m.user.bot).size) high = online.size-ytspeak.members.filter(m => m.user.bot).size
  client.channels.get("470869924647141397").edit({name: `Osób online: ${online.size-ytspeak.members.filter(m => m.user.bot).size}`});
  client.channels.get("470869840027189248").edit({name: `Liczba Członków: ${ytspeak.memberCount}`});
  client.channels.get("470869709525614592").edit({name: `Liczba botów: ${ytspeak.members.filter(m => m.user.bot).size}`})
  client.channels.get("473410352013508610").edit({name: `Data: ${moment.utc(new Date()).format('DD.MM.YYYY')}`})
  client.channels.get("473410461669392385").edit({name: `Godzina: ${hr}:${moment.utc(new Date()).format('mm:ss')}`})
  client.channels.get("474892701213523968").edit({name:`Rekord Online: ${high}`})
  },1000)
  console.log(`Zalogowano jako ${client.user.username}`);
});

client.on('message', message => {
  	if (message.author.bot) return;
 	 let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
	var args = message.content.slice(prefix.length).trim().split(/ +/g);;
	var command = args.shift().toLowerCase();
  	let commandfile = client.commands.get(cmd.slice(prefix.length));
if(commandfile) commandfile.run(client, message, args);
  if (message.content.indexOf(prefix) !== 0) return;
});

client.login(process.env.TOKEN);
