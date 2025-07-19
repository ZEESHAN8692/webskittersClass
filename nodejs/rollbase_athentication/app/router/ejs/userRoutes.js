const express = require("express");
const router = express.Router();

const UserEjsController = require("../../controller/ejs/userController");
const { isLoginEjs } = require("../../middleware/authCheckEjs");

router.get("/", isLoginEjs, UserEjsController.home);

module.exports = router;
