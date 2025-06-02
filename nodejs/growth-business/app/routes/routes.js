const express = require("express");
const homeController = require("../controller/home.controller");
const aboutController = require("../controller/about.controller");
const blogSingleController = require("../controller/blogSingle.controller");
const blogController = require("../controller/blog.controller");
const portfolioDetailsController = require("../controller/portfolio-details.controller");
const portfolioController = require("../controller/portfolio.controller");
const pricingController = require("../controller/pricing.controller");
const servicesController = require("../controller/services.controller");
const teamController = require("../controller/team.controller");
const testimonialsController = require("../controller/testimonials.controller");
const contactController = require("../controller/contact.controller");

const router = express.Router();

router.get("/", homeController.homePage);
router.get("/about", aboutController.aboutPage);
router.get("/blog-single", blogSingleController.blogPage);
router.get("/blog", blogController.blog_Page);
router.get("/contact", contactController.contactPage);
router.get("/portfolio-details", portfolioDetailsController.portfoli_details);
router.get("/portfolio", portfolioController.portfoli);
router.get("/pricing", pricingController.pricePage);
router.get("/services", servicesController.servicePage);
router.get("/team", teamController.teamPage);
router.get("/testimonials", testimonialsController.testimonialsPage);

module.exports = router;
