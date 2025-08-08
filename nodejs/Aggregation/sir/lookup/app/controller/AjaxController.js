const ajaxModel=require('../model/ajaxModel')

class  AjaxController {

async  getAjax(req, res) {

    try{
        res.render('ajaxpage')

    }catch(err){
        console.log(err);
        
    }
}

async createAjax(req,res){
    try{
        const  {name,email,phone}=req.body
        const data=await ajaxModel.create({
            name,email,phone
        })
        res.status(200).json({
            status:true,
            message:"data created",
            data:data
        })
    }catch(err){
        console.log(err);

    }   

}

}


module.exports =new AjaxController()