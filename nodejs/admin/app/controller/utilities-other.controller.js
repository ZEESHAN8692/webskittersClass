class UtilitiesOtherController {
  async utilitiesOtherPage(req, res) {
    try {
      res.render("utilities-other");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new UtilitiesOtherController();
