class UtilitiesAnimationController {
  async utilitiesAnimation(req, res) {
    try {
      res.render("utilities-animation");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new UtilitiesAnimationController();
