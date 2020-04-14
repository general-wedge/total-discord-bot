import Discord from 'discord.js'
import config from '../config'
import {CommandContext} from '../common/CommandContext'
import {CommandFactory} from '../common/CommandFactory'
import {bootstrapCommands} from './commands'

export const bootstrapDiscordBot = () => {
  // create a new Discord client
  const client = new Discord.Client()

  // login to Discord with your app's token
  client.login(process.env.APP_TOKEN)

  // when the client is ready, run this code
  // this event will only trigger one time after logging in
  client.once('ready', () => {
    bootstrapCommands()
  })

  client.on('message', (message: any) => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return

    const args = message.content.slice(config.prefix.length).split(/ +/)
    const commandName = args.shift().toLowerCase()

    if (!CommandFactory.commands[commandName]) return

    const command = CommandFactory.commands[commandName]
    command.message = message
    command.args = args

    const context = new CommandContext(command)
    context.runCommand()
  })
}
