const express = require("express");
const ServiceController = require("../controller/service.controller");

const router = express.Router();

router.get("/service", ServiceController.servicePage);

module.exports = router;
