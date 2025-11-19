const express = require("express");
const authController = require("../controller/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");
const router = express.Router();


router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/dashboard", authMiddleware, authController.dashboard);

module.exports = router;
