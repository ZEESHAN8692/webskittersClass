require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const path = require("path");
const dbcon = require("./app/config/dbConfig");

//Database

dbcon();
const app = express();
//views
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//route
// const userRoute = require("./app/router/userRoute");
// app.use(userRoute);

const ApiRoute=require('./app/router/AuthApiRoute')
app.use('/api',ApiRoute)

const port = 3008 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server is runnig port ${port}`);
});
