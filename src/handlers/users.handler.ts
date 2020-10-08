import { Request, ResponseToolkit } from "@hapi/hapi";
import boom from "@hapi/boom";

import userRepository, { UserData } from "../repositories/users.repository";
import hash from "../helpers/hash";

import { ERR_DUPLICATED_EMAIL } from "../helpers/errorTypes";

const create = async (req: Request, h: ResponseToolkit) => {
  try {
    const userData = req.payload as UserData;

    const hashedPassword = await hash.make(userData.password);

    userData.password = hashedPassword;

    const user = await userRepository.create(userData);

    return h.response(user).code(201);    
  } catch(err) {
    switch(err.message) {
      case ERR_DUPLICATED_EMAIL:
        throw boom.badData("E-mail already registered in our database");
      default:
        throw boom.badImplementation(err);
    }
  }
}

export default {
  create
};