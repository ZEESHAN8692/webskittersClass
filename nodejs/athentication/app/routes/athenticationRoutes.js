const express = require("express");
const athenticationController = require("../controller/athenticationController");
const router = express.Router();

// Home route
router.get("/", athenticationController.getHome);

// Login route
router.get("/login", athenticationController.getLogin);

// Dashboard route
router.get("/dashboard", athenticationController.getDashboard);

// Registration route
router.get("/registration", athenticationController.getRegistration);

module.exports = router;
