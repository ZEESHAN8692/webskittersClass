import EmployeeModel from "../model/employeesModel.js";
class EmplyeeController {
  async addEmployee(req, res) {
    try {
      const { name, email, salary, age } = req.body;
      const employee = new EmployeeModel({
        name,
        email,
        salary,
        age,
      });
      const data = await employee.save();
      res.status(201).json({
        status: true,
        message: "Employee added successfully",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        error: "Internal Server Error",
        message: error.message,
      });
    }
  }
  async allEmployees(req, res) {
    try {
      const data = await EmployeeModel.find();
      res.status(200).json({
        status: true,
        message: "fetch All employees successfully",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        error: "Internal Server Error",
        message: error.message,
      });
    }
  }

  async singleEmployee(req, res) {
    try {
      const data = await EmployeeModel.findById(req.params.id);
      res.status(200).json({
        status: true,
        message: "Employee fetched successfully",
        data: data,
      });

    } catch (error) {
      res.status(500).json({
        status: false,
        error: "Internal Server Error",
        message: error.message,
      });
    }
  }
}
export default new EmplyeeController();
