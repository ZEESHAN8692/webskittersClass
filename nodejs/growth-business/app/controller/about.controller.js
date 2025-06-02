class AboutController {
  async aboutPage(req, res) {
    res.render("about");
  }
}
module.exports = new AboutController();
