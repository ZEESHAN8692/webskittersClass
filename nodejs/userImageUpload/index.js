const express = require("express");
const app = express();
require("dotenv").config();
const productRoutes = require("./app/Routes/user.routes");
const Database = require("./app/config/database");
const path = require("path");
// Databse
Database();

// Middleware
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use("/uploads", express.static(__dirname + "/uploads"));

// Raoutes
app.use("/api", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Successfull connected posrt ${PORT}`);
});
