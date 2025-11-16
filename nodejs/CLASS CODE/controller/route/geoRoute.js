const express = require('express');
const geoController = require('../controller/geoController');
 const router = express.Router();



router.post('/create/geo',geoController.createGeo);
router.get('/get/geo',geoController.getGeo);






  module.exports = router;
