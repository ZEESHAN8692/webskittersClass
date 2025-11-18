const Student = require("../model/student");
const fs = require("fs");
const path = require("path");
const slug = require("slugify");

class ApiController {
  //create student
  async createStudent(req, res) {
    // console.log(req.body);
    //console.log('file image',req.file);
    try {
      const { name, city, age } = req.body;
      const data = new Student({
        name,
        city,
        age,
      });
      if (req.file) {
        data.image = req.file.path;
      }
      const sData = await data.save();
      if (sData) {
        return res.status(201).json({
          status: true,
          message: "student created successfully",
          data: sData,
        });
      }
    } catch (error) {
      return res.status(400).json({
        status: false,
        message: error.message,
      });
    }
  }

  //get student
  async getStudent(req, res) {
    try {
      const getStudent = await Student.aggregate([
        {
          $project: {
            __v: 0,
          },
        },
        {
          $sort: {
            createdAt: -1,
          },
        },
        {
          $addFields: {
            myname: "pritam",
          },
        },
      ]);
      let options = {
        page: 1,
        limit: 100,
      };

      let allRecord = await Student.aggregatePaginate(getStudent, options);
      if (getStudent) {
        return res.status(200).json({
          status: true,
          message: "student get successfully",
          data: allRecord,
        });
      }
    } catch (error) {
      return res.status(400).json({
        status: false,
        message: error.message,
      });
    }
  }

  //edit student
  async editStudent(req, res) {
    try {
      const id = req.params.id;
      const edit = await Student.findById(id);
      if (edit) {
        return res.status(200).json({
          status: true,
          message: "get single student",
          data: edit,
        });
      } else {
        return res.status(400).json({
          status: false,
          message: "student not found",
        });
      }
    } catch (error) {
      return res.status(400).json({
        status: false,
        message: error.message,
      });
    }
  }

  //update student
  async updateStudent(req, res) {
    try {
      const { id } = req.params;
      const updatedData = req.body;

      const updatedStudent = await Student.findByIdAndUpdate(id, updatedData, {
        new: true,
        runValidators: true,
      });

      if (!updatedStudent) {
        return res.status(404).json({ message: "Student not found" });
      }

      res.status(200).json(updatedStudent);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  //delete student
  async deleteStudent(req, res) {
    try {
    const { id } = req.params;
    const deletedStudent = await Student.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json({ message: "Deleted" }); // ✅ must send message
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  }

  async getdataSlugStudent(req, res) {
    try {
      const slug = req.params.slug;
      const getData = await Student.find({ slug: slug });
      if (getData) {
        return res.status(200).json({
          status: true,
          message: "get student",
          data: getData,
        });
      } else {
        return res.status(400).json({
          status: false,
          message: "student not found",
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async search(req, res) {
    try {
      let query = {};
      if (req.body.search) {
        const search = req.body.search;
        query = {
          //name:{$regex:search, $options:'i'}
          $or: [
            { name: { $regex: search, $options: "i" } },
            { city: { $regex: search, $options: "i" } },
          ],
        };
      }
      const stu = await Student.find(query);
      return res.status(200).json({
        status: true,
        message: "get student",
        data: stu,
      });
    } catch (error) {}
  }

  async filter(req, res) {
    try {
      const filters = {};

      // Check for query params and add to filter object
      if (req.query.age) {
        filters.age = req.query.age;
      }
      if (req.query.name) {
        filters.name = req.query.name;
      }
      if (req.query.city) {
        filters.city = req.query.city;
      }

      // Get users from MongoDB with the filters
      const users = await Student.find(filters);

      // Return the filtered users
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: "Error filtering users", error: err });
    }
  }
}

module.exports = new ApiController();
