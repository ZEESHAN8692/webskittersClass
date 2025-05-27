class HomeController {
  async homepage(req, res) {
    res.send("Home Page");
  }
}

module.exports = new HomeController();
