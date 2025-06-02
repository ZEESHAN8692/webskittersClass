class HomeController {
  async homePage(req, res) {
    res.render("home");
  }
  
}
module.exports = new HomeController();
