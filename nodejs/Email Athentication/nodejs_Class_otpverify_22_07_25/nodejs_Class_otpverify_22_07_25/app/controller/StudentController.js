const { StudentSchemaValidation, StudentModel } = require("../model/student")


class StudentController {
  //post register
  async createuser(req, res) {
    try {
       const data={
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone
        }
        const {error,value}=StudentSchemaValidation.validate(data)
        if(error){
            return res.status(401).json({
                message:error.details[0].message
            })
        }else{
            const std=await StudentModel.create(value)
            return res.status(200).json({
                message:'User Created Successfully',
                data:std
            })
        }
    } catch (err) {
      res.status(400).json({ message: "validation failed" });
    }
  }
}

module.exports = new StudentController();
