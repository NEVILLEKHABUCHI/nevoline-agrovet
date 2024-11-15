const mongoose = require('mongoose');

// Product schema for the products collection in mongoDB
const productSchema = new mongoose.Schema({
    productImage: {type: String, required: true},
    productName: {type: String, required: true},
    productPrice: {type: Number, required: true},
    productQuantity: {type: Number, required: true},
    productCategory: {type: String, required: true}
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;