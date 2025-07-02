const express = require("express");
const siteController = require("../controller/siteController");

const router = express.Router();

// Product Routes
router.get("/", siteController.getHome);
router.get("/single-product/:slug", siteController.getSingleProduct);

module.exports = router;
