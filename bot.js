const Discord = require("discord.js");
const PREFIX = "&";

var bot = new Discord.Client();

bot.on("ready", function() {
  console.log("Prisijungta!");
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
    case "taisykles":
      var embed = new Discord.RichEmbed()
          .addField("1. Nesityčioti.", "1 kartas - warning, 2 kartas - mute 3 dienai, 3 kartas - ban visam laikui. ")
          .addField("2. Nefloodinti chat'o", "1 kartas - kick, 2 kartas - kartas mute 1 dienai, 3 kartas - ban 7 dienom. ")
      message.author.sendEmbed(embed);
      break;
      
      
  }
});

bot.login(process.env.BOT_TOKEN);
