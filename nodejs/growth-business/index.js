const express = require("express");
const routes = require("./app/routes/routes");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "views");

// Routes
app.use(routes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`successful connected port ${PORT}`);
});
