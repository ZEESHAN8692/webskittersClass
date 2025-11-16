//importing modules
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

//db connection
export const dbConnection = mongoose.connect(`${process.env.MONGO_URL}`)
.then(res => {
    if(res){
        console.log(`Database connection succeffully`)
    }
}).catch(err => {
    console.log(err)
})
