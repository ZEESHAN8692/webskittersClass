import express from "express";
import employeeController from "../Controller/employeeController.js";
const router = express.Router();

router.post("/add-employee", employeeController.addEmployee);
router.get("/employees", employeeController.allEmployees);
router.get("/single-employee", employeeController.singleEmployee);

// Comparison operators in MongoDB

export default router;
