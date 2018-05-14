const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}hello`){
    return message.channel.send("Hello!")
  }
  if(cmd === `${prefix}botinfo`){
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#5c0a68")
    .addField("Bot Name", bot.user.username)
    .addField("Bot Description", "Economy, Moderation, Fun And More")
    .addField("Created", "13/05/18")
    .addField("prefix", botconfig.prefix)
    .addField("Author", "@Lexxq#9678")
    .addField("Created With", "JavaScript")
    .setThumbnail(bicon);

    return message.channel.send(botembed);
  }

  if(cmd === `${prefix}help`){
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setTitle("Help")
  .setDescription("Library Of Commands")
  .addField("Ping", "Pong!")
  .addField("botinfo", "Info About Bot")
  .setColor("#5c0a68");

  return message.channel.send(botembed);
 }
 if(cmd === `${prefix}ping`){
    return message.channel.send(`Pong! \`${bot.pings[0]}ms\``);
 }
 if(cmd === `${prefix}say`){
   return message.channel.send(`${user.content}`);
 }

 if(cmd === `${prefix}8ball`){
    var answers = ["Definitely", "Of course", "Nope", " Ask Again Later!"];
    var randomNumber = Math.floor(Math.random() * answers.length);
    var answer = answers[randomNumber];
    return; message.channel.send(answers);
}



return;
message.channel.sendMessage("Unknown Command, Please Do nd!help")





});
bot.login(botconfig.token);
