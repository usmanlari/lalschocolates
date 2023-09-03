import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  address: String,
  city: String,
  phoneNumber: String,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
