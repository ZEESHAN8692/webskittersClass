import express from "express";
import inventoryController from "../Controller/inventoryController.js";

const router = express.Router();

router.post("/add-inventory", inventoryController.addInventory);
router.get("/inventories", inventoryController.allInventory);
router.get("/single-inventory", inventoryController.singleInventory);

// Comparison operators in MongoDB

// $eq 


export default router;
