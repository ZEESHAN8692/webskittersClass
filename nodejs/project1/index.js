const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/contact", (req, res) => {
  res.send("<h1>Contact Page</h1>");
});
app.get("/menu", (req, res) => {
  res.send("<h1>Menu Page</h1>");
});
app.get("/product", (req, res) => {
  res.send("<h1>Product Page</h1>");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`successfull connect port ${PORT}`);
});
