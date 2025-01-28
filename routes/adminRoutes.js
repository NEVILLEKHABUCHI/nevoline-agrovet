const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares/auth');
const upload = require('../middlewares/upload'); //Middleware for handling uploads

// Controllers
const adminDashboardController = require('../controllers/adminDashboardController');
const adminFeedsController = require('../controllers/adminFeedsController');
const adminDrugsController = require('../controllers/adminDrugsController');
const adminMachineriesController = require('../controllers/adminMachineriesController');

// adminDashboard routes
router.get('/Dashboard', isAuthenticated, adminDashboardController.getAdminDashboard);

// adminFeeds routes
router.get('/Feeds', isAuthenticated, adminFeedsController.getAdminFeeds);
router.post('/addFeed', isAuthenticated, upload.single('productImage'), adminFeedsController.addFeed);
router.post('/feed/:id/edit', isAuthenticated, upload.single('productImage'), adminFeedsController.editFeed);
router.get('/feed/:id/delete', isAuthenticated, upload.single('productImage'), adminFeedsController.deleteFeed);

// adminDrugs routes
router.get('/Drugs', isAuthenticated, adminDrugsController.getAdminDrugs);
router.post('/addDrug', isAuthenticated, upload.single('productImage'), adminDrugsController.addDrug);
router.post('/drug/:id/edit', isAuthenticated, upload.single('productImage'), adminDrugsController.editDrug);
router.get('/drug/:id/delete', isAuthenticated, upload.single('productImage'), adminDrugsController.deleteDrug);

// adminMachineries routes
router.get('/Machineries', isAuthenticated, adminMachineriesController.getAdminMachineries);
router.post('/addMachinery',isAuthenticated, upload.single('productImage'), adminMachineriesController.addMachinery);
router.post('/machinery/:id/edit', isAuthenticated, upload.single('productImage'), adminMachineriesController.editMachinery);
router.get('/machinery/:id/delete', isAuthenticated, upload.single('productImage'), adminMachineriesController.deleteMachinery);

module.exports = router;