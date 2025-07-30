const RecordModel = require("../model/recordModel");
class RecordControllter {
  async getRecord(req, res) {
    try {
      const records = await RecordModel.find({});
      res.status(200).json({
        status: true,
        message: "Data fetch sucessfully",
        data: records,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: "Something went wrong",
      });
    }
  }
  async getSingleRecord(req, res) {
    try {
      const { id } = req.params;
      const record = await RecordModel.findById(id);
      res.status(200).json({
        status: true,
        message: "Data fetch sucessfully",
        data: record,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: "Something went wrong",
      });
    }
  }
  async addRecord(req, res) {
    try {
      const { name, email } = req.body;
      const record = new RecordModel({ name, email });
      const data = await record.save();
      res.status(200).json({
        status: true,
        message: "Data added sucessfully",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: "Something went wrong",
        error: error.message,
      });
    }
  }
  async updateRecord(req, res) {
    try {
      const { id } = req.params;
      const record = await RecordModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json({
        status: true,
        message: "Data updated sucessfully",
        data: record,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: "Something went wrong",
        error: error.message,
      });
    }
  }
  async deleteRecord(req, res) {
    try {
      const { id } = req.params;
      const data = await RecordModel.findByIdAndDelete(id);
      res.status(200).json({
        status: true,
        message: "Data deleted sucessfully",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: "Something went wrong",
        error: error.message,
      });
    }
  }
}

module.exports = new RecordControllter();
