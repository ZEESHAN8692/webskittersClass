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
  age: {
    type: Number,
  },
});

const employeeModel = mongoose.model("employees", employeesSchema);
export default employeeModel;
