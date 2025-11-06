


class BlogController{

    async blogList(req,res){
        try{
            res.send("Blog List for admin")

        }catch(error){
            console.log(error.message);
            
        }
    }

}


module.exports = new BlogController();