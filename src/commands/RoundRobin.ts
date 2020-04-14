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
    const shuffledArray = this.shuffle(this.args)
    this.sendMessage(this.formatReplyMessage(shuffledArray))
  }

  private formatReplyMessage(shuffledPlayerArray: Array<string>): string {
    let replyMessage = `Round Robin Order: \n`

    if (shuffledPlayerArray.length > 0) {
      shuffledPlayerArray.forEach((name, index) => {
        replyMessage += `Player ${index + 1}: ${name}\n`
      })
    }

    return replyMessage
  }

  private shuffle(playerList: Array<string>): Array<string> {
    let currentIndex = playerList.length,
      temporaryValue,
      randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      // And swap it with the current element.
      temporaryValue = playerList[currentIndex]
      playerList[currentIndex] = playerList[randomIndex]
      playerList[randomIndex] = temporaryValue
    }

    return playerList
  }
}
