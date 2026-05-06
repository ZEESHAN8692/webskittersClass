import express from "express";
import dotenv from "dotenv";
import Database from "./app/config/database.js";
dotenv.config()
import router from "./app/routes/routes.js";

const app = express()

Database()

app.use(express.urlencoded({extended: true}))
app.use(express.json())



app.use(router)
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})