const mongoose = require("mongoose");

const Databse = async () => {
  try {
    const db = mongoose.connect(process.env.MONGODB_URL);
    if (db) {
      console.log("Database Connected ");
    }
  } catch (error) {
    console.log("MongoDB", error);
  }
};

module.exports = Databse;
