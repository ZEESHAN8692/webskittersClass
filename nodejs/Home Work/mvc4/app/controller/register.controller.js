class RegisterController {
  async registerPage(req, res) {
    res.send("<h1>Register Page </h1>");
  }
}

module.exports = new RegisterController();
