const express = require("express");
// const { AuthCheck } = require("../middleware/AuthCheck");
const AuthApiController = require("../controller/AuthApiController");
const router = express.Router();
const RecordControllter = require("../controller/recordController");
const { AuthCheck, rollBaseWork } = require("../middleware/AuthCheck");

router.post("/user_register", AuthApiController.register);
router.post("/user_login", AuthApiController.login);

// Record Routes
router.get(
  "/record",
  AuthCheck,
  rollBaseWork("read"),
  RecordControllter.getRecord
);
router.get(
  "/single-record/:id",
  AuthCheck,
  rollBaseWork("read"),
  RecordControllter.getSingleRecord
);
router.post(
  "/add-record",
  AuthCheck,
  rollBaseWork("create"),
  RecordControllter.addRecord
);
router.put(
  "/edit-record/:id",
  AuthCheck,
  rollBaseWork("update"),
  RecordControllter.updateRecord
);
router.delete(
  "/delete-record/:id",
  AuthCheck,
  rollBaseWork("delete"),
  RecordControllter.deleteRecord
);

module.exports = router;
