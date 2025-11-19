
const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


class AuthController {

  // Registration logic
  async register(req, res) {
    try {
      const { name, email, phone, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await User.create({
        name,
        email,
        phone,
        password: hashedPassword,
      });

      return res.status(201).json({ message: "User registered successfully", user });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });

      if (!user) return res.status(404).json({ error: "User not found" });

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) return res.status(401).json({ error: "Invalid password" });

      const token = jwt.sign({
        id: user.id,
        name: user.name,
        email: user.email
      }, process.env.JWT_SECRET||"mysecret", { expiresIn: "1h" });

      return res.status(200).json({
        message: "Login successful",
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        },
        token
      });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  };

  async dashboard(req, res) {
    try {
      // Assuming authMiddleware has set req.userId
      const user = await User.findByPk(req.userId, {
        attributes: { exclude: ['password'] }
      });
      if (!user) return res.status(404).json({ error: "User not found" });
      return res.status(200).json({ user });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  };

}

module.exports = new AuthController();