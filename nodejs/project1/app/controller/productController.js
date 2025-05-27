class ProductControler {
  async productPage(req, res) {
    res.send("Product Page ");
  }
}

module.exports = new ProductControler();
