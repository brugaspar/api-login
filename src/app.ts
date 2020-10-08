import "dotenv/config";
import "./services/mongo.service";

import server from "./server";
import routes from "./routes";

const init = async () => {
  server.route(routes);

  await server.start();
  console.log(`\n✔ Server running on ${server.info.uri}\n`);
};

process.on("uncaughtException", (err) => {
  console.log(err);
  process.exit(1);
});

init();