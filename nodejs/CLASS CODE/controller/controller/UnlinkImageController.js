const imageModel=require('../model/unlinkImageModel')
const path=require('path')
const fs=require('fs')
class UnlinkImageController{
    createData=async(req,res)=>{
        //console.log(req.body);
        try{
            const {name,email}=req.body
            const sdata=new imageModel({
                name,
                email
            })
            if (req.file) {
                sdata.image = req.file.path
            }
            const result=await sdata.save()
           return res.status(200).json({
                result,
                message:'data added'
            })
    
        }catch(erorr){
            console.log(erorr);
    
        }
    
    }

    allproduct=async(req,res)=>{
        try{
            const alldata=await imageModel.find();
            return res.status(200).json({
                message:"data added",
                data:alldata,

            })
        }catch(error){
            console.log(error);
        }

    }
    singleproduct=async(req,res)=>{
        try{
            const id=req.params.id
            const sdata=await imageModel.findById(id);
            return res.status(200).json({
                message:"data get",
                data:sdata,

            })
        }catch(error){
            console.log(error);
        }

    }

    updateproduct=async(req,res)=>{
        const id = req.params.id;
        const newImage = req.file.path;
  
    try {
        //Remove the previous image file if a new image was uploaded
        const df=await imageModel.findById(id)
        fs.unlinkSync(df.image)
      const updatedUser = await imageModel.findByIdAndUpdate(
        id,
        {
            name: req.body.name,
            email: req.body.email,
            image: newImage,
        },
        { new: true }
      );
      
      res.status(200).json({
        message:"data updated"
      })    
    } catch (err) {
      console.error(err);
    
    }

    }

    deleteProd=async(req,res)=>{
        try{
            const id = req.params.id
            const dlee = await imageModel.findByIdAndDelete(id)
            if(dlee){
             //for delete image from upload folder folder
             fs.unlinkSync(dlee.image)
            res.ststus(200).json({
                message:"delete data"
            })
            }
          }catch(err){
         console.log(err);
          }
    }
}


module.exports= new UnlinkImageController()