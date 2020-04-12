import server from "fastify";

const fastify = server();

export const bootstrapFastifyServer = async () => {
  fastify.listen(process.env.APP_PORT, (err: any, address: any) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    console.log(`Server started on port ${process.env.APP_PORT}`);
  });
};
