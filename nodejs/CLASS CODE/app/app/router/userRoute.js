const express = require("express");
const upload = require("../helper/userImage");
const UserController = require("../controller/UserController");
const router = express.Router();

router.get("/register", UserController.registerPage);
router.get("/login", UserController.loginPage);
router.post('/register',upload.single('image'),UserController.createuser);
router.post('/login',UserController.loggedUser)
router.get('/dashboard',UserController.dashBoard);

module.exports = router;
