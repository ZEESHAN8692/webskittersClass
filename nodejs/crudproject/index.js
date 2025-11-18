const express = require("express");
const app = express();
require("dotenv").config();
const productRoutes = require("./app/Routes/crud.routes");
const Database = require("./app/config/database");
// Databse
Database();
app.use(express.json());

// Raoutes
app.use("/api", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Successfull connected posrt ${PORT}`);
});

module.exports = app;