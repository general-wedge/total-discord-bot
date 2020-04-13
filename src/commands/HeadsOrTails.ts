import config from '../config'
import {CommandsEnum} from './../common/CommandsEnum'
import {BaseCommandInterface} from '../common/Base'

export class HeadsOrTailsCommand implements BaseCommandInterface {
  public name: string
  public description: string
  public message: any

  constructor(_message: any = {}) {
    this.name = `${config.prefix}${CommandsEnum.HeadsOrTails}`
    this.description =
      'This command flips a coin for heads or tails and posts the result.'
    this.message = _message
  }

  public handleMessage() {
    const headsOrTails = Math.floor(Math.random() * 2) == 0
    if (headsOrTails) {
      this.sendMessage('You flipped heads!')
    } else {
      this.sendMessage('You flipped tails!')
    }
  }

  public sendMessage(message: string): string {
    return this.message.channel.send(message)
  }
}
