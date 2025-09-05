import express from "express";
import dotenv from "dotenv";
import Database from "./app/config/Database.js";
dotenv.config();
const app = express();


app.use(express.json());

// Connect to the database
Database();

const PORT = process.env.PORT || 5000;
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

