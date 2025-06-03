class CartsController {
  async chartsPage(req, res) {
    try {
      res.render("charts");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new CartsController();
