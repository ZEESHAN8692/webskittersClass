const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    is_verified: { type: Boolean, default: false },
    password: {
      type: String,
      required: true,
    },
    profile_pic: {
      type: String,
      default: "Image",
    },
    role: {
      type: String,
      enum: ["user", "admin", "author"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
