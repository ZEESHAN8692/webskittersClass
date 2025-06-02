class PortfolioDetailsController {
  async portfoli_details(req, res) {
    res.render("portfolio-details");
  }
}
module.exports = new PortfolioDetailsController();
