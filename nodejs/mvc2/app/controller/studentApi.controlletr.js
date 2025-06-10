const Student = require("../model/student.model");
class StudentApiController {
  async createStudent(req, res) {
    try {
      const { name, email, phone, address } = req.body;
      const data = new Student({ name, email, phone, address });
      const result = await data.save();
      return res.status(201).json({
        status: true,
        message: "Data Create Successfully",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }

  async getStudent(req, res) {
    try {
      const data = await Student.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
  async single(req, res) {
    try {
      const id = req.params.id;
      const data = await Student.findById(id);
      return res.status(200).json({
        status: true,
        message: "Data find success",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
  async update(req, res) {
    try {
      const id = req.params.id;
      const data = await Student.findByIdAndUpdate(id, req.body);
      return res.status(200).json({
        status: true,
        message: "Data Update success",
      });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
  async delete(req, res) {
    try {
      const id = req.params.id;
      const data = await Student.findByIdAndDelete(id, req.body);
      return res.status(200).json({
        status: true,
        message: "Data delete success",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
}

module.exports = new StudentApiController();
