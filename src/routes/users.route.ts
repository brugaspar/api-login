import { options } from "@hapi/joi";
import userHandler from "../handlers/users.handler";
import userSchema from "../schemas/users.schema";

export default [
  {
    method: "POST",
    path: "/users",
    handler: userHandler.create,
    options: {
      validate: {
        payload: userSchema
      }
    }
  }
];