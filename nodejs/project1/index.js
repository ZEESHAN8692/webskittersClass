const express = require("express");
const app = express();
const homeRoutes = require("./app/routes/home.routes");
const userRoute = require("./app/routes/user.routes");
const productRoute = require("./app/routes/product.route");
const serviceRoute = require("./app/routes/service.route");
const studentRoute = require("./app/routes/student.route");
// Routes
app.use(homeRoutes);
app.use(userRoute);
app.use(productRoute);
app.use(serviceRoute);
app.use(studentRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`successfull connect port ${PORT}`);
});
