const express = require("express");

const router = express.Router();
const uploadProductsImages = require("../helper/productsImageUpload");
const productController = require("../controller/productController");

router.get("/products", productController.getProducts);
router.get("/single-product/:id", productController.singleProduct);
router.post(
  "/craete-product",
  uploadProductsImages.array("images", 5),
  productController.createProduct
);
router.patch("/update-product/:id", productController.updateProduct);
router.delete("/delete-product/:id", productController.deleteProduct);

module.exports = router;
