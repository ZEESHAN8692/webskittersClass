const jwt = require("jsonwebtoken");
require("dotenv").config();
const isLoginEjs = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.redirect("login");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET_KEY);
    console.log("before login data", req.user);
    req.user = decoded;
    console.log("afetr login data", req.user);
  } catch (err) {
    return res.status(400).json({
      message: "Invalid token",
    });
  }
  return next();
};

const adminCheckEjs = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.redirect("/login");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET_KEY);
    req.user = decoded;
    console.log("afetr login data", req.user);
    if (req.user.role !== "admin") {
      return res.redirect("/");
    }
  } catch (err) {
    return res.status(400).json({
      message: "Invalid token",
    });
  }
  return next();
};

module.exports = { isLoginEjs, adminCheckEjs };
