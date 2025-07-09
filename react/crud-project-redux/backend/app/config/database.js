const mongoose = require("mongoose");
require("dotenv").config();

const Database = () => {
  try {
    const db = mongoose.connect(process.env.MONGODB_URL);
    if (db) console.log("Databse Connected");
  } catch (error) {
    console.log("Mongodb error", error);
  }
};

module.exports = Database;
