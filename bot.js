const Discord = require("discord.js");
const client = new Discord.Client();
const PREFIX = "&";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", function(message)) {
  if (message.author.equals(client.user)) return;
  
  if (!message.content.startsWith(PREFIX)) return;
  
  var args = message.content.substring(PREFIX).split(" ");
  
  switch (args[0]) {
    case "ding":
        message.channel.sendMessage("dong, dong");
        break;
  }
  
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);
