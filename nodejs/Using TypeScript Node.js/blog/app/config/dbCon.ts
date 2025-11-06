//importing modules
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

  //details from the env
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const dbName = 'typescriptData2'

//connection string to mongo atlas

const connectionString = `mongodb+srv://${username}:${password}@cluster0.ltpgr8s.mongodb.net/${dbName}`


//db connection
export const dbConnection = mongoose.connect(connectionString)
.then(res => {
    if(res){
        console.log(`Database connection succeffully to ${dbName}`)
    }
    
}).catch(err => {
    console.log(err)
})
