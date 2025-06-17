const express = require("express");
const employeeController = require("../controller/employee.controller");

const router = express.Router();

router.get("/employee", employeeController.getEmployee);
router.get("/block-employee", employeeController.getBlockEmployee);
// router.get("/single-block-employee", employeeController.getSingleBlockEmployee);
router.get("/single-employee/:id", employeeController.singleEmployee);
router.post("/craete-employee", employeeController.createEmployee);
router.patch("/update-employee/:id", employeeController.updateEmployee);
router.delete("/delete-employee/:id", employeeController.deleteEmployee);

module.exports = router;
