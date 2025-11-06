import mongoose from "mongoose";
import dotenv from "dotenv";


const mongoUrl = process.env.MONGO_UR

console.log(mongoUrl)
export const database = async ()=>{
    try {
        await mongoose.connect(`${mongoUrl}`)
        console.log("Database connected");
        
        
    } catch (error) {
        console.log("Databse error",error);
    }
}

