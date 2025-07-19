class AdminEjsController {
  async adminDashboard(req, res) {
    res.render("admin/dashboard", { name: req.user.name });
  }
}
module.exports = new AdminEjsController();
