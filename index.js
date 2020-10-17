// Load up the discord.js library
const Discord = require("discord.js");
/*
 DISCORD.JS VERSION 12 CODE
*/

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();
// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
const { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } = require("constants");
const { TIMEOUT } = require("dns");
// config.token contains the bot's token
// config.prefix contains the message prefix.


client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds I suppose.`);
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`with stand powers i suppose`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members I suppose!`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id}) I suppose`);
});




client.on("message", async message => {
  if (message.content.toLowerCase() === "good boy"){
    message.channel.send("thanks I suppose");
  }
  if(message.member.id === "159985870458322944"){
    message.delete();
  }
  //like, plays za warudo gif lol
  if(message.content === "BIG CORN: THE WORLD!")
 {if(message.member.id !== 411143336330526720){
  message.channel.send("https://tenor.com/view/za-warudo-toki-wo-tomare-gif-8629953");}
  else {
    message.channel.send("https://img.gifmagazine.net/gifmagazine/images/4212153/original.gif");
  }
 }
 //erases channel with the power of The Hand
 if(message.content === "BIG CORN: ZA HANDO!")
 {
  if(message.member.id == 411143336330526720){
  setTimeout(function(){
  message.channel.send("https://tenor.com/view/okuyasu-nijimura-summon-jojo-the-hand-za-hando-gif-14165070");}, 800)
  setTimeout(function(){
    message.channel.send("https://tenor.com/view/scrape-okuyasu-nijimura-za-hando-the-hand-jojo-gif-14165071");
}, 4300)
  setTimeout(function(){message.channel.delete();}, 5400)}
  else {
    message.channel.send("https://img.gifmagazine.net/gifmagazine/images/4212153/original.gif");
  }

}

  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(!message.content.startsWith(config.prefix || config.prefix.toLowerCase() || config.prefix.toUpperCase())) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms I suppose`);
    
  }
  if(command === "say") {
    //count words "kizna" because she is a bitch
    for(var i= 0; i < args.length; i++)
    {
      if(args[i].toLowerCase() === "kizna")
      {
        message.channel.send("lol screw kizna I suppose");//this crap works but causes errors, weird flex but ok
        return;
      }
      else continue;
    }
    //if we got kizna in message then screw kizna
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete(); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage+" I suppose");
    
  }
  
  if(command === "initiate" && args.join(" ") === "bullshit"){
    let h = await message.channel.send("BULLSHIT");
    h.edit("bakugan");
    h.edit("ashes");
    h.edit("bakugan");
    h.edit("ashes");
    h.edit("bakugan");
    h.edit("ashes");
    h.edit("bakugan");
    h.edit("ashes");
    h.edit("bakugan");
    h.edit("ashes");
    h.edit("bakugan");
    h.edit("ashes");
    h.edit("bakugan");
    h.edit("ashes");
    h.edit("bakugan");
    h.edit("ashes");
    h.edit("bakugan");
    h.edit("ashes");
    h.edit("bakugan");
    h.edit("ashes");
    h.edit("bakugan");
    h.edit("ashes");
  }
  
  if(command === "applause") { 
    for (let i = 0; i < 9001; i++)//over 9000!!! 
    {
      message.channel.send("*applause*");//pretty shit tho, only sends 5 messages and rests for 5 sec
    }
  }

 if(command === "ok")
 {
  message.channel.send("https://tenor.com/view/steinsgate-thumbs-up-nice-sweet-cool-gif-10332382");
  message.delete();
 }
 if(command === "shut" && args.join(" ") === "the fuck up")
 {
  message.channel.send("ok then");
  message.channel.send("i like pineapples I suppose");
 }
if(command === "punch" && args.join(" ") === "rush!")
{
  message.delete();
  message.delete();
  message.send("lol how did this reach");
}

});

client.login(config.token);