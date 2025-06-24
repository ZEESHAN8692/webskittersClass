const mongoose = require("mongoose");
require("dotenv").config();

const Database = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URL);
    if (db) {
      console.log("Databse connected Success");
    }
  } catch (error) {
    console.log("Mongodb Error ", error);
  }
};

module.exports = Database;
