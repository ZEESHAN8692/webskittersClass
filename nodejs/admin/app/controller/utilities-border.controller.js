class UtilitiesBorderController {
  async utilitiesBorderPage(req, res) {
    try {
      res.render("utilities-border");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new UtilitiesBorderController();
