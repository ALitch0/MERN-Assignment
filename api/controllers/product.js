const express = require("express");
const productRoute = express.Router();
const Product = require("../models/Product");


productRoute.get("/", async (req, res)=>{
    const products = await Product.find({});
    res.json(products)
})