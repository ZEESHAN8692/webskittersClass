const express = require("express");
const router = express.Router();
const AdminEjsController = require("../../controller/ejs/adminController");
const { isLoginEjs, adminCheckEjs } = require("../../middleware/authCheckEjs");



router.get("/admin_dashboard",isLoginEjs, adminCheckEjs,AdminEjsController.adminDashboard);

module.exports = router;
