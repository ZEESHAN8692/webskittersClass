
const vehicleModel=require('../model/vehicledetail')


class UnwindController{

    add=async(req,res)=>{
        try{
            const {make,model,type,model_year}=req.body 
            const addData= new vehicleModel({
                make,model,type,model_year

            })

            const addve=await addData.save()
            res.status(200).json({
                addve,
                
            })

        }catch(error){
            console.log(error);
        }

    }

    alldata=async(req,res)=>{
        const getalldata=await vehicleModel.aggregate([
            {$unwind : "$model_year" }
        ])
        res.status(200).json({
            count:getalldata.length,
            getalldata,
            
        })

    }

}


module.exports=new UnwindController()