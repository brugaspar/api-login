import mongoose, { Schema } from "mongoose";
import { v4 } from "uuid";

const UserSchema = new Schema({
  _id: {
    type: String,
    default: v4()
  },
  name: String,
  birthday: Date,
  email: {
    type: String,
    unique: true
  },
  password: String
}, {
  timestamps: {}
});

export default mongoose.model("User", UserSchema);