require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const path = require("path");
const dbcon = require("./app/config/dbConfig");
const cookieParser = require("cookie-parser");

//Database

dbcon();
const app = express();
//views
app.use(express.json());
app.use(cookieParser());

//route
const ApiRoute = require("./app/router/AuthApiRoute");
const userRoute = require("./app/router/userRoutes");
const adminRoute = require("./app/router/adminRoutes");
app.use("/api", ApiRoute);
app.use("/", userRoute);
app.use("/admin", adminRoute);

const port = 3001 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server is runnig port ${port}`);
});
