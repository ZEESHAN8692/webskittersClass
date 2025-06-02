class MenuController {
  async menuPage(req, res) {
    res.send("<h1>Menu Page </h1>");
  }
}

module.exports = new MenuController();
