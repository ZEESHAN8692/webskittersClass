const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    is_verified: { type: Boolean, default: false },
    roles: { type: [String], enum: ["user", "admin"], default: ["user"] },
   

})

const User = mongoose.model('user',userSchema)  

module.exports = User