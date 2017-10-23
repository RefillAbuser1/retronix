const { CommandoClient } = require('discord.js-commando');
const CommandoClient = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: '+',
    unknownCommandResponse: false,
    owner: '340861561809797120',
    disableEveryone: false
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['group1', 'Our First Command Group']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log('Logged in!');
    client.user.setGame('Game');
});

client.login(process.env.BOT_TOKEN);
