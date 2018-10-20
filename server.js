const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection()
var config = require("./config.json")
var prefix = config.prefix
var fs = require('fs')
var firebase = require('firebase')
var config = {
    apiKey: process.env.API,
    authDomain: process.env.DOM,
    databaseURL: process.env.URL,
    projectId: process.env.ID,
    storageBucket: "",
    messagingSenderId: process.env.SID
  };
  firebase.initializeApp(config);
var database = firebase.database()
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
	database.ref(`/staty/online`).once("value")
	.then(async dbo => {
	var high = dbo.val()
	var moment = require('moment')
	var ytspeak = client.guilds.get("349889832899706883")
	
	setInterval(function(){
		
	
		let online = ytspeak.members.filter(member => member.user.presence.status !== 'offline');
	var hr = new Date().getHours() +2
	if(hr == 25) hr = 1
		
		if(high<online.size-ytspeak.members.filter(m => m.user.bot).size) {
			high = online.size-ytspeak.members.filter(m => m.user.bot).size
			database.ref(`/staty/`).set({ 
				online:high
			})
		}
client.channels.get("503173639760510976").edit({name: `Osób online: ${online.size-ytspeak.members.filter(m => m.user.bot).size}`});
  client.channels.get("503173705766273024").edit({name: `Użytkownicy: ${ytspeak.memberCount}`});
//   client.channels.get("503173739886936085").edit({name: `Liczba botów: ${ytspeak.members.filter(m => m.user.bot).size}`})
  client.channels.get("503173762095513601").edit({name: `Data: ${moment.utc(new Date()).format('DD.MM.YYYY')}`})
  client.channels.get("503173903254945802").edit({name: `Godzina: ${hr}:${moment.utc(new Date()).format('mm:ss')}`})
  client.channels.get("503173739886936085").edit({name:`Rekord Online: ${high}`})
  },1000)
  console.log(`Zalogowano jako ${client.user.username}`);
	})
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
