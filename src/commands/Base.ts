export interface BaseCommandInterface {
  name: string;
  description: string;
  message: any;
  handleMessage(): void;
  sendMessage(input: string): string;
}
