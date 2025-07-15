const express = require("express");
const { AuthCheck } = require("../middleware/AuthCheck");
const UserController = require("../controller/UserController");

const router = express.Router();

router.get("/user", AuthCheck, UserController.userDashboard);

module.exports = router;
