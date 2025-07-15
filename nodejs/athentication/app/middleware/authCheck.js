const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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

const isLogin = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.send("You are not logged in");
    }
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) {
        return res.send("You are not logged in");
      }
      req.user = user;
      next();
    });
  } catch (error) {
    console.log(error);
    res.send("An error occurred");
  }
};

module.exports = {
  hashPassword,
  comparePassword,
  isLogin,
};
