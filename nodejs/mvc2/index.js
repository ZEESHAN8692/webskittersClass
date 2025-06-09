require("dotenv").config();
const express = require("express");
const Database = require("./app/config/Database");

const app = express();
// Database
Database();

app.use(express.json());

const studentApiroutes = require("./app/routes/studentApi.route");
app.use("/api", studentApiroutes);

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Successfully Connected port ${PORT}`);
});
