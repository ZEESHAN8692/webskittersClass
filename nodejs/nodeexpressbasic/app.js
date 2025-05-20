const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("welcome to express js");
});
app.get("/about", (req, res) => {
  res.send("about page");
});

app.get("/product", (req, res) => {
  res.send("Product Page");
});

app.get("/menu", (req, res) => {
  res.send("Menu Page");
});

const port = 3006;

app.listen(port, () => {
  console.log(`server running port ${port}`);
});
