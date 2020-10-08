import Hapi from  "@hapi/hapi";

const server = Hapi.server({
  port: process.env.PORT,
  host: process.env.HOST
});

export default server;