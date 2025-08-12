const express=require('express');
const StudentController = require('../controller/StudentController');
const router=express.Router();


router.post('/std-create',StudentController.createuser)
module.exports=router