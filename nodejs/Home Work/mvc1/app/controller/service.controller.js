class ServiceController {
  async servicePage(req, res) {
    res.send("<h1>Service Page </h1>");
  }
}

module.exports = new ServiceController();
