require("dotenv").config();
const express = require("express");
const app = express();

const path = require("path");

const cookieParser = require("cookie-parser");

//Database
const dbcon = require("./app/config/dbConfig");
dbcon();
//views
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cookieParser());
app.set("views", path.join(__dirname, "views"));

//router
const apiRoute=require('./app/router/authApiroute');
app.use('/api',apiRoute)

//server
const port = 3008 || process.env.PORT;
app.listen(port, () => {
  console.log(`Seerver is runnig at ${port}`);
});
