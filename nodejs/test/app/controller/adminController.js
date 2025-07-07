import productModel from "../model/productsModel.js";
import slugify from "slugify";
import fs from "fs";
import path from "path";
class AdminController {
  async getDashboard(req, res) {
    res.render("admin/dashboard");
  }
  async getProducts(req, res) {
    const data = await productModel.find({ isDeleted: false });
    res.render("admin/products", { products: data });
  }

  async addProducts(req, res) {
    res.render("admin/add-product");
  }
  async updateProducts(req, res) {
    const productId = req.params.id;
    res.render("admin/update-product", { productId });
  }

  async addProduct(req, res) {
    try {
      const { name, price, description, category } = req.body;

      if (!category) {
        return res.status(400).send("Category is required");
      }

      let obj = {
        name,
        slug: slugify(name, { lower: true }),
        category,
        price,
        description,
      };

      if (req.file) {
        const protocol = req.protocol;
        const host = req.get("host");
        obj.image = `${protocol}://${host}/${req.file.filename}`;
      }

      const product = new productModel(obj);
      await product.save();
      res.redirect("/admin/products");
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async updateProduct(req, res) {
    const id = req.params.id;
    try {
      const { name, price, description, category } = req.body;

      if (!category) {
        return res.status(400).send("Category is required");
      }

      // Find the existing product
      const existingProduct = await productModel.findById(id);
      if (!existingProduct) {
        return res.status(404).send("Product not found");
      }

      let obj = {
        name,
        slug: slugify(name, { lower: true }),
        category,
        price,
        description,
      };

      if (req.file) {
        // Delete old image if exists
        if (existingProduct.image) {
          const oldImagePath = path.join(
            "uploads",
            path.basename(existingProduct.image)
          );
          try {
            fs.unlinkSync(oldImagePath);
          } catch (err) {
            console.error("Failed to delete old image:", err);
          }
        }
        const protocol = req.protocol;
        const host = req.get("host");
        obj.image = `${protocol}://${host}/${req.file.filename}`;
      }

      await productModel.findByIdAndUpdate(id, obj, { new: true });

      res.redirect("/admin/products");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async deleteProduct(req, res) {
    const id = req.params.id;
    try {
      const product = await productModel.findByIdAndDelete(id);
      if (!product) {
        return res.status(404).send("Product not found");
      }
      if (product.image) {
        const imagePath = path.join("uploads", product.image);
        try {
          fs.unlinkSync(imagePath);
        } catch (err) {
          console.error("Failed to delete image:", err);
        }
      }

      res.redirect("/admin/products");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
}

export default new AdminController();
