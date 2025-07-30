import InventoryModel from "../model/inventoryModel.js";

class InventoryController {
  async addInventory(req, res) {
    try {
      const { name, quantity, price, description } = req.body;
      const inventory = new InventoryModel({
        name,
        quantity,
        price,
        description,
      });
      const data = await inventory.save();
      res.status(201).json({
        status: true,
        message: "Inventory added successfully",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        error: "Internal Server Error",
        message: error.message,
      });
    }
  }

  async allInventory(req, res) {
    try {
      const data = await InventoryModel.find();
      res.status(200).json({
        status: true,
        message: "fetch All inventories successfully",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        error: "Internal Server Error",
        message: error.message,
      });
    }
  }

  async singleInventory(req, res) {
    try {
      const data = await InventoryModel.findById(req.params.id);
      res.status(200).json({
        status: true,
        message: "Inventory fetched successfully",
        data: data,
      });
    } catch (error) {
      s;
      res.status(500).json({
        status: false,
        error: "Internal Server Error",
        message: error.message,
      });
    }
  }
}

export default new InventoryController();
