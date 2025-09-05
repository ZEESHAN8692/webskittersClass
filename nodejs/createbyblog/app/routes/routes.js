const express = require("express");
const controller = require("../controller/controller");
const AuthCheck = require("../middleware/authCheck");
const router = express.Router();

router.get("/",controller.getHome)
// athentication routes
router.post("/login", controller.login);
router.post("/register",controller.register); 

// blog routes
router.post("/create-blog",AuthCheck, controller.createBlog);
router.get("/get-blog", AuthCheck, controller.getBlog);
router.get("/get-single-blog/:id",AuthCheck, controller.getSingleBlog);




module.exports = router;
