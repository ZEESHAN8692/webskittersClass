const express = require("express");
const uploadUserImage = require("../helper/userImageUpload");
const UserController = require("../controller/user.controller");

const router = express.Router();

router.get("/user", UserController.getUser);
router.get("/single-user/:id", UserController.singleUser);
router.post(
  "/craete-user",
  uploadUserImage.single("image"),
  UserController.createUser
);
router.patch("/update-user/:id", UserController.updateUser);
router.delete("/delete-user/:id", UserController.deleteUser);

module.exports = router;
