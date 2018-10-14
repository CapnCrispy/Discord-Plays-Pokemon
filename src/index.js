const client = new (require('discord.js-commando').Client)({
  owner: process.env.DISCORD_OWNER,
  commandPrefix: process.env.COMMAND_PREFIX,
  unknownCommandResponse: false
});

client.login(process.env.DISCORD_TOKEN);

module.exports = client;
