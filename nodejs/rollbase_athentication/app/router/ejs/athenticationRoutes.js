const express = require("express");

const athenticationController = require("../../controller/ejs/athenticationController");

const router = express.Router();

router.get("/login", athenticationController.login);
router.get("/signup", athenticationController.signup);

router.post("/user_signup", athenticationController.signupPost);
router.post("/user_login", athenticationController.loginPost);
router.get("/user_logout", athenticationController.logout);

module.exports = router;
