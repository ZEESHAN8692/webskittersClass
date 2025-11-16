const CsvController = require("../controller/CsvController");
const express=require('express')
const router = require("express").Router();


//use multer for file upload
const multer = require('multer');
const path = require('path');
//define the static folder 
router.use(express.static('public'));

// use multer diskStorage for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/csvuploads'), function (error, success) {
            if (error) throw error;
        })
    },
    filename: function (req, file, cb) {
        // const name = Date.now() + '_' + file.originalname
        // cb(null, name, function (error1, success1) {
        //     if (error1) throw error1
        // })
        cb(null,file.originalname)
    }
});
//define uploaded storage path
const upload = multer({ storage: storage });


router.post('/add/csv/user',upload.single('file'), CsvController.AddCsvfile);

module.exports = router;




