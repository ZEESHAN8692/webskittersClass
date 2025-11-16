const express = require('express')
const ReplaceRootController = require('../controller/ReplaceRootController')
const router = express.Router()

//example of replace root embedded model
router.post('/replace/route', ReplaceRootController.create)
router.get('/replace/route', ReplaceRootController.replaceRoot)
router.get('/replace/route/all', ReplaceRootController.replaceRootall)






module.exports = router