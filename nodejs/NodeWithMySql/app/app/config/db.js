const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("indexing_node", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
