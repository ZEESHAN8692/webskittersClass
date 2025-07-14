const userModel = require("../model/athenticationModel");
const bcrypt = require("bcryptjs");
const { hashedPassword, comparePassword } = require("../middleware/authCheck");
class AuthenticationController {
  async getHome(req, res) {
    res.render("home");
  }
  async getLogin(req, res) {
    res.render("login");
  }
  async getDashboard(req, res) {
    res.render("dashboard");
  }
  async getRegistration(req, res) {
    res.render("registration");
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
        res.redirect("/dashboard");
      } else {
        return res.send("Invalid password");
      }
    } else {
      res.send("User not found");
    }
  }
}

module.exports = new AuthenticationController();
