import mongoose from "mongoose";

const employeesSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  salary: {
    type: Number,
  },
  gender: {
    type: String,
  },
  department:{
    name:{
      type: String,
    }
  }
});

const employeeModel = mongoose.model("employees", employeesSchema);
export default employeeModel;
