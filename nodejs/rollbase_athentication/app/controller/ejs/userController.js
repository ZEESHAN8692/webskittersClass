class UserEjsController {
  async home(req, res) {
    res.render("user/home",{name:req.user.name});
  }
}
module.exports = new UserEjsController();
