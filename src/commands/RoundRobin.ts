import {BaseCommandInterface} from '../common/Base'
import config from '../config'
import {CommandsEnum} from '../common/CommandsEnum'

export class RoundRobinCommand implements BaseCommandInterface {
  public message: any
  public name: string
  public description: string
  public playerList: Array<string>

  constructor(_message: any = {}) {
    this.name = `${config.prefix}${CommandsEnum.RoundRobin}`
    this.description = 'Generates a round-robin order of players.'
    this.message = _message
    this.playerList = ['Austin', 'Karter', 'Mike', 'Dan', 'Brad', 'Derek']
  }

  public handleMessage(): void {
    if (this.message.content === '-rr') {
      const shuffledArray = this.shuffle(this.playerList)
      this.sendMessage(this.formatReplyMessage(shuffledArray))
    }
  }

  public sendMessage(message: string): string {
    return this.message.channel.send(message)
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
