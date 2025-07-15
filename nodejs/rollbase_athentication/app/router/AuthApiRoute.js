const express = require("express");
const AuthApiController = require("../controller/AuthApiController");
const { AuthCheck } = require("../middleware/AuthCheck");

const router = express.Router();

router.post("/user_register", AuthApiController.register);
router.post("/user_login", AuthApiController.login);
router.get("/admin_dashboard", AuthCheck, AuthApiController.dashboard);

module.exports = router;
