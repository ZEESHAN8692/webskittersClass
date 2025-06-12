const Product = require("../model/product.model");

class ProductController {
  async createProduct(req, res) {
    try {
      const { name, price, size, color, description, brand } = req.body;
      const data = new Product({
        name,
        price,
        size,
        color,
        description,
        brand,
      });
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

  async getProduct(req, res) {
    try {
      const data = await Product.find();
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
      const data = await Product.findById(id);
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

      const data = await Product.findByIdAndUpdate(id, req.body);
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
      const data = await Product.findByIdAndDelete(id);
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
