import { bootstrapDiscordBot } from "./modules/discord";
import { bootstrapFastifyServer } from "./modules/fastify";
require("dotenv").config();

async function main() {
  await bootstrapDiscordBot();
  await bootstrapFastifyServer();
}

main();
