import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbcon = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGODB_URL);
    if (con) {
      console.log("Database Connected Successfully");
    } else {
      console.log("Connection Error");
    }
  } catch (err) {
    console.log("Error in connection");
  }
};
export default dbcon;
