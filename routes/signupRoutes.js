const express = require('express');
const router = express.Router();
const signupController = require('../controllers/signupController');

router.get('/signup', (req, res) => {
    res.render('sign_up',{title:'Nevoline-signup'});
});
router.post('/signup',signupController.getSignup);

module.exports = router;