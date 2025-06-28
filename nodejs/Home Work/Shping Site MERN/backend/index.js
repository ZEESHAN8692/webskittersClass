const express = require("express");
const Database = require("./app/config/database");
const productRoutes = require("./app/routes/product.routes");
const path = require("path");
const cors = require("cors");

require("dotenv").config();
const app = express();

// Database
Database();

// Routes
app.use("/api", productRoutes);
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(cors());

// Server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`successfully connected port =${PORT}`);
});
