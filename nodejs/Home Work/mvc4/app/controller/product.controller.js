class ProductController {
  async productPage(req, res) {
    res.send("<h1>Product Page </h1>");
  }
}

module.exports = new ProductController();
