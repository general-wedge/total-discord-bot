import fs from 'fs'
import {CommandFactory} from '../common/CommandFactory'
import {InstanceLoader} from '../common/InstanceLoader'
import {BaseCommandInterface} from '../shared/Base'

export const bootstrapCommands = async () => {
  const commandFiles = fs
    .readdirSync(__dirname + '/../commands')
    .filter(file => file.endsWith('.ts'))

  commandFiles.forEach((file, index) => {
    import(`../commands/${file}`).then((obj: BaseCommandInterface) => {
      const instance: BaseCommandInterface = InstanceLoader.getInstance<
        typeof obj
      >(obj)
      CommandFactory.populateCommandsCollection([instance])
    })
  })
}
