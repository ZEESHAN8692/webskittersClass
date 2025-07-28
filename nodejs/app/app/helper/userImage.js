const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const uniquefilename = Date.now() + path.extname(file.originalname);
    cb(null, uniquefilename);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image file allowed"), false);
    }
  },
  limit: {
    fileSize: 1024 * 1024 * 2,
  },
});

module.exports = upload;
