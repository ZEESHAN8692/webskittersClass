
class UserController{
    async craeteUser(req, res){
        const {name , email , phone }= req.body;
        console.log(name , email , phone)
        res.json({name , email , phone})
        
    }

    async getAllUsers (req , res ){
        res.render("user")
    }

}

module.exports = new UserController();