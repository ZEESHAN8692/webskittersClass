const EmployeeModel = require('../model/employee')
const { employeeValidation } = require('../helper/validation')

class EmployeeController {

    async createEmployee(req, res) {
        try {
            const { error } = employeeValidation().validate(req.body)
            if (error) {
                return res.status(400).json({ message: error.details[0].message })
            }
            const employee = new EmployeeModel(req.body)
           const data = await employee.save()
            res.status(201).json({ message: "Employee created successfully", data: data })

        } catch (err) {
            res.status(500).json({ message: err.message })
        }

    }
}


module.exports = new EmployeeController()