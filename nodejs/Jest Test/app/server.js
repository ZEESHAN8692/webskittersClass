const express = require("express");
const ejs=require('ejs');
const dotenv=require('dotenv');
const path=require('path');
const connectDB=require('./app/config/db')
const cors=require('cors');
const corsOptions = require("./app/utils/corsOrigin");
const session=require('express-session');
const flash=require('connect-flash');
const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser');
const {rateLimit}=require('express-rate-limit');
const helmet = require('helmet');
const morgan = require('morgan')


dotenv.config();
const app=express();
connectDB()
app.use(morgan('combined'))
app.use(helmet());
app.use(cors(corsOptions));

// Apply to all requests: 100 requests per 15 minutes per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    status: 429,
    error: 'Too many requests. Please try again later.',
  },
});

app.use(limiter);

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

const joiRouter=require('./app/router/joiRouter')
app.use(joiRouter);
const authRoute=require('./app/router/authRouter')
app.use('/api',authRoute);

const apiRoute=require('./app/router/ApiRoute');

app.use('/api',apiRoute);

const imageRoute=require('./app/router/imageRoute');
app.use('/api',imageRoute);




module.exports = app;



const port=3005;

// app.listen(port,()=>{
//     console.log('server is running on port 3005');
    
// })