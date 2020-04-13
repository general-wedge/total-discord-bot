import {BaseCommandInterface, CommandComponent} from './Base'
export class CommandFactory {
  public static commands: {[key: string]: BaseCommandInterface} = {}

  public static populateCommandsCollection(params: CommandComponent[]): void {
    params.map(command => {
      let cmd = command.create()
      this.commands[cmd.name] = cmd
    })
  }
}
