import {BaseCommandAbstract} from '../shared/BaseAbstract'
import {CommandsEnum} from '../common/CommandsEnum'
import {GoalsList, MapSpecificGoalList} from '../assets/data/static'
import {Common} from '../common/Common'
import {MessageDelegate} from '../common/MessageDelegate'

export class RandomScenario extends BaseCommandAbstract {
  private goals: Array<string>
  private mapSpecificGoalArray: Array<string>
  private mapSpecificGoals: object

  constructor() {
    super()
    this.command = `${CommandsEnum[CommandsEnum.goal]}`
    this.description = 'This command picks a random map in Escape from Tarkov'
    this.goals = GoalsList // exported string array from /assets/data/static.ts
    this.mapSpecificGoals = MapSpecificGoalList // exported string array from /assets/data/static.ts
  }

  public handleMessage() {
    let goal = ''
    this.mapSpecificGoalArray = Object.values(this.mapSpecificGoals)
    this.goals.concat(this.mapSpecificGoalArray)
    const shuffledScenarios = Common.shuffle(this.goals)
    goal = shuffledScenarios[0]

    const embed = MessageDelegate.getTarkovMessageEmbed(
      'Random Goal Wheel',
    ).addField('Random Goal', goal)

    this.sendMessage(embed)
  }
}
