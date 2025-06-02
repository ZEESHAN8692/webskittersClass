const express = require("express");
const serviceController = require("../controller/service.controller");

const router = express.Router();

router.get("/service", serviceController.servicePage);

module.exports = router;
