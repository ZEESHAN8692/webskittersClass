const express = require("express");
const productController = require("../controller/product.controller");
const uploadImageMulter = require("../helper/uploadImage");
const router = express.Router();

// Product Routes
router.get("/products", productController.getProducts);
router.post(
  "/create-products",
  uploadImageMulter.array("images", 5),
  productController.createProduct
);
router.get("/single-product/:slug", productController.singleProduct);
router.patch(
  "/update-product/:id",
  uploadImageMulter.array("images", 5),
  productController.updateProduct
);
router.delete("/delete-product/:id", productController.deleteProduct);

module.exports = router;
