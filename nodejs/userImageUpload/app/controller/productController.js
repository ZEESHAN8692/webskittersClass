const ProductModel = require("../model/product.model");
const fs = require("fs");
const path = require("path");

class ProductController {
  async createProduct(req, res) {
    try {
      const { title, price, description } = req.body;
      const data = new ProductModel({ title, price, description });

      if (req.files) {
        const imageUrls = req.files.map(
          (file) => `${req.get("host")}/uploads/products/${file.filename}`
        );
        data.images = imageUrls;
        // console.log(req.files);
        // console.log(imageUrls);
      }
      const result = await data.save();

      return res.status(201).json({
        status: true,
        message: "Data submit Success",
        data: result,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getProducts(req, res) {
    try {
      const data = await ProductModel.find();
      return res.json({
        status: true,
        data: data,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async singleProduct(req, res) {
    try {
      const id = req.params.id;
      const data = await ProductModel.findById(id);
      return res.json({
        status: true,
        data: data,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateProduct(req, res) {
    try {
      const id = req.params.id;
      const existingData = await ProductModel.findById(id);

      const UpdateData = req.body;

      if (existingData.images && existingData.images.length > 0) {
        existingData.images.forEach((imgUrl) => {
          const imagesPath = path.join(
            __dirname,
            "../../uploads/products",
            path.basename(imgUrl)
          );
          fs.unlink(imagesPath, (err) => {
            if (err) console.error("Image delete failed:", err);
            console.log("Old image deleted:", imagesPath);
          });
        });

        console.log(req.files);
        const imageUrls = req.files?.map(
          (file) => `${req.get("host")}/uploads/products/${file.filename}`
        );
        UpdateData.images = imageUrls;
      }

      const data = await ProductModel.findByIdAndUpdate(id, UpdateData, {
        new: true,
      });

      return res.json({
        status: true,
        message: "Data Update Success",
        data: data,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async deleteProduct(req, res) {
    try {
      const id = req.params.id;
      const data = await ProductModel.findByIdAndDelete(id);
      if (data && data.images && data.images.length > 0) {
        data.images.forEach((imgUrl) => {
          const imagePath = path.join(
            __dirname,
            "../../uploads/products",
            path.basename(imgUrl)
          );
          fs.unlink(imagePath, (err) => {
            if (err) throw err;
            console.log("Images Delete Successfully");
          });
        });
      }
      return res.json({
        status: true,
        message: "Data Delete Success",
        data: data,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new ProductController();
