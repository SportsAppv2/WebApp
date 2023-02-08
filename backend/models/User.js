import mongoose, { mongo } from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  email: { type: String, required: true },
  password: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  verified: { type: Boolean, default: false },
});

const User = mongoose.model("User", UserSchema);

export default User;
