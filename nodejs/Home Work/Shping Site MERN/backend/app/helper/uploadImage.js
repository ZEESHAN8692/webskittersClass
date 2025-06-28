const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "uploads/products",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const uploadImageMulter = multer({ storage: storage });
module.exports = uploadImageMulter;
