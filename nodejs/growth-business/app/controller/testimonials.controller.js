class TestimonialsController {
  async testimonialsPage(req, res) {
    res.render("testimonials");
  }
}
module.exports = new TestimonialsController();
