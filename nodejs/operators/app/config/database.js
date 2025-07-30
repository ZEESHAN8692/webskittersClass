import mongoose from "mongoose";
import "dotenv/config";

const Database = () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected");
  } catch (error) {
    console.log("Database not connected");
  }
};

export default Database;

