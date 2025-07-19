const {
  hsahePassword,
  comparePassword,
} = require("../../middleware/AuthCheck");
const UserModel = require("../../model/UserModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
class AthenticationEjsRoutes {
  async login(req, res) {
    res.render("authentication/login");
  }
  async signup(req, res) {
    res.render("authentication/signup");
  }

  async signupPost(req, res) {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        return res.status(400).json({
          message: "All fields are required",
        });
      }
      const existUser = await UserModel.findOne({ email });
      if (existUser) {
        return res.status(400).json({
          message: "User already exist",
        });
      }

      const hashedPassword = await hsahePassword(password);
      const user = await new UserModel({
        name,
        email,
        password: hashedPassword,
      }).save();
      res.redirect("/login");
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async loginPost(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({
          message: "All fields are required",
        });
      }
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(400).json({
          message: "User not found",
        });
      }

      const isMatch = await comparePassword(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          message: "Invalid credentials",
        });
      }
      const token = jwt.sign(
        {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        process.env.JWT_ACCESS_TOKEN_SECRET_KEY
      );
      res.cookie("token", token, { httpOnly: true });
      if (user.role === "admin") {
        res.redirect("/admin_dashboard");
      } else {
        res.redirect("/");
      }
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async logout(req, res) {
    res.clearCookie("token");
    res.redirect("/login");
  }
}
module.exports = new AthenticationEjsRoutes();
