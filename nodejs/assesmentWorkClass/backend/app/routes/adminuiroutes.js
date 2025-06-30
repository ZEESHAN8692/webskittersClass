const express = require("express");
const uploadImageMulter = require("../helper/uploadImage");
const adminUiController = require("../controller/adminUiController");

const router = express.Router();

// Product Routes
router.get("/products", adminUiController.getProducts);
router.get("/add-products", adminUiController.addProduct);
router.get("/edit-product/:id", adminUiController.editProduct);
router.post(
  "/create-products",
  uploadImageMulter.array("images", 5),
  adminUiController.createProduct
);

router.post(
  "/update-product/:id",
  uploadImageMulter.array("images", 5),
  adminUiController.updateProduct
);
router.get("/delete-product/:id", adminUiController.deleteProduct);

module.exports = router;

