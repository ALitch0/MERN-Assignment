const express = require('express');
const router = express.Router();
const Products = require('../models/Product');

/* GET: /products/:id => show product by ID */
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        console.log("ID Parameter:", id);
        const product = await Products.findById(id);
        console.log("Retrieved Product:", product);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;
