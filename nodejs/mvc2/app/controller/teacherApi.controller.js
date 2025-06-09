const Teacher = require("../model/teacherSchema");
class TeacherApiController {
  async teacherApi(req, res) {
    try {
      const { name, email, phone, address } = req.body;
      const data = new Teacher({ name, email, phone, address });
      const result = await data.save();
      return res.status(201).json({
        status: true,
        message: "Data Create Success",
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        message: error,
      });
    }
  }
  async getteacherApi(req, res) {
    try {
      const data = await Teacher.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
}

module.exports = new TeacherApiController();
