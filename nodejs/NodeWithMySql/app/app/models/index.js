const sequelize = require("../config/db");
const User = require("./user.model");
const Product = require("./product.model");

// Sync all models
sequelize.sync({ alter: true })
  .then(() => console.log("✅ Database synced"))
  .catch(err => console.error("❌ Error syncing DB:", err));

module.exports = { User, Product };
