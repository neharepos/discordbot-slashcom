const { REST, Routes } = require("discord.js");
const dotenv = require ("dotenv");
dotenv.config()
const commands = [
    {
        name: "create",
        description: "Create a new short URL",
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands("1233327627167596565"),
     { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
}) ();