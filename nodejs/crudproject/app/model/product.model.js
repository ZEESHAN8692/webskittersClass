const mongoose = require("mongoose");

const schema = mongoose.Schema;

const productSchema = new schema({
  name: {
    type: String,
    required: [true, "name is Require"],
  },
  price: {
    type: Number,
    required: [true, "Number is Require"],
  },
  size: {
    type: Array,
    required: [true, "Size is Require"],
  },
  color: {
    type: Array,
    required: [true, "color is Require"],
  },
  description: {
    type: String,
    required: [true, "description is Require"],
  },
  brand: {
    type: String,
    required: [true, "Brand is Require"],
  },
});

const productModel = mongoose.model("products", productSchema);
module.exports = productModel;
