class RegisterController {
  async registerPage(req, res) {
    try {
      res.render("register");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new RegisterController();
