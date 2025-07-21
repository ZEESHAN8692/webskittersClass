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
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.urlencoded({ extended: true }));

//route
const ApiRoute = require("./app/router/AuthApiRoute");
const userRoute = require("./app/router/userRoutes");
const adminRoute = require("./app/router/adminRoutes");
const AthenticationEjsRoutes = require("./app/router/ejs/athenticationRoutes");
const AdminEjsRoutes = require("./app/router/ejs/adminRoutes");
const userEjsRoutes = require("./app/router/ejs/userRoutes");
const productRoute = require("./app/router/productRoutes");
app.use("/api", ApiRoute);
app.use("/", userRoute);
app.use("/admin", adminRoute);
app.use("/", AthenticationEjsRoutes);
app.use("/", AdminEjsRoutes);
app.use("/", userEjsRoutes);
app.use("/api", productRoute);

const port = 3001 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server is runnig port ${port}`);
});
