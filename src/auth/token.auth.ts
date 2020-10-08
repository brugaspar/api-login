import jwt from "jsonwebtoken";

import { ALGORITHM } from "./config";

import { ERR_INVALID_TOKEN } from "../helpers/errorTypes";

const generate = (payload: object) => (
  new Promise(resolve => {
    jwt.sign(payload, process.env.SECRET_KEY || "", { algorithm: ALGORITHM }, (err, token) => {
      if(err) {
        throw new Error(ERR_INVALID_TOKEN);
      }

      resolve(token);
    });
  })
);

export default {
  generate
};