const router = require('express').Router();
const Product = require('../models/Product');

/* GET: /api/products => show all products */
router.get('/', async(req, res, next)=>{
    try{
        let product = await Product;

        return res.json(product).status(200); // 200: ok
    }
    catch (err) {
        return res.json(err).status(400); //400: Bad Request
    }
})

module.exports = router;