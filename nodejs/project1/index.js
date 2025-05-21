const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
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
