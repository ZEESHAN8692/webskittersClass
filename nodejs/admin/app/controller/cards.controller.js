class CardsController {
  async cardsPage(req, res) {
    try {
      res.render("cards");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new CardsController();
