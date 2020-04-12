import Discord from "discord.js";
import { CommandContext } from "../commands/CommandContext";
import { RoundRobinCommand } from "../commands/RoundRobin";
import { HeadsOrTails } from "../commands/HeadsOrTails";

export const bootstrapDiscordBot = () => {
  // create a new Discord client
  const client = new Discord.Client();

  // when the client is ready, run this code
  // this event will only trigger one time after logging in
  client.once("ready", () => {
    console.log("Ready!");
  });

  client.on("message", (message: any) => {
    if (message.content === "-rr") {
      const context = new CommandContext(new RoundRobinCommand(message));
      context.runCommand();
    } else if (message.content === "-ht") {
      const context = new CommandContext(new HeadsOrTails(message));
      context.runCommand();
    }
  });

  // login to Discord with your app's token
  client.login(process.env.APP_TOKEN);
};
