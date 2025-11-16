const express=require('express')
const homeController = require('../controller/homeController')

const router=express.Router()



router.get('/', homeController.homePage)
router.get('/about', homeController.aboutPage)
router.get('/contact', homeController.contactPage)





module.exports=router