const Manager = require("../model/managerSchema");
class ManagerApiController {
  async createManager(req, res) {
    try {
      const { name, email, phone, address } = req.body;
      const data = new Manager({ name, email, phone, address });
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

  async getManager(req, res) {
    try {
      const data = await Manager.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }

  async singleManager(req, res) {
    try {
      const id = req.params.id;
      const data = await Manager.findById(id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }

  async updateManager(req, res) {
    try {
      const id = req.params.id;
      const data = await Manager.findByIdAndUpdate(id, req.body);
      return res.status(200).json({
        status: true,
        message: "Data update success",
      });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }

  async deletegetManager(req, res) {
    try {
      const id = req.params.id;
      const data = await Manager.findByIdAndDelete(id);
      return res.status(200).json({
        status: true,
        message: "Data Delete success",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
}

module.exports = new ManagerApiController();
