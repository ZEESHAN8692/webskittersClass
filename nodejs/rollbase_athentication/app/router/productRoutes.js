const express = require("express");
const uploadImageMulter = require("../middleware/uploadImage");
const productController = require("../controller/productController");
const router = express.Router();
const { AuthCheck, rollBaseWork } = require("../middleware/AuthCheck");

// Product Routes
router.get(
  "/products",
  AuthCheck,
  rollBaseWork("read"),
  productController.getProducts
);
router.post(
  "/create-products",
  AuthCheck,
  rollBaseWork("create"),
  uploadImageMulter.single("image"),
  productController.createProduct
);
router.patch(
  "/update-product/:id",
  AuthCheck,
  rollBaseWork("update"),
  uploadImageMulter.single("image"),
  productController.updateProduct
);
router.get(
  "/get-product/:id",
  AuthCheck,
  rollBaseWork("read"),
  productController.findProductById
);
router.delete(
  "/delete-product/:id",
  AuthCheck,
  rollBaseWork("delete"),
  productController.deleteProduct
);

module.exports = router;
