const Product = require('../models/product');

// Render adminMachineries page and fetch products from mongoDB where productCategory = 'Machineries'
exports.getAdminMachineries = async(req, res) => {
    try {
        // Query the database to fetch product details
        const Machineries = await Product.find({productCategory: 'Machineries'});
        res.render('adminMachineries', {title: 'Admin Machineries', Machineries});
    }catch(error){
        console.error('Error fetching items from the database', error);
        req.flash('error', 'An error occurred while fetching items from the database');
    }
}

// Add a new machinery product
exports.addMachinery = async(req, res) => {
    try {
        const {productName, productPrice, productQuantity, productCategory} = req.body;
        const productImage = req.file.buffer.toString('base64');

        // Validate form inputs
        if(!productImage || !productName || !productPrice || !productQuantity || !productCategory){
            // Send error message
            req.flash('error', 'Kindly fill in all the fileds');
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
            res.redirect('/admin/Machineries');
        }
    }catch(error){
        console.error('Error while adding the product', error);
        req.flash('error', 'Error while adding the product');
        res.redirect('/admin/Machineries');
    }
}

// Edit a machinery product
exports.editMachinery = async(req, res) => {

    const {productName, productPrice, productQuantity, productCategory} = req.body;
    const updateData = {productName, productPrice, productQuantity, productCategory};

    if(req.file){
         updateData = {productName, productPrice, productQuantity, productCategory};
    }
    try {
        await Product.findByIdAndUpdate(req.params.id, updateData);

        // Send success message
        req.flash('success', 'Product updated successfully');
        res.redirect('/admin/Machineries');
    }catch(error){
        // Send error message
        req.flash('error', 'Failed to update the product');
        res.redirect('/admin/Machineries');
    }
}

// Delete machinery product
exports.deleteMachinery = async(req, res) => {
    try {
        await Product.findByIdAndDelete(reg.params.id);

        // Send success message
        req.flash('success', 'Product deleted successfully');
        res.redirect('/admin/Machineries');
    }catch(error) {
        // Send error message
        req.flash('error', 'Failed to delete the product ');
        res.redirect('/admin/Machineries');
    }
}