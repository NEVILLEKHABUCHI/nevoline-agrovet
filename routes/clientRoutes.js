const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares/auth');

// Controllers
const shopController = require('../controllers/shopController');

// shop routes
router.get('/Shop', isAuthenticated, shopController.getShop);

module.exports = router;