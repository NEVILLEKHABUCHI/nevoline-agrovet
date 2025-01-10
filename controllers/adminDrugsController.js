const Product = require('../models/product');


// Render adminFeeds page and fetch products from mongoDB where productCategpry = 'Drugs'
exports.getAdminDrugs = async(req, res) => {
    try {
        // Query the database to fetch product details
        const Drugs = await Product.find({productCategory: 'Drugs'});
        res.render('adminDrugs', {title: 'Admin Drugs', Drugs});
    }catch(error){
        console.error('Error fetching items from the database', error);
        req.flash('error', 'An error occurred while fetching items from the database');
    }
}