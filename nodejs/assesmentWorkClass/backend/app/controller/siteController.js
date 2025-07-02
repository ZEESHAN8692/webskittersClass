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
  async getSingleProduct(req, res) {
    try {
      const { slug } = req.params;
      const product = await productModel.findOne({ slug });
      //   console.log(product);
      if (!product) {
        return res
          .status(404)
          .json({ status: false, message: "Product not found" });
      }
      res.render("site/single-product", { product });
    } catch (error) {
      res.status(500).json({ status: false, message: error.message });
    }
  }
}

module.exports = new SiteController();
