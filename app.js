const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const RedisStore = require('connect-redis').default;
const redis = require('redis');
const dotenv=require('dotenv');
dotenv.config({path:'./.env'});


// Import routes
const homeRoutes = require('./routes/homeRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const servicesRoutes = require('./routes/servicesRoutes');
const productsRoutes = require('./routes/productsRoutes');
const authenticationRoutes = require('./routes/authenticationRoutes');
const adminRoutes = require('./routes/adminRoutes');
const clientRoutes = require('./routes/clientRoutes');

const connectDB = require('./models/mongoDB');

// Set the view engine to EJS
app.set('view engine', 'ejs');


// Static files (CSS, images)
app.use(express.static('public'));

// Middleware for parsing request bodies
app.use(bodyParser.json()); //For parsing application/json
app.use(bodyParser.urlencoded({extended: true})); //for parsing application/x-www-form-urlencoded

// Setting up Redis client
const redisClient = redis.createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});
(async()=>{
    await redisClient.connect();
})();
redisClient.on('connect',() => {
    console.log('Redis Client connected successfully');
});
redisClient.on('error',(err) => {
    console.log('Could not connect to Redis Client');
})

// Setting up sessions and flash middleware
app.use(session({
    store: new RedisStore({client: redisClient}),
    secret: process.env.SESSIONS_PASSWORD,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, //Set to true if using HTTPS
        httpOnly: true, //Helps prevent XSS attacks
        maxAge: 2*60*60*1000
    }
}))

// Using flash for flash messages
app.use(flash());

// Middleware to make flash messages available in templates
app.use((req,res,next) => {
    res.locals.successMessage = req.flash('success');
    res.locals.errorMessage = req.flash('error');
    next();
})

// Connect to mongoDB
connectDB();


// Use routes

app.use(homeRoutes);
app.use(aboutRoutes);
app.use(servicesRoutes);
app.use(productsRoutes);
app.use('/auth', authenticationRoutes);
app.use('/admin', adminRoutes);
app.use('/client', clientRoutes);


// Start the server
app.listen(3000,() => {
    console.log(`Server is running on http://localhost: {3000}`);
});
