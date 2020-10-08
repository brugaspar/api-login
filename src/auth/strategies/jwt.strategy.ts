import { ALGORITHM } from "../../auth/config";

const name = "jwt";

const schema = "jwt";

const options = {
  key: process.env.SECRET_KEY,
  validate: () => {
    return { isValid: true }
  },
  verifyOptions: {
    algorithm: [ ALGORITHM ]
  }
};

export default {
  name,
  schema,
  options
};