const express = require("express");
const ejs=require('ejs');
const dotenv=require('dotenv');
const path=require('path');
const connectDB=require('./app/config/db')
const cors=require('cors');
const session=require('express-session');
const flash=require('connect-flash');
const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser');

const morgan = require('morgan')


dotenv.config();
const app=express();

app.use(morgan('combined'))

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'keyboardcat',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        maxAge: 1000 * 60 * 60 * 24 // 24 hours
     }
  }))
  app.use(flash());

  app.use(cookieParser());


//set view engine
app.set('view engine','ejs');
app.set('views','views')

//setup body parser
app.use(express.json({
    limit:'50mb',
    extended:true
}));
app.use(express.urlencoded({extended:true}))
//static folder
app.use(express.static('public'));

app.use('uploads',express.static(path.join(__dirname,'/uploads')))
app.use('/uploads',express.static('uploads'));  




const apiRoute=require('./app/router/ApiRoute')
app.use('/api',apiRoute);


const PORT=3005;


connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1); // Exit the process if DB connection fails
  });