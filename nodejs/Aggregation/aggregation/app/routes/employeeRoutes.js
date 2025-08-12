import express from "express";
import employeeController from "../Controller/employeeController.js";
const router = express.Router();

router.post("/add-employee", employeeController.addEmployee);
router.get("/employees", employeeController.allEmployees);

// Search req.query
router.get("/search", employeeController.search);

// Aggregation
router.get("/match", employeeController.match);

export default router;
