const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getShop = async(req, res) => {
    try {
        // Query the database to fetch product details
        const productFeeds = await Product.find({productCategory: 'Feeds'});
        const productDrugs = await Product.find({productCategory: 'Drugs'});
        const productSeeds = await Product.find({productCategory: 'Seeds'});
        const productMachineries = await Product.find({productCategory: 'machineries'});
        // console.log(productFeeds);
        const user = req.session.user.user_id;
        console.log(user);

        res.render('shop', {title: 'Nevoline Online Shop', Feeds: productFeeds, Drugs: productDrugs, Seeds: productSeeds, Machineries: productMachineries, user});
    } catch(err) {
        console.error('Error fetching details from the database', err);
    }
};

exports.addToCart = async (req, res) => {
    try {
        const { user, productImage, productName, productPrice } = req.body;

        const cartItem = new Cart ({
            user_id: user,
            productImage,
            productName,
            productPrice
        });

        await cartItem.save();

        res.status(201).json({message: "Product added to cart successfully!"});
    } catch (error) {
        console.error("Error adding to cart: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}