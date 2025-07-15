const userModel = require("../model/athenticationModel");
const bcrypt = require("bcryptjs");
const { hashedPassword, comparePassword } = require("../middleware/authCheck");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();
class AuthenticationController {
  async getHome(req, res) {
    res.render("home" , { data: null });
  }
  async getLogin(req, res) {
    res.render("login" , { data: null });
  }

  async getRegistration(req, res) {
    res.render("registration" , { data: null });
  }
  async postRegistration(req, res) {
    const { name, email, phone, password } = req.body;
    const isAdmin = req.body.isAdmin === "on";
    const isVerified = req.body.isVerified === "on";
    const profilePic = req.file ? req.file.path : "";
    // console.log(req.file);
    if (!name && !email && !phone && !password && !isAdmin && !isVerified) {
      return res.send("All fields are required");
    }
    const user = await userModel.findOne({ email });
    if (user) {
      return res.send("User already exists");
    }

    const hashedPassword = await hashedPassword(password);

    await userModel.create({
      name,
      email,
      phone,
      password: hashedPassword,
      profile_pic: profilePic,
      isAdmin,
      isVerified,
    });

    res.redirect("/login");
  }

  async login(req, res) {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.send("User not found");
    }
    if (user) {
      const passwordMatch = comparePassword(password, user.password);
      if (passwordMatch) {
        const token = jwt.sign(
          {
            id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            isVerified: user.isVerified,
          },
          process.env.JWT_SECRET_KEY,
          { expiresIn: "2h" }
        );

        res.cookie("token", token, {
          httpOnly: true,
        });

        res.redirect("/dashboard");
      } else {
        return res.send("Invalid password");
      }
    } else {
      res.send("User not found");
    }
  }

  async getDashboard(req, res) {
    const name = req.user.name;
    console.log(name);
    res.render("dashboard", { data: req.user.name });
  }
  async logout(req, res) {
    res.clearCookie("token");
    res.redirect("/login");
  }
}

module.exports = new AuthenticationController();
