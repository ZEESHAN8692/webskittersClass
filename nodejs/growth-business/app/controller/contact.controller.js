class ContactController {
  async contactPage(req, res) {
    res.render("contact");
  }
}
module.exports = new ContactController();
