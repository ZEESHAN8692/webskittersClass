const mongoose=require('mongoose')
const Schema=mongoose.Schema

const subCategorySchema= Schema({
    subCategoryName:{
        type:String,
        require:true
    },
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:"category"
    },
   
},{
    timestamps:true,
    versionKey:false
})

const subCategoryModel=mongoose.model("subCategory",subCategorySchema)
module.exports=subCategoryModel