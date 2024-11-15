const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares/auth');
const upload = require('../middlewares/upload'); //Middleware for handling uploads

// Controllers
const adminDashboardController = require('../controllers/adminDashboardController');
const adminFeedsController = require('../controllers/adminFeedsController');

// adminDashboard routes
router.get('/Dashboard', isAuthenticated, adminDashboardController.getAdminDashboard);

// adminFeeds routes
router.get('/Feeds', isAuthenticated, adminFeedsController.getAdminFeeds);
router.post('/addFeed', isAuthenticated, upload.single('productImage'), adminFeedsController.addFeed);

module.exports = router;