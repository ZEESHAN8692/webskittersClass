const joiValidateController = require("../controller/joiValidateController");
const { userValidate } = require("../middleware/joivalidate");
const { validatorSchema } = require("../model/joiModel");


const router = require("express").Router();


router.post('/create/data/joi',userValidate(validatorSchema), joiValidateController.createData);


module.exports = router;




