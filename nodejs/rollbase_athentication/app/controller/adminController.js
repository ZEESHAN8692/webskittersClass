class AdminController {
  async adminDashboard(req, res) {
    res.send("admin dashboard");
  }
}
module.exports = new AdminController();
