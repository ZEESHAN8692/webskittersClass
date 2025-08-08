const multer = require('multer');
const path=require('path');
const fs=require('fs');


const FILE_TYPE={
    'image/png':'png',
    'image/jpg':'jpg',
    'image/jpeg':'jpeg',
    'image/gif':'gif'
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
       const isvaliddFile=FILE_TYPE[file.mimetype];
       const uploadError=new Error('File type not supported');
      
       if(isvaliddFile){
        cb(null, 'uploads')
       }else{
           cb(uploadError, 'uploads')
       }
        //cb(uploadError, 'uploads')
    },

    filename: function (req, file, cb) {
        const fileName=file.originalname.split(' ').join('-');
        const extension=FILE_TYPE[file.mimetype];
        cb(null, `${fileName}-${Date.now()}.${extension}`)
    }
})

const uploadImage=multer({storage:storage});


module.exports=uploadImage;



