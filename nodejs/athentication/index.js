const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3030;
const path = require("path");
const authenticationRoutes = require("./app/routes/athenticationRoutes");
const cookieParser = require("cookie-parser");

// Middleware to parse JSON and urlencoded data
app.use(express.static(path.join(__dirname, "./uploads")));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Database connection
const dbcon = require("./app/config/database");
dbcon();

// Basic route
app.use("/", authenticationRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
