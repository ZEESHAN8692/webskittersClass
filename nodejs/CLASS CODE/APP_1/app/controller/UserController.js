const User = require("../model/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class UserController {
  async CheckAuth(req, res, next) {
    try {
      if (req.user) {
        next();
      } else {
        res.redirect("/login");
      }
    } catch (err) {
      console.log(err);
    }
  }
  //get register page
  async registerPage(req, res) {
    res.render("register", {
      title: "register page",
    });
  }

  //post register
  async createuser(req, res) {
    try {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
      });

      const result = await user.save();
      console.log("data", result);

      if (result) {
        console.log("register successfully");

        res.redirect("/login");
      } else {
        console.log("register failed");

        res.redirect("/");
      }
    } catch (err) {
      console.log(err);
    }
  }

  //get login
  async loginPage(req, res) {
    res.render("login", { error: null });
  }

  //postlogin
  async loggedCreate(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.render("login", { error: "User not found" });
      }

      if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const tokendata = jwt.sign(
          {
            id: user._id,
            name: user.name,
            email: user.email,
          },
          process.env.JWT_ACCESS_TOKEN_SECRET_KEY,
          { expiresIn: "10h" }
        );

        if (tokendata) {
          res.cookie("userToken", tokendata);
          res.redirect("/dashboard");
        } else {
          console.log("login failed");
        }
      }
      console.log("login failed");
      res.redirect("/login");
    } catch (error) {
      console.error(err);
      res.status(500).send("Error registering user");
    }
  }
  //dashboard
  async dashBoard(req, res) {
    res.render("dashboard", {
      data: req.user,
    });
  }
  async logout(req, res) {
    try {
      res.clearCookie("userToken");
      res.redirect("/login");
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new UserController();
