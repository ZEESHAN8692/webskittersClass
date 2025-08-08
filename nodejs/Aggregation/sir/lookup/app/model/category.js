const mongoose=require('mongoose')

const categorySchema= new mongoose.Schema({
    categoryName:{
        type:String,
        require:true
    },
},{
    timestamps:true,
    versionKey:false
})

const categoryModel=mongoose.model("category",categorySchema)
module.exports=categoryModel