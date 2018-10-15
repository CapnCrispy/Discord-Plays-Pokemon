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
        'example'
      ],
      throttling: {
        usages: parseInt(process.env.CONTROL_THROTTLE_USAGES),
        duration: parseInt(process.env.CONTROL_THROTTLE_DURATION)
      },
	  argscount: 1,
	  
	  args: [
		  {
			  key: 'btn',
			  prompt: 'enter a controller button',
			  type: 'string',
			  infinite: false,
			  //validate: //function to validate that argument is a valid button input, as defined by config file (/src/conf.json).
		  }
	  ]
    });
  }

  async run(message, args) {
	robot.keyTap('c'); //test command by inputting "c" key.
	console.log("Command Recieved. " + "Args: " + args.btn);
  }
};