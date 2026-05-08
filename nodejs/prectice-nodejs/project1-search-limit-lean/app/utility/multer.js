import multer from "multer";

const uploads = multer.diskStorage({
    destination: (req , file ,cb)=>{
        cb(null , "uploads")
    },
    filename: (req , file , cb)=>{
        cb(null , file.originalname)
    }
})