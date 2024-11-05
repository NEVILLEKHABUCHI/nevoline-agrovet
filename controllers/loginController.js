const db=require('../models/mysql');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config({path:'./.env'});

const ADMIN_USERNAME = process.env.ADMIN_USERNAME;

exports.getLogin=(req,res) => {
    const {username, password} =req.body;

    if(!username || !password){
        // Send an error message
        req.flash('error',"Kindly fill in all the details");
        return res.status(400).redirect('/login');
    }
    const query = `SELECT * FROM USERS WHERE USERNAME = ?`;
    db.query(query,[username], async(error, results) => {
        if(error){
            console.error('Cannot fetch details from the database!', error);
            req.flash('error','Internal server error!, Kindly try again.');
            return res.status(500).redirect('/login');
        }
        if(results.length > 0){
            const user = results[0];

            // Compare the provided password with the hashed password in the database
            const match = await bcrypt.compare(password, user.PASSWORD);
            if(match){
                // Check if the user is an admin
                if(user.USERNAME === ADMIN_USERNAME){
                    return res.status(200).send('You have successfully logged in as an admin');
                }else {
                    return res.status(200).send('You have successfully logged in as a common user');
                }
            }else{
                // Incorrect password
                return res.status(401).send('Invalid email or password');
            }
        }else{
            // User not found
            res.status(404).send('User not found');
        }
    })
    
}