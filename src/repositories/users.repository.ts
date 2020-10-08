import UserModel from "../models/users.model";

interface UserData {
  name: string;
  birthday: string;
  email: string;
  password: string;
};

const create = async (userData: UserData) => {
  const userExists = await UserModel.exists({ email: userData.email });

  if(userExists) {
    throw new Error("ERR_DUPLICATED_EMAIL");
  }

  const userModel = new UserModel(userData);

  return userModel.save();
};

export default {
  create
};