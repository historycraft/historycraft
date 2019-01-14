const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("534422160484073512")
setInterval(function() {
channel.send(`SYRIA`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
