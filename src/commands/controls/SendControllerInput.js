'use-strict';
const config = require('../../config/config.json');
const commando = require('discord.js-commando');
var robot = require('robotjs');
//var fs = require('fs');
//var config = JSON.parse(fs.readFileSync('../../config/config.json', 'utf8'));
module.exports = class SendControllerInputCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'input',
      aliases: ['ctrl', 'sendcontrol', 'control'],
      group: 'controls',
      memberName: 'memname',
      description: "Send controller input to server.",
      examples: [
        `${process.env.COMMAND_PREFIX}input MoveRight`
      ],
      throttling: {
        usages: parseInt(process.env.CONTROL_THROTTLE_USAGES),
        duration: parseInt(process.env.CONTROL_THROTTLE_DURATION)
      },
	  argscount: 1,
	  
	  args: [
		  {
			  key: 'btn',
			  prompt: 'Enter a controller button.',
			  type: 'string',
			  infinite: false,
			  //validate: //function to validate that argument is a valid button input, as defined by config file (/src/conf.json).
		  }
	  ]
    });
  }

  async run(message, args) {
	var btn = args.btn;
	if(config.MainConfig.ButtonMapping.ButtonCommandAliases.indexOf(btn) > -1){
		console.log("Alias match!");
		console.log("Alias: " + config.MainConfig.ButtonMapping.ButtonCommandAliases.btn);
		console.log("Keypress: " + config.MainConfig.ButtonMapping.ButtonEmulatorKeys[config.MainConfig.ButtonMapping.ButtonCommandAliases.indexOf(btn)]);
		robot.keyTap(config.MainConfig.ButtonMapping.ButtonEmulatorKeys[config.MainConfig.ButtonMapping.ButtonCommandAliases.indexOf(btn)]); //send keyboard input.
	}else{
		console.log("Invalid alias. btn: " + btn);
		
	}
	
	console.log("Command Recieved! Args: " + args.btn);
  }
};