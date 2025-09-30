import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import { dbConnection } from './app/config/dbCon'

const app = express()

//Middlewares first
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static(__dirname + '/uploads'))

// Then your routes
import { router } from './app/router/studentRoute'
app.use(router)

// DB connection + Start server
dbConnection.then(() => {
    app.listen(process.env.PORT, () => 
        console.log(`Server is listening on http://localhost:${process.env.PORT}`)
    )
})
