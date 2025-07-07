class SiteController {
  getHome(req, res) {
    res.render("site/index");
  }
  getProductDetails(req, res) {
    res.render("site/product-details");
  }
}

export default  new SiteController();
