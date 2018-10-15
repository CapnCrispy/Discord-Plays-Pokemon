const path = require('path');

let client = new (require('discord.js-commando').Client)({
  owner: process.env.DISCORD_OWNER,
  commandPrefix: process.env.COMMAND_PREFIX,
  unknownCommandResponse: false
});

client.registry
.registerDefaults()
.registerGroups([
  [
    'controls',
    'Controls'
  ]
])
.registerCommandsIn(path.join(__dirname, 'commands'));

client.login(process.env.DISCORD_TOKEN);

module.exports = client;
