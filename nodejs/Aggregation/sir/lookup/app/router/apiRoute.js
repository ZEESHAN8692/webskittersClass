const express=require('express')
const ApiController = require('../controller/ApiController')
const uploadImage = require('../helper/studentImage')
const router=express.Router()


router.post('/create',uploadImage.single('image') ,ApiController.create)
router.get('/',ApiController.getall)
router.get('/edit/:id',ApiController.getone)
router.put('/update/:id',ApiController.update)
//router.post('/update/:id',ApiController.update)

router.delete('/delete/:id',ApiController.delete)

//for search
router.post('/search',ApiController.search)



module.exports=router