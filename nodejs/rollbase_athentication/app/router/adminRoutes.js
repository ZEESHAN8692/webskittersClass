const express = require("express");
const { AuthCheck, adminCheck } = require("../middleware/AuthCheck");
const adminController = require("../controller/adminController");

const router = express.Router();

router.get("/", AuthCheck, adminCheck, adminController.adminDashboard);

module.exports = router;
