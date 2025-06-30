const express = require("express");
const Database = require("./app/config/database");
const productRoutes = require("./app/routes/product.routes");

const adminRoutes = require("./app/routes/adminuiroutes");
const path = require("path");
const bodyparser = require("body-parser");

require("dotenv").config();
const app = express();

// Database
Database();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// Routes
app.use("/api", productRoutes);
app.use("/admin", adminRoutes);

// Server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`successfully connected port =${PORT}`);
});
