import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const Database = async () => {
  try {
    const cont = await mongoose.connect(process.env.MONGODB_URL);
    console.log("Mongodb Connected")
  } catch (error) {
    console.log("MongoDB not connected", error);
  }
};
export default Database;
