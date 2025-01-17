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

// Add a new drug product
exports.addDrug = async(req, res) => {
    try {
        const {productName, productPrice, productQuantity, productCategory} = req.body;
        const productImage = req.file.buffer.toString('base64');

        // Validate form inputs
        if(!productImage || !productName || !productPrice || !productQuantity || !productCategory){
            // Send error message
            req.flash('error', 'Kindly fill in all the fields');
            return;
        }
        else {
            const newProduct = new Product({
                productImage,
                productName,
                productPrice,
                productQuantity,
                productCategory
            });
            await newProduct.save();
            req.flash('success', 'Product added successfully');
            res.redirect('/admin/Drugs');
        }
    } catch(error){
        console.error('Error while adding the product', error);
        req.flash('error', 'Error while adding the product');
        res.redirect('/admin/Drugs');
    }
}

// Edit a drug product
exports.editFeed = async(req, res) => {

    const {productName, productPrice, productQuantity, productCategory} = req.body;
    const updateData = {productName, productPrice, productQuantity, productCategory};

    if(req.file){
        updateData.productImage = req.file.buffer.toString('base64');
    }

    try {
        await Product.findByIdAndUpdate(req.params.id, updateData);

        // Send success message
        req.flash('success', 'Product updated successfully');
        res.redirect('/admin/Drugs');
    } catch(error){
        // Send error message
        req.flash('error', 'Failed to update the product');
        res.redirect('/admin/Drugs');
    }
}

// Delete drug product
exports.deleteFeed = async(req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);

        // Send success message
        req.flash('success', 'Product deleted successfully');
        res.redirect('/admin/Drugs');
    } catch(error) {
        // Send error message
        req.flash('error', 'Failed to udate the product');
        res.redirect('/admin/Drugs');
    }
}