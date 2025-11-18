const express = require('express')
const EmployeeController = require('../controller/EmployeeController')
const router = express.Router()




router.post('/create-employee',EmployeeController.createEmployee)

module.exports = router



