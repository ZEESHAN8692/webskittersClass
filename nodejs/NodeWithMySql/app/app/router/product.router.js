const express = require("express");
const productController = require("../controller/product.controller");
const authMiddleware = require("../middleware/auth.middleware");
const upload = require("../utils/productImage");
const router = express.Router();

//const authMiddleware = require("../middleware/auth.middleware");

router.post("/", upload.single("image"), productController.createProduct);
router.get("/", authMiddleware, productController.getProducts);
router.get("/:id", authMiddleware, productController.getProductById);
router.put("/:id", upload.single("image"), authMiddleware, productController.updateProduct);
router.delete("/:id", authMiddleware, productController.deleteProduct);

module.exports = router;
