const productModel = require("../model/productModel");
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

  async findProductById(req, res) {
    try {
      const products = await productModel.findById(req.params.id);
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
      const { title, price, brand, description } = req.body;
      const newProduct = new productModel({
        title,
        price,
        brand,
        description,
      });

      if (req.file) {
        console.log(req.file);

        newProduct.image = `${req.protocol}://${req.get("host")}/uploads/${
          req.file.filename
        }`;
      }

      const product = await newProduct.save();

      return res.status(201).json({
        status: true,
        message: "Product created successfully",
        data: product,
      });
    } catch (error) {
      res.status(500).json({ status: false, message: error.message });
    }
  }

  async updateProduct(req, res) {
    try {
      const data = req.body;
      if (req.file) {
        const imagePath = path.join(__dirname, "../../uploads", req.body.image);
        fs.unlink(imagePath, (err) => {
          if (err) {
            console.error("Error deleting image:", err);
          }
        });
        data.image = `${req.protocol}://${req.get("host")}/uploads/${
          req.file.filename
        }`;
      }

      const updateProduct = await productModel.findByIdAndUpdate(
        req.params.id,
        data,
        {
          new: true,
          runValidators: true,
        }
      );

      return res.status(200).json({
        status: true,
        message: "Product updated successfully",
        data: updateProduct,
      });
    } catch (error) {
      res.status(500).json({ status: false, message: error.message });
    }
  }

  async deleteProduct(req, res) {
    try {
      const product = await productModel.findById(req.params.id);

      if (!product) {
        return res.status(404).json({
          status: false,
          message: "Product not found",
        });
      }

      if (product.image) {
        const imagePath = path.join(__dirname, "../../uploads", product.image);
        fs.unlink(imagePath, (err) => {
          if (err) {
            console.error("Error deleting image:", err);
          }
        });
      }

      await productModel.findByIdAndDelete(req.params.id);

      return res.status(200).json({
        status: true,
        message: "Product deleted successfully",
      });
    } catch (error) {
      res.status(500).json({ status: false, message: error.message });
    }
  }
}

module.exports = new ProductController();
