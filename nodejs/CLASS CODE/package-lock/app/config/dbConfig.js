const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const dbcon = await mongoose.connect(process.env.MONGODB_URL);
    if (dbcon) {
      console.log("Database Connected");
    } else {
      console.log("Not Connected");
    }
  } catch (error) {
    console.log(`Connection Error: ${error}`);
  }
};
module.exports = dbConnect;
