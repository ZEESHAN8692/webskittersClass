const express = require("express");
const athenticationController = require("../controller/athenticationController");
const router = express.Router();
const upload = require("../middleware/uploadImage");

router.get("/", athenticationController.getHome);
router.get("/login", athenticationController.getLogin);
router.get("/dashboard", athenticationController.getDashboard);
router.get("/registration", athenticationController.getRegistration);

router.post(
  "/registration",
  upload.single("profile_pic"),
  athenticationController.postRegistration
);

module.exports = router;
