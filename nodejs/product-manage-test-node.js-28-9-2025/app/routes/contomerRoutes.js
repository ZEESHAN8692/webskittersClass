import express from "express";
import siteController from "../controller/costomerController.js";
const router = express.Router();

router.get("/", siteController.getHome);
router.get("/product-details/:slug", siteController.getProductDetails);

export default router;
