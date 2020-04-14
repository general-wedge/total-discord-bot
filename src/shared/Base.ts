import {Message, MessageEmbed} from 'discord.js'

export interface BaseCommandInterface {
  command: string
  description: string
  message: Message
  args: [string]
  handleMessage(): void
  sendMessage(input: string | MessageEmbed): void
}
