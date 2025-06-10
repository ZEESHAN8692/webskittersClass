const express = require("express");
const studentApiControlletr = require("../controller/studentApi.controlletr");
const teacherApiController = require("../controller/teacherApi.controller");
const managerApiController = require("../controller/managerApi.controller");

const router = express.Router();
// Student Routes
router.post("/create/student", studentApiControlletr.createStudent);
router.get("/student", studentApiControlletr.getStudent);
router.get("/single/:id", studentApiControlletr.single);
router.post("/update/:id", studentApiControlletr.update);
router.post("/delete/:id", studentApiControlletr.delete);

// Teacher Routes
router.post("/create/teacher", teacherApiController.teacherApi);
router.get("/teacher", teacherApiController.getteacherApi);
router.get("/single-tachers/:id", teacherApiController.singleTeacher);
router.get("/update-teacher/:id", teacherApiController.updateTeacher);
router.get("/delete-teacher/:id", teacherApiController.deleteTeacher);

// Manager Routes
router.post("/create/manager", managerApiController.createManager);
router.get("/manager", managerApiController.getManager);

module.exports = router;
