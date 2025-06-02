class PriceController {
  async pricePage(req, res) {
    res.render("pricing");
  }
}
module.exports = new PriceController();
