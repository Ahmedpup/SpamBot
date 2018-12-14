const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523114453034598410")
setInterval(function() {
channel.send(`** spaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaam **`);
}, 30)
})

client.login("NTIzMDQ3MjUwNDc0MDQxMzc1.DvU-KQ.a5kpfRtGanq_Pcdgahpb_XYko2M");
