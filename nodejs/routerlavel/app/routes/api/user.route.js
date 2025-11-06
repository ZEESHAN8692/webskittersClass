const express = require('express');
const routeLabel = require('route-label');
const userModel = require('../../module/blog/model/userModel');





const router = express.Router();
const namedRouter = routeLabel(router);


namedRouter.post('create-user','/create-user',(req,res)=>{
    const {name , email}=req.body;
    const user=new userModel({name,email});
    user.save();
    

} );


namedRouter.get("user-list","/user-list",async(req,res)=>{
    const user=await userModel.find();
    res.send({
        status:200,
        message:"user list",
        user
    });
} );





module.exports = router;