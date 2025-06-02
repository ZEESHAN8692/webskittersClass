class UserController {
  async userPage(req, res) {
    res.render("user", { title: "User Page" });
  }
}

module.exports = new UserController();
