import {MessageDelegate} from '../common/MessageDelegate'
import {MessageEmbed} from 'discord.js'

import {Common} from './../common/Common'
import {CommandsEnum} from '../common/CommandsEnum'
import {BaseCommandAbstract} from '../shared/BaseAbstract'

export class RoundRobin extends BaseCommandAbstract {
  constructor() {
    super()
    this.command = `${CommandsEnum[CommandsEnum.rr]}`
    this.description = 'Generates a round-robin order of players.'
  }

  public handleMessage(): void {
    if (this.args.length <= 0) return
    const shuffledArray = Common.shuffle(this.args)
    this.sendMessage(this.formatReplyMessage(shuffledArray))
  }

  private formatReplyMessage(shuffledPlayerArray: Array<string>): MessageEmbed {
    const embed = MessageDelegate.getTarkovMessageEmbed('Round Robin Order')

    if (shuffledPlayerArray.length > 0) {
      shuffledPlayerArray.forEach((name, index) => {
        embed.addField(`Player ${index + 1}`, name)
      })
    }

    return embed
  }
}
