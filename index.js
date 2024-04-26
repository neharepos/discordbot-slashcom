const { Client, GatewayIntentBits } = require ("discord.js");

const client = new Client({ 
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessage] 
});


client.on('messageCreate', message => {
    console.log
})