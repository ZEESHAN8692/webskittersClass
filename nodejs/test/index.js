import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import AdminRoutes from "./app/routes/adminRoutes.js";
import SiteRoutes from "./app/routes/contomerRoutes.js";
import dbcon from "./app/config/database.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3030;

// Fix for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "uploads")));
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
dbcon();

// Routes
app.use("/admin", AdminRoutes);
app.use("/", SiteRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
