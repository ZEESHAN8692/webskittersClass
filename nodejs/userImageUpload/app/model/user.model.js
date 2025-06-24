const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  name: {
    type: String,
    required: [true, "name is Require"],
  },
  email: {
    type: String,
    required: [true, "email is Require"],
  },
  phone: {
    type: String,
    required: [true, "phone is Require"],
  },
  city: {
    type: String,
    required: [true, "city is Require"],
  },
  image: {
    type: String,
  },
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
