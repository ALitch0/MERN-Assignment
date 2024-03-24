const express = require("express");
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const logger = require('morgan')

dotenv.config();

const passport = require('passport');
const session = require('express-session');

const app = express();
//db connection
mongoose.connect(process.env.CONNECTION_STRING).then(()=>console.log("Database Connected successfully")).then((err)=>{
    err;
})

app.listen(9000,()=>{
    console.log('Listening in port 9000');
})
