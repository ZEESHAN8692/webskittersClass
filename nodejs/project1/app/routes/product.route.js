const express = require("express");
const ProductControler = require("../controller/productController");

const router = express.Router();

router.get("/product", ProductControler.productPage);

module.exports = router;
