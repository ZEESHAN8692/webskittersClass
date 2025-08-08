const jwt=require('jsonwebtoken')


const jwtAuth= (req,res,next)=>{
    if(req.cookies && req.cookies.user_auth){
        
        jwt.verify(req.cookies.user_auth,process.env.JWT_SECRET_FOR_EJS,(err,decode)=>{
           req.user=decode
           //console.log('ss', req.user);
            next()
        })   
    }else{
        next()
    }

}

const isLogout=(req,res,next)=>{
    if(req.cookies && req.cookies.user_auth){
        res.redirect('/dashboard')
    }else{
        next()
    }
}


module.exports={jwtAuth,isLogout}