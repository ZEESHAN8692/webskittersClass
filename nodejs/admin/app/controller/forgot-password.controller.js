class ForgotController {
  async forgotPage(req, res) {
    try {
      res.render("forgot-password");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new ForgotController();
