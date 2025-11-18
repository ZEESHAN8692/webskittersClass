const express = require('express');
const ApiController = require('../controller/ApiController');
const upload=require("../helper/studentImage")
const router = express.Router();

router.post('/create/student',upload.single('image'),ApiController.createStudent)
router.get('/student',ApiController.getStudent)
router.get('/edit/student/:id',ApiController.editStudent)
router.put('/update/student/:id',ApiController.updateStudent)
router.delete('/delete/student/:id',ApiController.deleteStudent)



router.get('/slug/student/:slug',ApiController.getdataSlugStudent)
router.post('/search',ApiController.search)

//GET http://localhost:3000/api/users?age=25
router.get('/filter',ApiController.filter)



module.exports = router;