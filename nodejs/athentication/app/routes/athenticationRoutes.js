const express = require("express");
const athenticationController = require("../controller/athenticationController");
const router = express.Router();
const upload = require("../middleware/uploadImage");
const { isLogin } = require("../middleware/authCheck");

router.get("/", athenticationController.getHome);
router.get("/login", athenticationController.getLogin);
router.get("/dashboard", isLogin, athenticationController.getDashboard);
router.get("/registration", athenticationController.getRegistration);

router.post(
  "/registration",
  upload.single("profile_pic"),
  athenticationController.postRegistration
);
router.post("/login", athenticationController.login);
router.get("/logout", athenticationController.logout);

module.exports = router;
