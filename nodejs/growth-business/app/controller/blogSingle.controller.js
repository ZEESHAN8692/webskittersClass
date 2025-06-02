class BlogController {
  async blogPage(req, res) {
    res.render("blog-single");
  }
}
module.exports = new BlogController();
