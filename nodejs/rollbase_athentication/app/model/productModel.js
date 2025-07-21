const mongoose = require("mongoose");

const schema = mongoose.Schema;

const productSchema = new schema({
  title: {
    type: String,
    require: [true, "title is require"],
  },
  price: {
    type: String,
    require: [true, "Price is require"],
  },
  brand: {
    type: String,
    require: [true, "brand is require"],
  },
  description: {
    type: String,
    require: [true, "brand is require"],
  },
  image: {
    type: String,
  },
});

const productModel = mongoose.model("products", productSchema);
module.exports = productModel;
