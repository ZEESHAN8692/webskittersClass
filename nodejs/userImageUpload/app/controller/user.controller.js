const UserModel = require("../model/user.model");

class UserController {
  async createUser(req, res) {
    try {
      const { name, email, phone, city } = req.body;
      const data = new UserModel({ name, email, phone, city });
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

  async getUser(req, res) {
    try {
      const data = await UserModel.find();
      return res.json({
        status: true,
        data: data,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async singleUser(req, res) {
    try {
      const id = req.params.id;
      const data = await UserModel.findById(id);
      return res.json({
        status: true,
        data: data,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateUser(req, res) {
    try {
      const id = req.params.id;

      const data = await UserModel.findByIdAndUpdate(id, req.body);
      return res.json({
        status: true,
        message: "Data Update Success",
        data: data,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async deleteUser(req, res) {
    try {
      const id = req.params.id;
      const data = await UserModel.findByIdAndDelete(id);
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

module.exports = new UserController();
