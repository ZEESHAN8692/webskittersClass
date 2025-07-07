const Product = require('../model/Product');

class ApiController {
    async create(req, res) {
        try {
            const { name, price, size, color, desc, brand } = req.body;
            const image = req.file ? req.file.filename : '';
            const newProduct = new Product({
                name,
                price,
                size: size.split(',').map(i => i.trim()),
                color: color.split(',').map(i => i.trim()),
                desc,
                brand,
                image
            });
            await newProduct.save();
            res.redirect('/get');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

 async getdata(req, res) {
  try {
    const matchFilter = {};

    // Brand
    if (req.query.brand) {
      const brands = Array.isArray(req.query.brand) ? req.query.brand : [req.query.brand];
      matchFilter.brand = { $in: brands };
    }

    // Color
    if (req.query.color) {
      const colors = Array.isArray(req.query.color) ? req.query.color : [req.query.color];
      matchFilter.color = { $in: colors };
    }

    // Size
    if (req.query.size) {
      const sizes = Array.isArray(req.query.size) ? req.query.size : [req.query.size];
      matchFilter.size = { $in: sizes };
    }

    // Price
    if (req.query.price) {
      matchFilter.price = { $lte: parseFloat(req.query.price) };
    }

    // Name Search
    if (req.query.search && req.query.search.trim() !== '') {
      matchFilter.name = { $regex: req.query.search.trim(), $options: 'i' };
    }

    // Step 1: Get matching products
    const matchedProducts = await Product.find(matchFilter);

    // Step 2: Get all products (excluding matches)
    const unmatchedProducts = await Product.find({
      _id: { $nin: matchedProducts.map(p => p._id) }
    });

    // Step 3: Merge both (matched first)
    const allProducts = [...matchedProducts, ...unmatchedProducts];

    // For filter UI
    const allBrands = await Product.distinct('brand');
    const allColors = await Product.distinct('color');
    const allSizes = await Product.distinct('size');

    res.render('index', {
  products: allProducts, // matched + unmatched
  allBrands,
  allColors,
  allSizes,
  selected: req.query,
  matchedIds: matchedProducts.map(p => p._id.toString()) 
});

  } catch (error) {
    res.status(500).send(error.message);
  }
}



    async edit(req, res) {
        try {
            const product = await Product.findById(req.params.id);
            res.render('edit', { product });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    async update(req, res) {
        try {
            const { name, price, size, color, desc, brand } = req.body;
            const updateData = {
                name,
                price,
                size: size.split(',').map(i => i.trim()),
                color: color.split(',').map(i => i.trim()),
                desc,
                brand
            };
            if (req.file) updateData.image = req.file.filename;
            await Product.findByIdAndUpdate(req.params.id, updateData);
            res.redirect('/get');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    async delete(req, res) {
        try {
            await Product.findByIdAndDelete(req.params.id);
            res.redirect('/get');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}




module.exports = new ApiController();
