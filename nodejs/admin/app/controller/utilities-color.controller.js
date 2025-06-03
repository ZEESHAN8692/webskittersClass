class UtilitiesColorController {
  async utilitiesColorPage(req, res) {
    try {
      res.render("utilities-color");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new UtilitiesColorController();
