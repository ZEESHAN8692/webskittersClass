const ProduceModel = require('../model/produceModel')

class ReplaceRootController {

    //replace root embedded model
    replaceRoot = async (req, res) => {
        try {
            const gdata = await ProduceModel.aggregate(
                [
                    {
                        $replaceRoot:{
                          newRoot:'$on_order'
                        }
                      }
                ]
            )
            res.status(200).json({
                gdata
            })

        }catch (error) {
            console.log(error);
        }
}
    replaceRootall = async (req, res) => {
        try {
            const gdatas = await ProduceModel.find()
            res.status(200).json({
                gdatas
            })

        }catch (error) {
            console.log(error);
        }
}

    //create data replace root embedded model

    async create(req,res){
        try{
            const {fruit,in_stock,on_order}=req.body
            const data=new ProduceModel({
                fruit,
                in_stock,
                on_order,
            })
            const result=await data.save()
            res.status(200).json({
                result,
                message:'data added'
            })
        }catch(error){
            console.log(error);

        }   
    }

}

module.exports = new ReplaceRootController()