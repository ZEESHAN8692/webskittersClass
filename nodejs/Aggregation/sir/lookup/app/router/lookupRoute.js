const express=require('express')
const LookupController = require('../controller/LookupController')

const router=express.Router()



router.post('/createCategory',LookupController.createCategory)
router.get('/category',LookupController.getallCategory)


router.post('/createSubCategory', LookupController.createSubCategory)
router.get('/subCategory', LookupController.getSubCategory)

module.exports=router