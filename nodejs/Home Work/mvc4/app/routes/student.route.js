const express = require("express");
const studentController = require("../controller/student.controller");

const router = express.Router();

router.get("/student", studentController.studentPage);

module.exports = router;
