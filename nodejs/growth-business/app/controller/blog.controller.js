class Blog_Controller {
  async blog_Page(req, res) {
    res.render("blog");
  }
}
module.exports = new Blog_Controller();
