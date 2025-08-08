const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

  const comparePassword = (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword);
  };

  const Auth=async(req,res,next)=>{ 
    const token= req.body.token || req.query.token || req.headers["x-access-token"];
    if(!token){
        return res.status(403).send({messaage:"A token is required for authentication"});
    }
    try{
      const decoded = jwt.verify(token,process.env.JWT_ACCESS_TOKEN_SECRET_KEY);
        req.user = decoded;
      console.log('ll',req.user);
    }catch(err){
        return res.status(401).send({messaage:"Invalid Token"});
    } 

    return next();
  }
  
  module.exports = {comparePassword,Auth};


