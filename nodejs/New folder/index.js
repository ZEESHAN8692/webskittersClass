const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3030;
const path = require("path");
const csvRoute = require("./app/Routes/csv.route");

// Middleware to parse JSON and urlencoded data
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
const dbcon = require("./app/config/database");
dbcon();

// Basic route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});
app.use(csvRoute)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
