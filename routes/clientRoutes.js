const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares/auth');

// Controllers
const shopController = require('../controllers/shopController');


// shop routes
router.get('/Shop', isAuthenticated, shopController.getShop);
router.post('/addToCart', isAuthenticated, shopController.addToCart);
router.get('/cart/count', isAuthenticated, shopController.getCartCount);

module.exports = router;