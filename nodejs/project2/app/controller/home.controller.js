class HomeController {
  async homepage(req, res) {
    res.send("<h1>Home Page</h1>");
  }
}

module.exports = new HomeController();
