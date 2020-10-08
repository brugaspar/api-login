import bcrypt from "bcryptjs";

const make = (value: any) => bcrypt.hash(value, 10);

const compare = (value: any, hashedValue: any) => bcrypt.compare(value, hashedValue);

export default {
  make,
  compare
};