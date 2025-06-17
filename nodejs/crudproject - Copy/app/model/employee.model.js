const mongoose = require("mongoose");

const schema = mongoose.Schema;

const employeeSchema = new schema({
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
    required: [true, "image is Require"],
  },
  isBlock: {
    type: Boolean,
    required: [true, "isBlock is Require"],
  },
});

const productModel = mongoose.model("employee", employeeSchema);
module.exports = productModel;
