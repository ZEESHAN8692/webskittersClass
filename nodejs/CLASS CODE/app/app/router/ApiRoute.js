const express=require('express')
const { route } = require('./homeRouter')
const ApiController = require('../controller/ApiController')
const upload = require('../helper/studentImageUpload')

const Route=express.Router()


Route.post('/create/student',upload.single('image'),ApiController.createStudent)
Route.get('/student',ApiController.AllStudent)
Route.get('/student/:id',ApiController.singleStudent)
Route.put('/update/student/:id',ApiController.updateStudent)
Route.delete('/delete/student/:id',ApiController.deleteStudent)

module.exports=Route