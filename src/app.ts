import "dotenv/config";
import "./services/mongo.service";

import jwtHapiAuth from "hapi-auth-jwt2";

import jwtStrategy from "./auth/strategies/jwt.strategy";

import server from "./server";
import routes from "./routes";

const init = async () => {
  server.route(routes);
  
  await server.register(jwtHapiAuth);

  server.auth.strategy(jwtStrategy.name, jwtStrategy.schema, jwtStrategy.options)

  server.auth.default(jwtStrategy.name);

  await server.start();
  console.log(`\n✔ Server running on ${server.info.uri}\n`);
};

process.on("uncaughtException", (err) => {
  console.log(err);
  process.exit(1);
});

init();