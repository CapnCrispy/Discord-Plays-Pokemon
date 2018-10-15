'use-strict';
const config = require('../../config/config.json');
const commando = require('discord.js-commando');
var robot = require('robotjs');

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
		  }
	  ]
    });
  }

  async run(message, args) {
	var btnArg = args.btn;
	let buttonToPress = config.MainConfig.ButtonMap.filter((item) => {
		return item.Aliases.includes(btnArg);
	})[0];
	
	if(buttonToPress){ //checks for valid button input, as defined by config file (/src/config/conf.json).
		console.log("Alias match!");
		console.log("Alias: " + buttonToPress.Aliases);
		console.log("Keypress: " + buttonToPress.keystroke);
		robot.keyTap(buttonToPress.keystroke); //send keyboard input.
	}else{
		console.log("Invalid alias. btn: " + btnArg);
		
	}
	
	console.log("Command Recieved! Args: " + btnArg);
  }
};