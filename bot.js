const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('ready', async() => {
var server = "513447448799346719"; // ايدي السررفر
var channel = "513447449260589081";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Universe Town  , UnUniverse TownUniverse TownUniverse TownUniverse TownUniverse TownUniverse TownUniverse TownUniverse TownUniverse TownUniverse TownUniverse TownUniverse TownUniverse TownUniverse TownUniverse Towniverse Town , Universe Town , Universe Town , Universe Town , Universe Town , Universe Town , Universe Town , Universe Town , Universe Town ')
    },305);
})


client.login("NDg2MTcxNjM0NTY3MzQ4MjM0.DtIL7A.-IV5EouJ28Sknx5pM2YJVlr05bg");
