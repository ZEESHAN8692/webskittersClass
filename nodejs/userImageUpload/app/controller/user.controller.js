const UserModel = require("../model/user.model");
const path = require("path");
const fs = require("fs");

class UserController {
  async createUser(req, res) {
    try {
      const { name, email, phone, city } = req.body;
      const data = new UserModel({ name, email, phone, city });
      if (req.file) {
        data.image = `uploads/user/${req.file.filename}`;
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
      const existingUser = await UserModel.findById(id);
      const updateData = req.body;
      if (
        req.file &&
        existingUser &&
        existingUser.image &&
        existingUser.image.length > 0
      ) {
        const imagePath = path.join(
          __dirname,
          "../../",
          path.basename(`uploads/${existingUser.image}`)
        );
        fs.unlink(imagePath, (err) => {
          if (err) console.log("Failed image upload", err.message);
          else console.log("Image Upload sucessfully");
        });

        const updateeImage = `uploads/${req.file.filename}`;
        updateData.image = updateeImage;
      }

      const data = await UserModel.findByIdAndUpdate(id, updateData, {
        new: true,
      });
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
      if (data && data.image && data.image.length > 0) {
        const imagePath = path.join(
          __dirname,
          "../../uploads/user",
          data.image
        );
        fs.unlink(imagePath, (err) => {
          if (err) console.error("Failed to delete image:", err.message);
          else console.log("Image Delete Successfully");
        });
      }
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
