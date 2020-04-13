import {BaseCommandInterface} from './Base'
export class CommandContext {
  private command: BaseCommandInterface

  constructor(_command: BaseCommandInterface) {
    this.command = _command
  }

  public runCommand(): void {
    this.command.handleMessage()
  }
}
