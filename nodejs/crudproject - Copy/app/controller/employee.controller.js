const Employee = require("../model/employee.model");

class EmplyeeController {
  async createEmployee(req, res) {
    try {
      const { name, email, phone, city, isBlock } = req.body;
      const data = new Employee({ name, email, phone, city, isBlock });
      if (req.file) {
        data.image = req.file.path;
      }
      const result = await data.save();

      return res.status(201).json({
        status: true,
        message: "Data submit Success",
        data: result,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getEmployee(req, res) {
    try {
      const data = await Employee.find();
      const onlyTrue = data.filter((emp) => !emp.isBlock === true);
      return res.json({
        status: true,
        data: onlyTrue,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async getBlockEmployee(req, res) {
    try {
      const data = await Employee.find();
      const onlyfalse = data.filter((emp) => emp.isBlock === true);
      return res.json({
        status: true,
        data: onlyfalse,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async singleEmployee(req, res) {
    try {
      const id = req.params.id;
      const data = await Employee.findById(id);
      const onlyTrue = data.filter((emp) => !emp.isBlock === true);
      return res.json({
        status: true,
        data: onlyTrue,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateEmployee(req, res) {
    try {
      const id = req.params.id;

      const data = await Employee.findByIdAndUpdate(id, req.body);
      return res.json({
        status: true,
        message: "Data Update Success",
        data: data,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async deleteEmployee(req, res) {
    try {
      const id = req.params.id;
      const data = await Employee.findByIdAndDelete(id);
      return res.json({
        status: true,
        message: "Data Delete Success",
        data: data,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new EmplyeeController();
