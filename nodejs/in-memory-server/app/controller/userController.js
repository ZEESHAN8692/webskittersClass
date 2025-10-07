
import User from "../model/userModel.js";

class UserController{
    async createUser(req , res){
        const {name , email , phone} = req.body;
        const user = await User.create({name , email , phone});
        res.status(201).json({
            success : true,
            message: "User created successfully",
            data : user
        });

    }

    async getUsers(req , res){
        const users = await User.find();
        res.status(200).json({
            success : true,
            message: "Users fetched successfully",
            data : users
        });
    }
}

export default new UserController();