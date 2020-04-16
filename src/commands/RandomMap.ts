import {Common} from './../common/Common'
import {CommandsEnum} from '../common/CommandsEnum'
import {BaseCommandAbstract} from '../shared/BaseAbstract'
import {GoalsList, MapList} from '../assets/data/static'
import {MessageDelegate} from '../common/MessageDelegate'

export class RandomMap extends BaseCommandAbstract {
  private maps: Array<string>
  private goals: Array<string>

  constructor() {
    super()
    this.command = `${CommandsEnum[CommandsEnum.random]}`
    this.description = 'This command picks a random map in Escape from Tarkov'
    this.maps = MapList // exported string array from /assets/data/static.ts
    this.goals = GoalsList // exported string array from /assets/data/static.ts
  }

  public handleMessage() {
    let goal = ''
    let map = ''
    const shuffledMaps = Common.shuffle(this.maps)
    map = shuffledMaps[0]
    if (this.args.length > 0) {
      if (this.args.shift() === 'goal') {
        const shuffledGoals = Common.shuffle(this.goals)
        goal = shuffledGoals[0]
      }
    }

    const embed = MessageDelegate.getTarkovMessageEmbed('Random Map Wheel')
      .addField('Map', map)
      .addField('Random Goal', goal !== '' ? goal : 'No goal for this spin!')
    this.sendMessage(embed)
  }
}
