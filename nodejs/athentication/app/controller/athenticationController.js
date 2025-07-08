const userModel = require("../model/athenticationModel");
const bcrypt = require("bcrypt");
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
    const hashedPassword = bcrypt.hashSync(password, 10);

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
}

module.exports = new AuthenticationController();
