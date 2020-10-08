import { Request, ResponseToolkit } from "@hapi/hapi";
import boom from "@hapi/boom";

import authenticate from "../auth/authenticate.auth";

import { ERR_USER_NOT_FOUND, ERR_INVALID_PASSWORD, ERR_INVALID_TOKEN } from "../helpers/errorTypes";

const login = async (req: Request, h: ResponseToolkit) => {
  const { email, password } = req.payload as any;

  try {
    const token = await authenticate.login(email, password);

    return h.response({ token }).code(200);
  } catch(err) {
    switch(err.message) {
      case ERR_USER_NOT_FOUND:
        throw boom.badRequest("Invalid e-mail");
      case ERR_INVALID_PASSWORD:
        throw boom.badRequest("Invalid passoword");
      case ERR_INVALID_TOKEN:
        throw boom.badImplementation("Unexpected error when trying to generate authentication token");
      default:
        throw boom.badImplementation(err);
    }
  }
}

export default {
  login
};