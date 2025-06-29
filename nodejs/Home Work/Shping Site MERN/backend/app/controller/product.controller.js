const productModel = require("../model/productModel");
const slugify = require("slugify");
const fs = require("fs");
const path = require("path");
class ProductController {
  async getProducts(req, res) {
    try {
      const products = await productModel.find();
      return res.status(200).json({
        status: true,
        message: "Producsts fetch Successfuly",
        data: products,
      });
    } catch (error) {
      res.status(500).json({ status: false, message: error.message });
    }
  }
  async createProduct(req, res) {
    try {
      const { title, price, colors, size, brand, description } = req.body;
      const data = new productModel({
        title,
        price,
        slug: slugify(title),
        colors,
        size,
        brand,
        description,
      });
      if (req.files) {
        const imageUrls = req.files.map(
          (file) => `${req.get("host")}/uploads/products/${file.filename}`
        );
        data.images = imageUrls;
      }
      const result = await data.save();
      return res.status(201).json({
        status: true,
        message: "Data Create Successfully",
        data,
        result,
      });
    } catch (error) {
      res.status(500).json({ status: false, message: error.message });
    }
  }
  async singleProduct(req, res) {
    try {
      const slug = req.params.slug;
      const data = await productModel.find({ slug });
      return res.status(200).json({
        status: true,
        message: "Data Fetch successfully",
        data: data,
      });
    } catch (error) {
      res.status(500).json({ status: false, message: error.message });
    }
  }

  async findProductById(req, res) {
    try {
      const id = req.params.id;
      const data = await productModel.findById(id);
      return res.status(200).json({
        status: true,
        message: "Data Fetch successfully",
        data: data,
      });
    } catch (error) {
      res.status(500).json({ status: false, message: error.message });
    }
  }
  async updateProduct(req, res) {
    try {
      const id = req.params.id;
      const updateData = req.body;
      const data = await productModel.findById(id);

      if (req.body && data && data.images && data.images.length > 0) {
        data.images.forEach((imgUrl) => {
          const imagesPath = path.join(
            __dirname,
            "../../uploads/products",
            path.basename(imgUrl)
          );
          fs.unlink(imagesPath, (err) => {
            if (err) console.log("Image Delete Field", err);
            else console.log("Image Update Successfully");
          });
        });

        const imageUrls = req.files.map(
          (file) => `${req.get("host")}/uploads/products/${file.filename}`
        );
        updateData.images = imageUrls;
      }
      const update = await productModel.findByIdAndUpdate(id, updateData);
      return res.status(200).json({
        status: true,
        message: "Data Update successfully",
        data: update,
      });
    } catch (error) {
      res.status(500).json({ status: false, message: error.message });
    }
  }
  async deleteProduct(req, res) {
    try {
      const id = req.params.id;
      const data = await productModel.findByIdAndDelete(id);
      if (data && data.images && data.images.length > 0) {
        data.images.forEach((imgUrl) => {
          const imagesPath = path.join(
            __dirname,
            "../../uploads/products",
            path.basename(imgUrl)
          );
          fs.unlink(imagesPath, (err) => {
            if (err) console.log("Image Dlete Field", err);
            else console.log("Images Deleted Successfully");
          });
        });
      }
      return res.status(200).json({
        status: true,
        message: "Data delete successfully",
        data: data,
      });
    } catch (error) {
      res.status(500).json({ status: false, message: error.message });
    }
  }
}

module.exports = new ProductController();
