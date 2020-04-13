import Discord from 'discord.js'
import {CommandContext} from '../common/CommandContext'
import {RoundRobinCommand} from '../commands/RoundRobin'
import {HeadsOrTailsCommand} from '../commands/HeadsOrTails'
import {CommandFactory} from '../common/CommandFactory'
import {bootstrapCommands} from './commands'

export const bootstrapDiscordBot = () => {
  // create a new Discord client
  const client = new Discord.Client()

  // when the client is ready, run this code
  // this event will only trigger one time after logging in
  client.once('ready', () => {
    bootstrapCommands()
  })

  client.on('message', (message: any) => {
    CommandFactory.commands[message.content.split(' ')[0]].message = message
    const context = new CommandContext(
      CommandFactory.commands[message.content.split(' ')[0]],
    )
    context.runCommand()
  })

  // login to Discord with your app's token
  client.login(process.env.APP_TOKEN)
}
