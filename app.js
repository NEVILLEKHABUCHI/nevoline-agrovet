const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');

// Import routes
const homeRoutes = require('./routes/homeRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const servicesRoutes = require('./routes/servicesRoutes');
const productsRoutes = require('./routes/productsRoutes');
const signupRoutes = require('./routes/signupRoutes');

// Set the view engine to EJS
app.set('view engine', 'ejs');


// Static files (CSS, images)
app.use(express.static('public'));

// Middleware for parsing request bodies
app.use(bodyParser.json()); //For parsing application/json
app.use(bodyParser.urlencoded({extended: true})); //for parsing application/x-www-form-urlencoded

// Setting up sessions and flash middleware
app.use(session({
    secret: 'Ni_Neville',
    resave: false,
    saveUninitialized: true
}))

// Using flash for flash messages
app.use(flash());

// Middleware to make flash messages available in templates
app.use((req,res,next) => {
    res.locals.successMessage = req.flash('success');
    res.locals.errorMessage = req.flash('error');
    next();
})



// Use routes
app.use(homeRoutes);
app.use(aboutRoutes);
app.use(servicesRoutes);
app.use(productsRoutes);
app.use('/',signupRoutes);


// Start the server
app.listen(3000,() => {
    console.log(`Server is running on http://localhost: {3000}`);
});
