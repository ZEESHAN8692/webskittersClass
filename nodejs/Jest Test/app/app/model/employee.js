const mongoose = require('mongoose')

const Schema = mongoose.Schema

  const EmployeeSchema=  new Schema({
        name:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        age:{
            type:String,
            required:true
        },
        
        
    },
    {
        timestamps:true,
        versionKey:false
    }
)

       const EmployeeModel=mongoose.model('employee',EmployeeSchema)
       module.exports=EmployeeModel