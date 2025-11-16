const ProductController = require("../controller/ProductController");
const uploadOptions=require('../helper/productImage')
const router = require("express").Router();


router.post('/create/product',uploadOptions.array('image', 10), ProductController.createProduct);
router.get('/get/product',ProductController.allproduct);
router.get('/slug/product/:slug',ProductController.slugproduct);

module.exports = router;




