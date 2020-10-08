import { ServerRoute } from "@hapi/hapi";

import userHandler from "../handlers/users.handler";
import userSchema from "../schemas/users.schema";

const usersRoute: ServerRoute[] = [
  {
    method: "POST",
    path: "/users",
    handler: userHandler.create,
    options: {
      auth: false,
      validate: {
        payload: userSchema as any
      }
    }    
  },
  {
    method: "GET",
    path: "/users",
    handler: () => {
      return [];
    }
  }
];

export default usersRoute;