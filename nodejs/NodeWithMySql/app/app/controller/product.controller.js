
const { Product } = require('../models');
const path = require('path');
const fs = require('fs');


class ProductController {
    async createProduct(req, res) {
        try {
            const { name, price, description } = req.body;
            if (!req.file) return res.status(400).json({ error: "No file uploaded" });
            const image = req.file ? req.file.path : null;
            const product = await Product.create({ name, price, description, image:image });

            return res.status(201).json({
                message: "Product created successfully",
                product
            });
        } catch (err) {
            return res.status(500).json({ message: "Server error" });
        }
    }

    async getProducts(req, res) {
        try {
            const products = await Product.findAll();
            res.status(200).send(products);
        } catch (err) {
            res.status(500).send({ message: "Server error" });
        }
    }

    async getProductById(req, res) {
        try {
            const { id } = req.params;
            const product = await Product.findByPk(id);
            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }
            return res.status(200).json(product);
        } catch (err) {
            return res.status(500).json({ message: "Server error" });
        }
    }

   async updateProduct(req, res) {
    try {
        //console.log(req.body);  // Check the body content
        //console.log(req.file);  // Check the uploaded file
        
        const fileId = req.params.id;
        const existingFile = await Product.findByPk(fileId);

        console.log('delete image',existingFile);  // Log the existing file details
        
        if (!existingFile) {
            return res.status(404).json({ error: "File not found" });
        }

        // Remove old file from uploads
        if (fs.existsSync(existingFile.image)) {
            fs.unlinkSync(existingFile.image);
        }

        // Check for name in the body
        if (!req.body.name || !req.body.price || !req.body.description) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        // Save new file
        const updated = await existingFile.update({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            image: req.file ? req.file.path : existingFile.image,  // Ensure image exists in req.file
        });

        if (!updated) return res.status(404).json({ error: "Product not found" });

        const updatedProduct = await Product.findByPk(req.params.id);
        return res.status(200).json(updatedProduct);

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}


    async deleteProduct(req, res) {
        try {
            const deleted = await Product.destroy({ where: { id: req.params.id } });
            if (!deleted) return res.status(404).json({ error: "Product not found" });
           return res.json({ message: "Product deleted" });
        } catch (err) {
           return res.status(500).json({ error: err.message });
        }

    }
}

module.exports = new ProductController();