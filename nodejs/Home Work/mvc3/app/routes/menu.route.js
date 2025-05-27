const express = require("express");
const menuController = require("../controller/menu.controller");

const router = express.Router();

router.get("/menu", menuController.menuPage);

module.exports = router;
