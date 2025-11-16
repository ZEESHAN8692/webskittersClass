const unlinkctController = require("../controller/UnlinkImageController");
const uploadOptions=require('../helper/unlinkimage')
const router = require("express").Router();


router.post('/create/data',uploadOptions.single('image'), unlinkctController.createData);
router.get('/get/data',unlinkctController.allproduct);
router.get('/single/data/:id',unlinkctController.singleproduct);
router.post('/update/data/:id',uploadOptions.single('image'),unlinkctController.updateproduct);
router.delete('/delete/data/:id',unlinkctController.deleteProd);

module.exports = router;




