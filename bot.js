const Discord = require("discord.js");
const bot = new Discord.Client();
const PREFIX = "&";

bot.on('ready', () => {
  console.log(`Prisijungta kaip ${client.user.tag}!`);
});

bot.on("message", function(message) {
  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith(PREFIX)) return;

  var args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case "ping":
      message.channel.sendMessage("Pong!")
      break;
    case "make":
      message.reply("memes")
      break;
    case "Komandos":
      message.author.sendMessage(":thinking:")
    case "Taisykles":
      var embed = new Discord.RichEmbed()
          .addField("1. Nesityčioti.", "1 kartas - warning, 2 kartas - mute 3 dienai, 3 kartas - ban visam laikui. ")
          .addField("2. Nefloodinti chat'o", "1 kartas - kick, 2 kartas - kartas mute 1 dienai, 3 kartas - ban 7 dienom. ")
      message.channel.sendEmbed(embed);
      break;
      
      
  }
});

bot.login(process.env.BOT_TOKEN);
