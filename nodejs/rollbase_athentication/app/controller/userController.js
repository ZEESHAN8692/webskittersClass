class UserController {
  async userDashboard(req, res) {
    res.send("user dashboard");
  }
}
module.exports = new UserController();
