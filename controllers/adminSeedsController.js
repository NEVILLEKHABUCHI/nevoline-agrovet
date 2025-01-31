const Product = require('../models/product');


// Render adminSeeds page and fetch products from mongoDB where productCategory = 'Seeds'
exports.getAdminSeeds = async(req, res) => {
    try{
        // Query the database to fetch product details
        const Seeds = await Product.find({productCategory: 'Seeds'});
        res.render('adminSeeds', {title: 'Admin Feeds', Seeds});
    }catch(error){
        console.error('Error fetching items from the database', error);
        req.flash('error', 'An error occurred while fetching items from the database');
    }
}

// Add a new seed product
exports.addSeed = async(req, res) => {
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
            res.redirect('/admin/Seeds');
        }
    } catch(error){
        console.error('Error while adding the product', error);
        req.flash('error', 'Error while adding the product');
        res.redirect('/admin/Seeds');
    }
}

// Edit a seed product
exports.editSeed = async(req, res) => {

    const {productName, productPrice, productQuantity, productCategory} = req.body;
    const updateData = {productName, productPrice, productQuantity, productCategory};

    if(req.file){
        updateData.productImage = req.file.buffer.toString('base64');
    }
    

    try {
        await Product.findByIdAndUpdate(req.params.id, updateData);

        // Send success message
        req.flash('success', 'Product updated successfully');
        res.redirect('/admin/Seeds');
    }catch(error){
        // Send error message
        req.flash('error', 'Failed to update the product');
        res.redirect('/admin/Seeds');
    }
}

// Delete seed product
exports.deleteSeed = async(req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);

        // Send success message
        req.flash('success', 'Product deleted Successfully');
        res.redirect('/admin/Seeds');
    }catch(error){
        // Send error message
        req.flash('error', 'Failed to delete the product');
        res.redirect('/admin/Seeds');
    }
}