const express = require("express");
const app = express();
const homeRoute = require("./app/routes/home.route");

app.use(homeRoute);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`successfully connected port ${PORT}`);
});
