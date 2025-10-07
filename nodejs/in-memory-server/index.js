import express from 'express';
import dotenv from 'dotenv';
import router from './app/routes/routes.js';
import Database from './app/config/Database.js';
import ejs from 'ejs';

dotenv.config();

// Database connection
Database();
const app = express();
const port = process.env.PORT || 5000;


app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(port, () => console.log(`Server running on port ${port}`));
