require('dotenv').config()
const mongoose=require('mongoose')



const DbConnect=async()=>{
    try{
        mongoose.connect(process.env.MONGO_URL)
        console.log('database connected');
        
    }catch(error){
        console.log(error);
        
    }
}

module.exports=DbConnect