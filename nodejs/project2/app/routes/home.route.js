const express = require("express");
const homeController = require("../controller/home.controller");

const router = express.Router();

router.get("/", homeController.homepage);

module.exports = router;
