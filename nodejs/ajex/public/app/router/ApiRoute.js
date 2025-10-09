const express = require('express');
const ApiController = require('../controller/ApiController');
const router = express.Router();




 router.get('/in-memory', ApiController.getInMemoryData);
router.post('/in-memory/create',ApiController.createData);


router.get('/ajax/user',ApiController.getAjaxUser);
router.post('/ajax/user/create',ApiController.createData);
router.get('/ajax/data',ApiController.getAjaxData);

module.exports = router;