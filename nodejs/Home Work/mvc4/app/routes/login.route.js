const express = require("express");
const loginController = require("../controller/login.controller");

const router = express.Router();

router.get("/login", loginController.loginPage);

module.exports = router;
