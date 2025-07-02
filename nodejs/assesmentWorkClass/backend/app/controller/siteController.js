const productModel = require("../model/productModel");
class SiteController {
  async getHome(req, res) {
    try {
      const products = await productModel.find();
      res.render("site/index", { products });
    } catch (error) {
      res.status(500).json({ status: false, message: error.message });
    }
  }
  async getSingleProduct(req, res) {}
}

module.exports = new SiteController();
