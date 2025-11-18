const express = require('express');
const imageController = require('../controller/imageController');
const uploadImage = require('../helper/uploadImage');
const router = express.Router();    

router.post('/upload/image', uploadImage.single('image'), imageController.uploadImage);


module.exports = router;