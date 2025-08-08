import express from "express";
import dotenv from "dotenv";
import Database from "./app/config/database.js";
import employeeRoutes from "./app/routes/employeeRoutes.js";
dotenv.config();

// Middleware
const app = express();

// Database
Database();

// Middleware
app.use(express.json()); // Enable JSON body parsing

// Routes
app.use("/api", employeeRoutes);
app.get("/", (req, res) => res.send("Hello World!"));

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
