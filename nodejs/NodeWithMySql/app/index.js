const express = require("express");
const sequelize = require("./app/config/db");
require("./app/models"); // sync tables
const path = require("path");

const app = express();
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// Routes
const authRoutes = require("./app/router/auth.router");
const productRoutes = require("./app/router/product.router");
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
sequelize.authenticate()
  .then(() => {
    console.log("✅ Database connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.error("❌ DB connection error:", err));
