const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const hashPassword = (password) => {
  try {
    const salt = 10;
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

const comparePassword = (password, hashedPassword) => {
  try {
    return bcrypt.compareSync(password, hashedPassword);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  hashPassword,
  comparePassword,
};
