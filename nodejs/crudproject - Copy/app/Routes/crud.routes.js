const express = require("express");
const employeeController = require("../controller/employee.controller");
const uploadEmplyeeImage = require("../helper/EmployeeImageUpload");

const router = express.Router();

router.get("/employee", employeeController.getEmployee);
router.get("/block-employee", employeeController.getBlockEmployee);
router.get("/single-employee/:id", employeeController.singleEmployee);
router.post(
  "/craete-employee",
  uploadEmplyeeImage.single("image"),
  employeeController.createEmployee
);
router.patch("/update-employee/:id", employeeController.updateEmployee);
router.delete("/delete-employee/:id", employeeController.deleteEmployee);

module.exports = router;
