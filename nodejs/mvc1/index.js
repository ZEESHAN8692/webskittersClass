const express = require("express");
const app = express();
const homeRoute = require("./app/routes/home.route");
const userRoute = require("./app/routes/user.route");
const studentRoute = require("./app/routes/student.route");
const menuRoute = require("./app/routes/menu.route");
const productRoute = require("./app/routes/product.route");
const serviceRoute = require("./app/routes/service.route");
const loginRoute = require("./app/routes/login.route");
const registerRoute = require("./app/routes/register.route");

// Routes
app.use(homeRoute);
app.use(userRoute);
app.use(studentRoute);
app.use(menuRoute);
app.use(productRoute);
app.use(serviceRoute);
app.use(loginRoute);
app.use(registerRoute);
app.set("view engine", "ejs");
app.set("views", "views");

const PORT = 1000;
app.listen(PORT, () => {
  console.log(`Successfully Connected port ${PORT}`);
});
