class ServiceController {
  async servicePage(req, res) {
    res.send("Service Page ");
  }
}

module.exports = new ServiceController();
