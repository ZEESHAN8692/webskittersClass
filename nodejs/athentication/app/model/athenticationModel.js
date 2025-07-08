const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
  },
  isAdmin: {
    type: Boolean,
    required: [true, "isAdmin is required"],
    default: false,
  },
  isVerified: {
    type: Boolean,
    required: [true, "isVerified is required"],
    default: false,
  },
  profile_pic: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
