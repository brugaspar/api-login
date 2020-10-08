import { ServerRoute } from "@hapi/hapi";

import loginHandler from "../handlers/login.handler";
import loginSchema from "../schemas/login.schema";

const authRoute: ServerRoute[] = [
  {
    method: "POST",
    path: "/login",
    handler: loginHandler.login,
    options: {
      auth: false,
      validate: {
        payload: loginSchema as any
      }
    }    
  }
];

export default authRoute;