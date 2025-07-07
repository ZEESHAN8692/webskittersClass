const express = require('express');
const router = express.Router();
const Product = require('../model/Product');

const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure uploads folder exists
const uploadPath = path.join(__dirname, '../../public/uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });


// =========================================
// ✅ GET /get – Product List with Filter + Search
// =========================================
router.get('/get', async (req, res) => {
  const filter = {};

  // Search by product name
  if (req.query.searchBtn && req.query.search && req.query.search.trim() !== '') {
    filter.name = { $regex: req.query.search.trim(), $options: 'i' };
  }

  // Filters (brand, color, size, price)
  if (req.query.filterBtn || !req.query.searchBtn) {
    if (req.query.brand) {
      filter.brand = Array.isArray(req.query.brand) ? { $in: req.query.brand } : req.query.brand;
    }
    if (req.query.color) {
      filter.color = Array.isArray(req.query.color) ? { $in: req.query.color } : req.query.color;
    }
    if (req.query.size) {
      filter.size = Array.isArray(req.query.size) ? { $in: req.query.size } : req.query.size;
    }
    if (req.query.price) {
      filter.price = { $lte: parseFloat(req.query.price) };
    }
  }

  // Fetch products and filters
  const products = await Product.find(filter);
  const allBrands = await Product.distinct('brand');
  const allColors = await Product.distinct('color');
  const allSizes = await Product.distinct('size');

  res.render('index', {
    products,
    allBrands,
    allColors,
    allSizes,
    selected: req.query
  });
});


// =========================================
// ✅ GET /add – Show Add Product Form
// =========================================
router.get('/add', (req, res) => {
  res.render('addProduct');
});


// =========================================
// ✅ POST /add – Create Product with Image Upload
// =========================================
router.post('/add', upload.single('image'), async (req, res) => {
  const productData = req.body;

  if (req.file) {
    productData.image = '/uploads/' + req.file.filename;
  }

  await Product.create(productData);
  res.redirect('/get');
});


// =========================================
// ✅ POST /upload-image/:id – Upload/Update Image for Existing Product via Postman
// =========================================
router.post('/upload-image/:id', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No image uploaded' });

    const imagePath = '/uploads/' + req.file.filename;

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { image: imagePath },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({
      message: 'Image uploaded successfully',
      product: updatedProduct
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
