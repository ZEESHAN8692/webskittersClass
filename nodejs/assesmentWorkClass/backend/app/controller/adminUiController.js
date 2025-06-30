const productModel = require("../model/productModel");
const { Validator } = require("node-input-validator");
const slugify = require("slugify");
const fs = require("fs");
const path = require("path");

class AdminUiProductController {
  async getProducts(req, res) {
    try {
      const products = await productModel.find();
      res.render("admin/index", { products });
    } catch (error) {
      res.status(500).json({ status: false, message: error.message });
    }
  }
  async addProduct(req, res) {
    try {
      res.render("admin/add-product");
    } catch (error) {
      res.status(500).json({ status: false, message: error.message });
    }
  }
  async editProduct(req, res) {
    try {
      const product = await productModel.findById(req.params.id);
      res.render("admin/update-product", { product });
    } catch (error) {
      res.status(500).json({ status: false, message: error.message });
    }
  }
  async createProduct(req, res) {
    try {
      console.log(req.files);
      const { title, price, color, size, brand, description } = req.body;
      const validation = new Validator(req.body, {
        title: "minLength:5",
        price: "required",
      });
      const matched = await validation.check();
      if (!matched) {
        return res.status(422).json({
          status: false,
          message: "validation failed",
          error: validation.errors,
        });
      }
      const images = req.files.map((file) => file.path);
      const product = new productModel({
        title,
        price,
        slug: slugify(title),
        color,
        size,
        brand,
        description,
        images,
      });
      const createdProduct = await product.save();
      if (createdProduct) {
        res.redirect("/admin/products");
      } else {
        res.redirect("/admin/add-products");
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json({ status: false, message: error.message });
    }
  }
  async updateProduct(req, res) {
    try {
      const { title, price, color, size, brand, description } = req.body;
      const images = req.files.map((file) => file.path);
      // Retrieve existing product including its images
      const existingProduct = await productModel.findById(req.params.id);

      // Delete existing images
      if (existingProduct.images && existingProduct.images.length > 0) {
        for (const image of existingProduct.images) {
          // Check if image exists
          if (fs.existsSync(image)) {
            fs.unlinkSync(image);
          }
        }
      }
      const updatedFields = {
        title,
        price,
        slug: slugify(title),
        color,
        size,
        brand,
        description,
        images,
      };
      const updatedProduct = await productModel.findByIdAndUpdate(
        req.params.id,
        updatedFields,
        { new: true }
      );
      if (updatedProduct) {
        // req.flash('succes', 'Product updated')
        res.redirect("/admin/products");
      } else {
        res.redirect(`/admin/edit-product/${req.params.id}`);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }
  async deleteProduct(req, res) {
    try {
      const deletedItem = await productModel.findByIdAndDelete(req.params.id);
      if (deletedItem) {
        // Delete existing images if they exist
        if (deletedItem.images && deletedItem.images.length > 0) {
          for (const image of deletedItem.images) {
            //check if image exists
            if (fs.existsSync(image)) {
              fs.unlinkSync(image);
            }
          }
        }
        // req.flash("deleted", "Item deleted");
      }
      res.redirect("/admin/products");
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }
}

module.exports = new AdminUiProductController();
