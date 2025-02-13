const mongoose = require('mongoose');

// cart schema for the cart collection in mongoDB
const cartSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    productImage: {type: String, required: true},
    productName: {type:String, required: true},
    productPrice: {type: Number, required: true}
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;