const express = require("express");
const upload = require("../helper/userImage");
const UserController = require("../controller/UserController");
const AuthcheckEjs = require("../middleware/AuthCheckEjs");

const router = express.Router();

router.get("/register", UserController.registerPage);
router.post("/register/create", UserController.createuser);
 router.get("/login", UserController.loginPage);
 router.post('/login/create',UserController.loggedCreate)
 router.get('/dashboard',AuthcheckEjs,UserController.CheckAuth,UserController.dashBoard);
 router.get('/logout',UserController.logout);

module.exports = router;
