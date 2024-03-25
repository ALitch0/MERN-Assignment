const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Products = require('./models/Product');

//create express app and set all content to json

const app = express();
app.use(bodyParser.json());

//database connection

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

mongoose.connect(process.env.CONNECTION_STRING, {})
.then((res)=>{console.log('Connected to MongoDB')})
.catch((err)=>{console.log(`DB connection Failed ${err}`)});

//enable CORS for React Client app before controllers
const cors = require('cors');
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: 'GET,POST,PUT,DELETE,HEAD,OPTIONS'
}))

//map routes
const productsController = require('./controllers/products')
app.use('/api/products', productsController);

app.get('/product/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Products.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});


//start server
app.listen(3001,()=>{
    console.log('Running in port 3001');
});
module.exports = app;