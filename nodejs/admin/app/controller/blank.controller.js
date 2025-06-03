class BlankController {
  async blankPage(req, res) {
    try {
      res.render("blank");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new BlankController();
