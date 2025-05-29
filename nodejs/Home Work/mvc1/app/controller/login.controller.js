class LoginController {
  async loginPage(req, res) {
    res.render("login", { title: "Login Page" });
  }
}

module.exports = new LoginController();
