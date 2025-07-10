const User = require("../model/UserModel");
const bcrypt = require("bcryptjs");

class UserController {
  //get register page
  async registerPage(req, res) {
    res.render("register",{error:null});
  }

  //post register
  async createuser(req, res) {
    try {
      const { name, email, phone, password, isAdmin, isVerified } = req.body;
      const hasedPassword = await bcrypt.hash(password, 10);
      const image = req.file ? req.file.filename : null;
      
      const user = new User({
        name,
        email,
        phone,
        password: hasedPassword,
        isAdmin,
        isVerified: isVerified === "true",
        image
      });
      await user.save();
      res.redirect("/login");
    } catch (error) {
      console.error(error);
      res.status(500).send("Error registering user");
    }
  }

  //get login
  async loginPage(req, res) {
    res.render("login",{error:null});
  }

  //postlogin
  async loggedUser(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.render('login',{error:"User not found"});
      }
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) return res.render('login',{error:"Incorrect password"});
      res.redirect("/dashboard");
    } catch (error) {
      console.error(err);
      res.status(500).send("Error registering user");
    }
  }
  //dashboard
  async dashBoard(req, res) {
    const users = await User.find();
    res.render("dashboard", { users });
  }
}

module.exports = new UserController();
