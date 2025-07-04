class AuthenticationController {
  getHome(req, res) {
    res.render("home");
  }
    getLogin(req, res) {
        res.render("login");
    }
    getDashboard(req, res) {
        res.render("dashboard");
    }
    getRegistration(req, res) {
        res.render("registration");
    }
}

module.exports = new AuthenticationController();
