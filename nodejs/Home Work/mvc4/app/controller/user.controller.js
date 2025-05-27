class UserController {
  async userPage(req, res) {
    res.send("<h1>User Page </h1>");
  }
}

module.exports = new UserController();
