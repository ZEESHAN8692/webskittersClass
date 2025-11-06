import dotenv from "dotenv"
dotenv.config()
import express from "express"
import { database } from "./app/config/database.js"

const app = express()



// Database
database()
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})

app.get("/", (req, res) => {
    res.send("Hello World")
})

// mongoose.connect(`${process.env.MONGO_URL}`).then(() => {
//     console.log("Database connected");
// }).catch((err) => {
//     console.log("Databse error",err);
// })