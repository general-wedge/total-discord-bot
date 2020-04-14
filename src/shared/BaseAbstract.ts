import {BaseCommandInterface} from './Base'
import {Message, MessageEmbed} from 'discord.js'

export abstract class BaseCommandAbstract implements BaseCommandInterface {
  public command: string
  public description: string
  public message: Message
  public args: [string]

  constructor() {}

  public abstract handleMessage(): void

  public sendMessage(message: string | MessageEmbed) {
    this.message.channel.send(message)
  }

  get getMessage(): Message {
    return this.message
  }

  set setMessage(value: Message) {
    this.message = value
  }

  get getArgs(): [string] {
    return this.args
  }

  set setArgs(value: [string]) {
    this.args = value
  }
}
