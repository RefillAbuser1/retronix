const Discord = require("discord.js");
const retronix = new Discord.Client();
const config = require("./config.json");

retronix.on('ready', () => {
  console.log(`Logged in as ${retronix.user.tag}!`);
  console.log(`retronix is online`);

retronix.user.setPresence({game: {name: 'prefix: r.help | Playing: Minecraft', type:0 } });
});
 // Prefix settings
retronix.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);
  // Add Command
  if (command === "add") {
    let numArry = args.map(n=> parseInt(n));
    let total = numArry.reduce( (p, c) => p+c);

    message.channel.sendMessage(total);

  }
  if (command === "help") {
    message.author.sendMessage("List of commands:");
    message.author.sendMessage("``r.say (Says what you tell it to)``");
    message.author.sendMessage("``r.info (updates pretty much)``");
    message.author.sendMessage("``r.website (Says the website of playsales)``");
    message.author.sendMessage("``r.avatar (Posts a pic of your profile pic)``");
    message.author.sendMessage("``r.invite (Join my home discord server!)``");
    message.reply("I'm sending you the help list right now!");
  }
  
  // list of shit
  if (command === "say") {
    message.channel.sendMessage(args.join(" "));
  }
  
  if (command === "website") {
    message.channel.sendMessage("Website: http://forums.mcservervote.net");
  }
 
  if (command === "info") {
    message.channel.sendMessage("ps.serverinfo | Adding soon! |");
  }
  // Shows persons profile picture
  if (command === "avatar") {
    message.reply(message.author.avatarURL);
  }
  
  if (command === "invite") {
    message.author.sendMessage("Home of PlaySales bot: https://discord.gg/smUv2NJ");
    message.reply("I hope you enjoy my home discord server!");
  }

});

retronix.login(process.env.BOT_TOKEN);
