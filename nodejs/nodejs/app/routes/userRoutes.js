const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

router.post("/create-user",userController.craeteUser)
router.get("/users", userController.getAllUsers)

module.exports= router
