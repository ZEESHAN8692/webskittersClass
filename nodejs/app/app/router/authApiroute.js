const express = require("express");
const AuthApiController = require("../controller/authApicontroller");
const { AuthCheck } = require("../middleware/atuhCheck");
const uplods = require("../helper/userImage");

const router = express.Router();

router.post(
  "/register/create",
  uplods.single("profile_pic"),
  AuthApiController.register
);
router.post("/verify-otp", AuthApiController.verifyOtp);
router.post("/login/create", AuthApiController.login);
router.get("/dashboard", AuthCheck, AuthApiController.dashboard);

module.exports = router;
