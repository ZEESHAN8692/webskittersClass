import EmployeeModel from "../model/employeesModel.js";
class EmplyeeController {
  async addEmployee(req, res) {
    try {
      const employee = new EmployeeModel(req.body);
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
  async search(req, res) {
    try {
      const data = await EmployeeModel.find(req.query);
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
  async match(req, res) {
    try {
      const data = await EmployeeModel.aggregate([
        {
          $match: {
            // $or: [
            //   { name: { $regex: req.query.name, $options: "i" } },
            //   { email: { $regex: req.query.email, $options: "i" } }
            // ]
            gender: "female",
          },
        },
        // {
        //   $project:{

        //     name:1
        //   }
        // }

        // { $match:{ gender:'male'}},

        //  {
        //   $group:{
        //      _id:'$department.name',
        //       totalEmployees: { $sum: 1 },
        //       totalSalaries: { $sum:'$salary'}

        //   }
        //  }
        // { $sort:{ salary:-1}},
        // {
        //   $limit: 10
        // },

        // {
        //   $addFields:{
        //     fullName: { $concat: ["$name", " ", "$gender"] },
        //     category:"nodejs"
        //   }
        // }

        // {
        //   $skip:4
        // }
      ]);
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
}
export default new EmplyeeController();
