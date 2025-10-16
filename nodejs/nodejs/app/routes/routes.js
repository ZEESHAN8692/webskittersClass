const express = require("express");
const controller = require("../controller/aboutController");
const router = express.Router();

router.get("/about", controller.about);


module.exports= router
