class LoginController {
  async loginkPage(req, res) {
    try {
      res.render("login");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new LoginController();
