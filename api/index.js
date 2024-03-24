const express = require("express");
const app = express();
const dotenv = require('dotenv');
const productsData = require("./data/Products")
const mongoose = require("mongoose");

dotenv.config();

//db connection
mongoose.connect(process.env.CONNECTION_STRING).then(()=>console.log("Database Connected successfully")).then((err)=>{
    err;
})

app.listen(9000,()=>{
    console.log('Listening in port 9000');
})
//MGFT3n5RHLGCzoeD