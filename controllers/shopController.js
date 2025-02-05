const Product = require('../models/product');

exports.getShop = async(req, res) => {
    try {
        // Query the database to fetch product details
        const productFeeds = await Product.find({productCategory: 'Feeds'});
        const productDrugs = await Product.find({productCategory: 'Drugs'});
        const productSeeds = await Product.find({productCategory: 'Seeds'});
        const productMachineries = await Product.find({productCategory: 'machineries'});
        // console.log(productFeeds);

        res.render('shop', {title: 'Nevoline Online Shop', Feeds: productFeeds, Drugs: productDrugs, Seeds: productSeeds, Machineries: productMachineries});
    } catch(err) {
        console.error('Error fetching details from the database', err);
    }
};
