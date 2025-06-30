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
  slug: {
    type: String,
    unique: [true, "Slug is Unique mandatory"],
    lowercase: true,
  },
  color: {
    type: String,
    require: [true, "color is require"],
  },
  size: {
    type: String,
    require: [true, "size is require"],
  },
  brand: {
    type: String,
    require: [true, "brand is require"],
  },
  description: {
    type: String,
    require: [true, "brand is require"],
  },
  images: {
    type: Array,
  },
});

const productModel = mongoose.model("products", productSchema);
module.exports = productModel;
