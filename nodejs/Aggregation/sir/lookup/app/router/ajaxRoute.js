const express = require('express') 
const AjaxController = require('../controller/AjaxController')
const router = express.Router()

router.get('/ajax',AjaxController.getAjax)
router.post('/create/data',AjaxController.createAjax)



module.exports = router