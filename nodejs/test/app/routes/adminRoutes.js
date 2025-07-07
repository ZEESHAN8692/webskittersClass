import express from "express";

import upload from "../middleware/uploadImage.js";
import adminController from "../controller/adminController.js";

const router = express.Router();

router.get("/", adminController.getDashboard);
router.get("/products", adminController.getProducts);
router.get("/add-product", adminController.addProducts);
router.get("/edit-product/:id", adminController.updateProducts);
router.post("/add-product", upload.single("image"), adminController.addProduct);
router.put(
  "/edit-product/:id",
  upload.single("image"),
  adminController.updateProduct
);
router.get("/delete-product/:id", adminController.deleteProduct);

export default router;
