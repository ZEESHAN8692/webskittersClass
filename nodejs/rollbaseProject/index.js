require("dotenv").config();
const express = require("express");
const path = require("path");
const dbcon = require("./app/config/dbConfig");

//Database

dbcon();
const app = express();
app.use(express.json());
app.use(express.static("public"));
// app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
// app.use("/uploads", express.static(__dirname + "/uploads"));
// app.use(express.urlencoded({ extended: true }));

//route
const userRouts = require("./app/routes/userRoutes");

app.use("/api", userRouts);

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`Server is runnig port ${port}`);
});
