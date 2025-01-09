const Product = require('../models/product');


// Render adminFeeds page and fetch products from mongoDB where productCategory = 'Feeds'
exports.getAdminFeeds = async(req, res) => {
    try{
        // Query the database to fetch product details
        const Feeds = await Product.find({productCategory: 'Feeds'});
        res.render('adminFeeds', {title: 'Admin Feeds', Feeds});
    }catch(error){
        console.error('Error fetching items fromthe database', error);
        req.flash('error', 'An error occurred while displaying items in the database');
    }
}

// Add a new feed product
exports.addFeed = async(req, res) => {
    try {
        const {productName, productPrice, productQuantity, productCategory} = req.body;
        const productImage = req.file.buffer.toString('base64');

        // Validate form inputs
        if(!productImage || !productName || !productPrice || !productQuantity || !productCategory){
            // Send error message
            req.flash('error', 'Kindly fill in all the fields');
            return;
        } else {
            const newProduct = new Product({
                productImage,
                productName,
                productPrice,
                productQuantity,
                productCategory
            });
            await newProduct.save();
            req.flash('success', 'Product added successfully');
            res.redirect('/admin/Feeds');
        }
    } catch(error){
        console.error('Error while adding the product', err);
        req.flash('error', 'Error while adding the product');
        res.redirect('/admin/Feeds');
    }
}

// Edit a feed product
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
        res.redirect('/admin/Feeds');
    }catch(error){
        // Send error message
        req.flash('error', 'Failed to update the product');
        res.redirect('/admin/Feeds');
    }
}

// Delete feed product
exports.deleteFeed = async(req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);

        // Send success message
        req.flash('success', 'Product deleted Successfully');
        res.redirect('/admin/Feeds');
    }catch(error){
        // Send error message
        req.flash('error', 'Failed to update the product');
        res.redirect('/admin/Feeds');
    }
}