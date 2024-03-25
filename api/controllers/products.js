const express = require('express');
const router = express.Router();
const Products = require('../models/Product');

/* GET: /api/products => show all product */
router.get('/', async (req, res, next)=>{
    let products = await Products.find();

    return res.json(products).status(200);
});


module.exports = router;