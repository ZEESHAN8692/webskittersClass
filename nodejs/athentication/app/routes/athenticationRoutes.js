const express = require("express");
const athenticationController = require("../controller/athenticationController");
const router = express.Router();


router.get("/", athenticationController.getHome);
router.get("/login", athenticationController.getLogin);
router.get("/dashboard", athenticationController.getDashboard);
router.get("/registration", athenticationController.getRegistration);

module.exports = router;
