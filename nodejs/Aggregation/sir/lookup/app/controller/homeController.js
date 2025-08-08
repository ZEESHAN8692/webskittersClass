const  StudentModel = require('../model/student');    
const  UserModel = require('../model/user');
const  bcrypt = require('bcryptjs');
const  jwt = require('jsonwebtoken');

class  homeController {

    AuthCheckUser=(req,res,next)=>{
        if(req.user){
            //console.log('after login',req.user)
            next()
        }else{
            res.redirect('/login')
        }
    }   

    async login(req,res){
        res.render('login',{
            title:'Login Page'
        })
    }
    async register(req,res){
        res.render('register',{
            title:'Register Page'
        })
    }

    async dashboardpage(req,res){
        try{
           
                res.render('dashboard',{
                    title:'Dashboard Page',
                    data:req.user
                })
            
        }catch(error){
            console.log(error);
        }
    }

    /****create user */
    async registerUsercreate(req,res){
        try{           
            const user = new UserModel({
                name:req.body.name,
                email:req.body.email,
                password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
            })
            const adduser=await user.save();
            if(adduser){
                console.log('user created successfully',adduser);
                res.redirect('/login');
            }else{
                res.redirect('/register');
            }
        }catch(error){
            console.log(error);
        }
    }


    async loginUsercreate(req,res){
        try{
           // console.log(req.body);
            
           const {email,password}=req.body;
           if(!(email && password)){
            console.log('email and password is required');
            return res.redirect('/login');
           }
           const user= await UserModel.findOne({email});
           console.log('logdata',user);
            
           if(user && (await bcrypt.compare(password,user.password))){
            const token=jwt.sign({
                id:user._id,
                name:user.name,
                email:user.email
               
            },process.env.JWT_SECRET_FOR_EJS,{expiresIn:'2h'});
            if(token){
                res.cookie('user_auth',token)
               return res.redirect('/dashboard');
            }else{
                return res.redirect('/login');
            }

           }
           console.log('user not found');
           return res.redirect('/login');
        }catch(error){
            console.log(error);
        }
    }


    async logout(req,res){
        res.clearCookie('user_auth');
       return res.redirect('/login');
    }






   
    async home(req,res){
        try{
            const alldata= await StudentModel.find();
            res.render('home',{
                title:'Home Page',
                data:alldata
               })

        }catch(error){
            console.log(error);
        }
       
    } 
    async AddStudentView(req,res){
       res.render('addstudent',{
        title:'add student Page'
       })
    } 
    
    async AddStudent(req,res){
        try{
           //console.log(req.body);
           
            const {name,email,phone}=req.body;
        const student = new StudentModel({
            name,
            email,
            phone
        })
        const data= await student.save();
      
        
        res.redirect('/')

        }catch(error){

            console.log(error);
            
        }
        
    }
    
    async edit(req,res){
        const id=req.params.id;
        const student = await StudentModel.findById(id);
        res.render('update',{
            title:'Update Page',
            data:student
        })
    }

    async updateStudent(req,res){
        try{
            const id=req.params.id;
            const {name,email,phone}=req.body;
            const student = await StudentModel.findByIdAndUpdate(id,{
                name,
                email,
                phone
            })
            res.redirect('/')
        }catch(error){
            console.log(error);
        }
    }

async deleteStudent(req,res){
   try{
        const id=req.params.id;
        const student = await StudentModel.findByIdAndDelete(id);
        res.redirect('/')
    }catch(error){
        console.log(error);
    }
}

    async about(req,res){
       res.render('about',
        {
            title:'About Page'
        }
       )
    }   
    async contact(req,res){
        res.render('contact',
            {
                title:'Contact Page'
            }
        )
    }   
}


module.exports = new homeController();