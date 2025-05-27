const express = require("express");
const userController = require("../controller/user.controller");

const router = express.Router();

router.get("/user", userController.userPage);

module.exports = router;
