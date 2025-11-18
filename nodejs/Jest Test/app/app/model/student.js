const mongoose = require('mongoose')
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema

  const StudentSchema=  new Schema({
        name:{
            type:String,
            required:[true,"please enter your name"],  
        },
        city:{
            type:String,
            required:true
        },
        age:{
            type:String,
            required:true
        },
        image:{
            type:String,
            default:"image"
        },
        
    },
    {
        timestamps:true,
        versionKey:false
    }
)
StudentSchema.plugin(mongooseAggregatePaginate);
       const StudentModel=mongoose.model('student',StudentSchema)
       module.exports=StudentModel