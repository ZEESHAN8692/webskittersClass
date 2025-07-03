const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  category: String,
  price: Number,
  color: String,
  size: String,
  image: String
});

module.exports = mongoose.model('Product', productSchema);
