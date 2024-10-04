import { model, Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["super admin", "admin"],
    default: "admin",
  },
  refreshToken: {
    type: String,
  },
});

export default model("User", userSchema);
