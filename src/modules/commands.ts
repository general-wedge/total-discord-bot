import {CommandsEnum} from './../common/CommandsEnum'
import config from '../config'
import {HeadsOrTailsCommand} from './../commands/HeadsOrTails'
import {CommandFactory} from '../common/CommandFactory'
import {RoundRobinCommand} from './../commands/RoundRobin'

export const bootstrapCommands = async () => {
  CommandFactory.populateCommandsCollection([
    {create: () => new RoundRobinCommand()},
    {create: () => new HeadsOrTailsCommand()},
  ])
}
