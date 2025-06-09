const express = require("express");
const studentApiControlletr = require("../controller/studentApi.controlletr");
const teacherApiController = require("../controller/teacherApi.controller");
const managerApiController = require("../controller/managerApi.controller");

const router = express.Router();

router.post("/create/student", studentApiControlletr.createStudent);
router.get("/student", studentApiControlletr.getStudent);

// Teacher Routes
router.post("/create/teacher", teacherApiController.teacherApi);
router.get("/teacher", teacherApiController.getteacherApi);

// Manager Routes
router.post("/create/manager", managerApiController.createManager);
router.get("/manager", managerApiController.getManager);

module.exports = router;
