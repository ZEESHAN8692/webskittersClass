const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const session = require('express-session');
const cors=require('cors')
const flash = require('connect-flash');
const rateLimitMiddleware=require('./middleware/reatLimit')
const bodyParser=require('body-parser')
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const SwaggerOptions = require('./swagger.json');
const swaggerDocument = swaggerJsDoc(SwaggerOptions);
const plantRoute = require('./route/plantRoute')

const app = express()

//for express rate limit
//app.use(rateLimitMiddleware)

app.use(session({
    secret:'secrect',
    cookie:{maxAge:600000},
    resave:false,
    saveUninitialized:false
}))

app.use(flash())


app.use(express.urlencoded({ extended: true }))

app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 5000
})); // get information from html forms

app.use(bodyParser.json({
    limit: "50mb"
}));

app.use(cors());

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin",'*');
    res.setHeader("Access-Control-Allow-Methods",'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader("Access-Control-Allow-Headers",'Content-Type,Authorization');
    next();
 })

app.use(express.static(path.join(__dirname, "public")))

//Step 2
app.use('/upload', express.static(path.join(__dirname, "upload")))
app.use('/unlinkimage', express.static(path.join(__dirname, "unlinkimage")))
app.use('/productimage', express.static(__dirname + '/productimage'));

app.use('/uploads',express.static('uploads'))
//Step 3

app.set("view engine", "ejs")
app.set("views", "views")

// Access Route
const studentRouter = require('./route/studentRouter');
//const apiRouter = require('./route/apiRouter');
app.use('/api',studentRouter);
//app.use("/api/", apiRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const AjaxRoute=require('./route/ajaxroute')
app.use(AjaxRoute)

const unwindRoute=require('./route/unwindRoute')
app.use(unwindRoute)

const UserRoute=require('./route/userRout')
app.use('/api',UserRoute)

const CsvRoute=require('./route/csvRoute')
app.use(CsvRoute)

const ProductRoute=require('./route/productRoute');
app.use(ProductRoute)

const unlinkImageRoute=require('./route/unlinkimageRoot');
app.use(unlinkImageRoute)

const joiRoter=require('./route/JoiRoute')
app.use(joiRoter)
const replaceRoute=require('./route/replaceRoute')
app.use(replaceRoute)
const geoRoute=require('./route/geoRoute')
app.use(geoRoute)

app.use("/api",plantRoute)

const dbDriver = "mongodb+srv://abhishek:rKbKhmexljtap0Rh@cluster0.jwma6.mongodb.net/ajaxauth"

const port = process.env.PORT || 5000

mongoose.connect(dbDriver, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((result) => {
    app.listen(port, () => {
        console.log(`DB Is Connected @ http://localhost:${port}`);
        console.log(`Server Is Connected!!!`);
    })
}).catch((error) => {
    console.log(`Something Went Wrong!!!`);
})