class PortfolioController {
  async portfoli(req, res) {
    res.render("portfolio");
  }
}
module.exports = new PortfolioController();
