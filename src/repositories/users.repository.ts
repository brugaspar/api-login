import UserModel from "../models/users.model";

import { ERR_DUPLICATED_EMAIL } from "../helpers/errorTypes";

export interface UserData {
  _id: string;
  name: string;
  birthday: string;
  email: string;
  password: string;
};

const create = async (userData: UserData) => {
  const userExists = await UserModel.exists({ email: userData.email });

  if(userExists) {
    throw new Error(ERR_DUPLICATED_EMAIL);
  }

  const userModel = new UserModel(userData);

  return userModel.save();
};

export const findByEmail = (email: string) => UserModel.findOne({ email }) as any;

export default {
  create
};