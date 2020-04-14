import {CommandsEnum} from './../common/CommandsEnum'
import {BaseCommandAbstract} from '../shared/BaseAbstract'

export class HeadsOrTails extends BaseCommandAbstract {
  constructor() {
    super()
    this.command = `${CommandsEnum[CommandsEnum.ht]}`
    this.description =
      'This command flips a coin for heads or tails and posts the result.'
  }

  public handleMessage() {
    const headsOrTails = Math.floor(Math.random() * 2) == 0
    if (headsOrTails) {
      this.sendMessage('You flipped heads!')
    } else {
      this.sendMessage('You flipped tails!')
    }
  }
}
