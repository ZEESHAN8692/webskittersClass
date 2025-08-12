const User = require("../model/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

let generatedOtp = ''; // Consider storing in DB or session for production

class UserController {

  // Middleware for checking auth
  async CheckAuth(req, res, next) {
    try {
      if (req.user) {
        next();
      } else {
        res.redirect('/login');
      }
    } catch (err) {
      console.log(err);
    }
  }

  // GET register page
  async registerPage(req, res) {
    res.render("register", { title: "register page" });
  }

  // POST register user
  async createuser(req, res) {
    try {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
      });

      const result = await user.save();
      console.log('User registered:', result);

      if (result) {
        res.redirect('/login');
      } else {
        console.log('Registration failed');
        res.redirect('/');
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Error during registration");
    }
  }

  // GET login page
  async loginPage(req, res) {
    res.render("login", { error: null });
  }

  // POST login
  async loggedCreate(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.render("login", { error: "User not found" });
      }

      if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign(
          {
            id: user._id,
            name: user.name,
            email: user.email
          },
          process.env.JWT_ACCESS_TOKEN_SECRET_KEY,
          { expiresIn: "10h" }
        );

        res.cookie("userToken", token);
        res.redirect("/user");
      } else {
        res.render("login", { error: "Incorrect password" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("Login error");
    }
  }

  // GET dashboard
  async dashBoard(req, res) {
    res.render("dashboard", { data: req.user });
  }

  // Logout
  async logout(req, res) {
    try {
      res.clearCookie("userToken");
      res.redirect("/login");
    } catch (err) {
      console.log(err);
    }
  }

  // GET user form for OTP
  async renderUserForm(req, res) {
    res.render("user");
  }

  
  async handleUserSubmit(req, res) {
    const { name, email, designation } = req.body;
    const profilePic = req.file ? `/uploads/${req.file.filename}` : null;

    // Generate 6-digit OTP
    generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();

    req.app.locals.user = {
      name,
      email,
      designation,
      profilePic,
      otp: generatedOtp
    };

    console.log("Generated OTP:", generatedOtp);

    // Send OTP to Yopmail 
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "indranimukherjee198@gmail.com",       
        pass: "ltzu qyec gziw cvbc",          
      },
    });

    const mailOptions = {
      from: "indranimukherjee198@gmail.com",
      to: email, 
      subject: "Your OTP Code",
      text: `Dear ${name},\n\nYour OTP is: ${generatedOtp}. It will expire in 2 minutes.`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("OTP email sent to:", email);
      res.redirect("/otp");
    } catch (emailErr) {
      console.error("Failed to send OTP:", emailErr);
      res.status(500).send("Failed to send OTP email.");
    }
  }

  // GET OTP page
  async renderOtpPage(req, res) {
    res.render("otp");
  }

  // POST verify OTP
  async verifyOtp(req, res) {
    const { otp } = req.body;
    const user = req.app.locals.user;

    if (user && otp === user.otp) {
      res.send(`<h2>Welcome, ${user.name}!</h2><img src="${user.profilePic}" width="100">`);
    } else {
      res.send('<h3>OTP Invalid</h3><a href="/otp">Try again</a>');
    }
  }
}

module.exports = new UserController();
