const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type:String, required: true },                
})

price: { type: Number, required: true },
category: {type: String },
});

const Product = mongoose.model('Product', productSchema); //turns the blueprint into a working tool 

module.exports = Product;

