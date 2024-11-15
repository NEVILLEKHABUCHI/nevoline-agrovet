const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './.env'});

const mongoURI = process.env.MONGODB_URI;
console.log(mongoURI);

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected successfully');
    }catch(err){
        console.error('MongoDB connection error: ', err);
        process.exit(1); //Exit the process with failure
    }
};

module.exports = connectDB;