class ServiceController {
  async servicePage(req, res) {
    res.render("service", { title: "Service Page" });
  }
}

module.exports = new ServiceController();
