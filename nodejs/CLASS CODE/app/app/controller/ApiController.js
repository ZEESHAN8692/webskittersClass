const { log } = require("console");
const Student = require("../model/student");
const fs=require('fs');
const path=require('path');

class ApiControlller {
  async createStudent(req, res) {
    //log(req.file);
    try {
      const { name, email, phone } = req.body;

      const studentdata = new Student({
        name,
        email,
        phone,
      });
      if (req.file) {
        studentdata.image = req.file.path;
      }

      const data = await studentdata.save();
      if (data) {
        res.status(201).json({
          status: true,
          message: "data created successfully",
          data: data,
        });
      }
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error.message,
      });
    }
  }

  async AllStudent(req, res) {
    try {
      const studentdata = await Student.find();
      if (studentdata) {
        res.status(200).json({
          status: true,
          message: "data fetch successfully",
          total:studentdata.length,
          data: studentdata,
        });
      }
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error.message,
      });
    }
  }

  async singleStudent(req, res) {
    try {
        const id=req.params.id
      const singleStudent = await Student.findById(id);
      if(!singleStudent){
        return res.status(404).json({
          status:false,
          message:"student not found"
        })
      }else{
      res.status(200).json({
        status: true,
        message: "data fetch successfully",
        data: singleStudent,
      });
      }
      
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error.message,
      });
    }
  }



  async updateStudent(req, res) {
    try {
      const id = req.params.id;
      const { name, email, phone } = req.body;

      const updatedStudent = await Student.findByIdAndUpdate(
        id,
        { name, email, phone },
        { new: true }
      );

      if (updatedStudent) {
        res.status(200).json({
          status: true,
          message: "data updated successfully",
        });
      }
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error.message,
      });
    }
  }



  
  async deleteStudent(req, res) {
    try {
      const id = req.params.id;
      const deletedStudent = await Student.findByIdAndDelete(id);
      if (deletedStudent) {
        res.status(200).json({
          status: true,
          message: "data deleted successfully",
        });
      }
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error.message,
      });
    }
  }
}

module.exports = new ApiControlller();
