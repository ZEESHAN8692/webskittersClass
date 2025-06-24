const mongoose = require("mongoose");

const schema = mongoose.Schema;

const productSchemma = new schema({
  title: {
    type: String,
    require: [true, "Title is Require"],
  },
  price: {
    type: String,
    require: [true, "Price is Require"],
  },
  description: {
    type: String,
    require: [true, "Title is Require"],
  },
  images: {
    type: Array,
    require: [true, "Images is Require"],
  },
});

const productModel = mongoose.model("producs", productSchemma);
module.exports = productModel;
