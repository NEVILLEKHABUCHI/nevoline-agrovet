const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.get('/login', (req, res) => {
    res.render('login',{title:'Nevoline-login'});
});
router.post('/login',loginController.getLogin);

module.exports = router;