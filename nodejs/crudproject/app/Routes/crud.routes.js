const express = require("express");
const productController = require("../controller/product.controller");
const router = express.Router();

router.get("/user", productController.getProduct);
router.get("/single-user/:id", productController.singleProduct);
router.post("/craete-user", productController.createProduct);
router.put("/update-user/:id", productController.updateProduct);
router.delete("/delete-user/:id", productController.deleteProduct);

module.exports = router;
