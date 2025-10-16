const express = require("express");
const dotenv = require("dotenv");
const router = require("./app/routes/routes");
const userRoutes = require("./app/routes/userRoutes")
const ejs = require("ejs")
dotenv.config()
const app = express()

// inbuild Middleware 
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.set("view engine" , "ejs")

app.get("/", (req, res)=>{
    const arr = [
        {
            name:"Node JS",
            version:"1.0.0"
        },
        {
            name:"Node JS",
            version:"1.0.0"
        },
        {
            name:"Node JS",
            version:"1.0.0"
        }
    ]
    res.json(arr)
})

// Routes 
app.use(router)
app.use("/api",userRoutes)


const PORT = process.env.PORT
app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`)
})