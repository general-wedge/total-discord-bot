import {BaseCommandInterface} from '../shared/Base'

export class CommandFactory {
  public static commands: {[key: string]: BaseCommandInterface} = {}

  public static populateCommandsCollection(
    params: BaseCommandInterface[],
  ): void {
    params.map(command => {
      this.commands[command.command] = command
    })
  }
}
