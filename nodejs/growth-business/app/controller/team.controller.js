class TeamController {
  async teamPage(req, res) {
    res.render("team");
  }
}
module.exports = new TeamController();
