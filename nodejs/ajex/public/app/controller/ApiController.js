
const User=require('../model/userModel')

class ApiController {

     async getInMemoryData(req, res) {
        try{
            const users=await User.find();
            res.status(200).json(users);
        }catch(err){
            res.status(500).json({error: 'Internal Server Error'});
        }
    }

    async createData(req,res){

         try{
            const {name,email,phone}=req.body;
            if(!name || !email || !phone){
                return res.status(400).json({error: 'All fields are required'});
            }
            const user=new User({name,email,phone});
            await user.save();
            res.status(201).json(user);

        }catch(err){
            res.status(500).json({error: 'Internal Server Error'});
        }
    }




    async getAjaxUser(req,res){
        try{
            res.render('user');

        }catch(err){
            console.log(err);
            
        }

    }


    async createData(req, res) {
        try {
            const { name, email, phone } = req.body;
            const user = new User({ name, email, phone });
            const result = await user.save();
            if (result) {
                res.status(200).json({
                    status: true,
                    message: "Data Saved Successfully",
                    data: result
                })
            }
        } catch (error) {
            console.log(error);
        }
    }



    async getAjaxData(req, res) {
        try {
            const userdata = await User.find(); 
                res.status(200).json({
                    status: true,
                    message: "Data fetched Successfully",
                    data: userdata
                })
            
        } catch (error) {
            console.log(error);
        }
    }
        
    }




module.exports =new ApiController();