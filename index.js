const { Client, GatewayIntentBits } = require ("discord.js");
const dotenv = require ("dotenv");
dotenv.config()


const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});


client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    message.reply({
        content: "Hi From Bot",
    });
});

client.login(process.env.TOKEN);