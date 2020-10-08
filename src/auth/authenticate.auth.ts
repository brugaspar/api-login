import Token from "./token.auth";

import userRepository, { UserData } from "../repositories/users.repository";

import { LOGIN_EXPIRATION_TIME } from "./config";

import hash from "../helpers/hash";
import { ERR_USER_NOT_FOUND, ERR_INVALID_PASSWORD } from "../helpers/errorTypes";

const login = async (email: string, password: string) => {
  const user = await userRepository.findByEmail(email) as UserData;

  if(!user) {
    throw new Error(ERR_USER_NOT_FOUND);
  }

  const isValidPassword = await hash.compare(password, user.password);

  if(!isValidPassword) {
    throw new Error(ERR_INVALID_PASSWORD);
  }

  const jwtData = {
    iss: "api-login",
    sub: user._id,
    exp: Math.floor(Date.now() / 1000) + LOGIN_EXPIRATION_TIME
  };

  const token = await Token.generate(jwtData);

  return token;
};

export default {
  login
};