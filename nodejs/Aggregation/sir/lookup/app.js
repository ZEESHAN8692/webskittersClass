const express = require('express');
const ejs=require('ejs');
const dotenv=require('dotenv');
const connectDB=require('./app/config/db');
const session=require('express-session');
const cookieParser=require('cookie-parser');
dotenv.config();
const app = express();
connectDB()

/**setup cookie */
app.use(cookieParser());
/**setup session */
app.use(session({
    cookie: { maxAge: 60000 },
    secret: 'myprojectwebskitters',
    resave: false,
    saveUninitialized: false
}))
   
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/uploads',express.static(__dirname + '/uploads'));

const lookupRoute=require('./app/router/lookupRoute');
app.use(lookupRoute)


const HomeRouter=require('./app/router/homeRouter');
app.use(HomeRouter)    
//for api 
const ApiRouter=require('./app/router/apiRoute');
app.use('/api',ApiRouter)

const AuthRouter=require('./app/router/authRoute'); 
app.use('/auth',AuthRouter)

const AjaxRouter=require('./app/router/ajaxRoute');
app.use(AjaxRouter) 

const port = 3004
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});