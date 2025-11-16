

class HomeController{


    async homePage(req,res){
        try{
            const user={
                name:"raju",
                email:"raju@gmail.com"
            }
            res.render('home',{
                title:"home page",
                data:user
            })

        }catch(error){
            console.log(error.message);
            
        }
    }


     async aboutPage(req,res){
      try{
           
            res.render('about',{
                title:"home page",
               
            })

        }catch(error){
            console.log(error.message);
            
        }
    }

     async contactPage(req,res){
       try{
           
            res.render('contact',{
                title:"home page",
               
            })

        }catch(error){
            console.log(error.message);
            
        }
    }

   
}



module.exports=new HomeController()