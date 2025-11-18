const joi=require('joi')

const employeeValidation=()=>{
    const schema=joi.object({
        name:joi.string().min(3).max(30).required(),
        city:joi.string().min(3).max(30).required(),
        age:joi.number().min(1).max(100).required(),
    })
    
    return schema;
}


    
module.exports={employeeValidation}