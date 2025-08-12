const express = require("express");
const AuthApiController = require("../controller/AuthApiController");
const { AuthCheck } = require("../middleware/AuthCheck");

const router = express.Router();

router.post("/register/create", AuthApiController.register);
router.post("/verify-otp", AuthApiController.verifyOtp);
router.post("/login/create",  AuthApiController.login);
router.post('/reset-password-link',AuthApiController.resetPasswordLink);
router.post('/reset-password/:id/:token',AuthApiController.resetPassword);
router.get("/dashboard",AuthCheck, AuthApiController.dashboard);



module.exports = router;
