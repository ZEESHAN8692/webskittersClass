require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const dbcon = require('./app/config/dbConfig');
const Apiroute = require('./app/router/Apiroute');

const app = express();

// Connect to MongoDB
dbcon();

// Enable CORS
app.use(cors());

// Parse form and JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use routes without "/api" prefix
app.use('/', Apiroute); 
const csvRouter=require('./app/router/csvRouter')
app.use(csvRouter)

// Start server
const PORT = process.env.PORT || 3008;
app.listen(PORT, () => {
    console.log(` Server running at http://localhost:${PORT}`);
});
