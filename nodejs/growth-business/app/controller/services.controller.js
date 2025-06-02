class ServicesController {
  async servicePage(req, res) {
    res.render("services");
  }
}
module.exports = new ServicesController();
