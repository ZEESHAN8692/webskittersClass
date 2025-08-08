const Student=require('../model/student');
const path=require('path');
const fs=require('fs');

class ApiController{

    async create(req,res){
        try{
            //console.log(req.body);
            const  {name,email,phone}=req.body

            const studentdata=new Student({
                name,email,phone
            })
            if(req.file){
                studentdata.image=req.file.path
            }
           const data= await studentdata.save()
           if(data){
            res.status(200).json({
                message:"data save successfully",
                data:data
            })
           }
        }catch(error){
            console.log(error);
            
        }
    }

    async getall(req,res){
        try{
            const page= parseInt(req.query.page) || 1
            const limit=3
            const totaldata=await Student.countDocuments()
            const totalpage=Math.ceil(totaldata/limit)
            const nextpage= totalpage>page?page+1:null
            const prevpage= page>1?page-1:null

            const data=await Student.find().skip((page-1)*limit).limit(limit)
            res.status(200).json({
                message:"data get successfully",
                data:data,
                page,
                prevpage,
                nextpage,
                totalpage,
                totaldata
                
            })
        }catch(error){
            console.log(error);

        }
    }

    //search

    async search(req,res){
        try{
            let query={}
            const search=req.body.search
            if(req.body.search){
                query={
                    $or:[
                        {name:{$regex:search,$options:'i'}},
                        {email:{$regex:search,$options:'i'}},  
                    ]
                }
            }
            const data=await Student.find(query)
            res.status(200).json({
                message:"data get successfully",
                data:data
            })

        }catch(error){
            console.log(error);
        }   

    }

    async getone(req,res){
        try{
            const id=req.params.id
            const data=await Student.findById(id)
            res.status(200).json({
                message:"data get successfully",
                data:data
            })
        }catch(error){
            console.log(error);
        }
    }

    async update(req,res){
        try{
            const id=req.params.id
          
            const data=await Student.findByIdAndUpdate(id,req.body)
            res.status(200).json({
                message:"data update successfully",
            })
        }catch(error){
            console.log(error);
        }
    }


    async delete(req,res){
        try{
            const id=req.params.id
            const data=await Student.findByIdAndDelete(id)
            res.status(200).json({
                message:"data delete successfully",
            })
        }catch(error){
            console.log(error);
            res.status(500).json({
                error:error.meaage,
            })
        }
    }   
}


module.exports=new ApiController()