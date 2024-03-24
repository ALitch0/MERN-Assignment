const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
        name:{type: String, required: true},
        price:{type: Number, required: true, default: 0},
        stars:{type: Number, required: true, default: 0},
        imageUrl:{type: String, required: true},
        tags:{type: Array, required:false}
});

module.exports = mongoose.model("Product", productSchema)
