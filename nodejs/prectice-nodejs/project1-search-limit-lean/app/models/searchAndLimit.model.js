import mongoose from "mongoose";

const SearchAndLimitSchema =new  mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:Number,
        required:true,
        trim:true
    },
    category:{
        type:String,
        required:true,
        trim:true
    }
    
})

const SearchAndLimitModel = mongoose.model("SearchAndLimitModel" , SearchAndLimitSchema)
export default SearchAndLimitModel