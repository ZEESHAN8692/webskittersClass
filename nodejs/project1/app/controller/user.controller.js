class UserController {
  async userPage(req, res) {
    res.send("User Page ");
  }
}

module.exports = new UserController();
