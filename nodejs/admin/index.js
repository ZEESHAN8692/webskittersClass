const express = require("express");
const router = require("./app/routes/routes");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(router);

const PORT = 5050;
app.listen(PORT, () => {
  console.log(`Successfull connect port ${PORT}`);
});
