class ButtonController {
  async buttonsPage(req, res) {
    try {
      res.render("buttons");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new ButtonController();
