const express = require('express');
const router = express.Router();
const signupController = require('../controllers/signupController');
const loginController = require('../controllers/loginController');

router.get('/signup', (req, res) => {
    res.render('sign_up',{title:'Nevoline-signup'});
});
router.post('/signup',signupController.getSignup);

router.get('/login', (req, res) => {
    res.render('login',{title:'Nevoline-login'});
});
router.post('/login',loginController.getLogin);

module.exports = router;

