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
    console.log(req.file);
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

  async login(req, res) {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      const passwordMatch = bcrypt.compareSync(password, user.password);
      if (passwordMatch) {
        res.redirect("/dashboard");
      } else {
        res.redirect("/login");
      }
    } else {
      res.redirect("/login");
      
    }
  }
}

module.exports = new AuthenticationController();
