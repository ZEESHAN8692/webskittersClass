const { cloudinary_js_config } = require('../config/cloudinary');
const ImageModel = require('../model/ImageModel');
const fs = require('fs');
const path = require('path');
const upload=require('../helper/uploadImage');

class ImageController {
    async uploadImage(req, res) {
       
       try {
    const result = await cloudinary_js_config.uploader.upload(req.file.path);

    const user = await ImageModel.create({
      name: req.body.name,
      imageUrl: result.secure_url,
      imagePublicId: result.public_id,
    });

    fs.unlinkSync(req.file.path); // Remove temp file
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
    }
}

module.exports = new ImageController();