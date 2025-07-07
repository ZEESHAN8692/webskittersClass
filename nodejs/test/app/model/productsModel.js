import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
    price: {
        type:Number,
        required:true
    },
  slug: {
    type: String,
    unique: true,
  },
  category: {
    type:String,
     trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  image: {
    type: String, 
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true
});
const productModel = mongoose.model('Product', productSchema);
export default productModel;