class LoginController {
  async loginPage(req, res) {
    res.send("<h1>Login Page </h1>");
  }
}

module.exports = new LoginController();
