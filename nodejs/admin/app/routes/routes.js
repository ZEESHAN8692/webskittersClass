const express = require("express");
const homeController = require("../controller/home.controller");
const blankController = require("../controller/blank.controller");
const buttonsController = require("../controller/buttons.controller");
const cardsController = require("../controller/cards.controller");
const chartsController = require("../controller/charts.controller");
const forgotPasswordController = require("../controller/forgot-password.controller");
const loginController = require("../controller/login.controller");
const registerController = require("../controller/register.controller");
const tablesController = require("../controller/tables.controller");
const {
  utilitiesAnimation,
} = require("../controller/utilities-animation.controller");
const utilitiesAnimationController = require("../controller/utilities-animation.controller");
const utilitiesBorderController = require("../controller/utilities-border.controller");
const utilitiesColorController = require("../controller/utilities-color.controller");
const utilitiesOtherController = require("../controller/utilities-other.controller");

const router = express.Router();

router.get("/", homeController.homePage);
router.get("/blank", blankController.blankPage);
router.get("/buttons", buttonsController.buttonsPage);
router.get("/cards", cardsController.cardsPage);
router.get("/charts", chartsController.chartsPage);
router.get("/forgot-password", forgotPasswordController.forgotPage);
router.get("/login", loginController.loginkPage);
router.get("/register", registerController.registerPage);
router.get("/tables", tablesController.tablesPage);
router.get(
  "/utilities-animation",
  utilitiesAnimationController.utilitiesAnimation
);
router.get("/utilities-border", utilitiesBorderController.utilitiesBorderPage);
router.get("/utilities-color", utilitiesColorController.utilitiesColorPage);
router.get("/utilities-other", utilitiesOtherController.utilitiesOtherPage);

module.exports = router;
