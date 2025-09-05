require("dotenv").config();
const express = require("express");
const path = require("path");
const router = require("./app/routes/routes");
const dbConnect = require("./app/config/Database");



//Database
dbConnect()
const app = express();
//views
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.urlencoded({ extended: true }));

//route
app.use("/api",router)



const port = 3001 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server is runnig port ${port}`);
});
