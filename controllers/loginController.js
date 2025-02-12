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
        return res.status(400).redirect('/auth/login');
    }
    const query = `SELECT * FROM USERS WHERE USERNAME = ?`;
    db.query(query,[username], async(error, results) => {
        if(error){
            console.error('Cannot fetch details from the database!', error);
            req.flash('error','Internal server error!, Kindly try again.');
            return res.status(500).redirect('/auth/login');
        }
        if(results.length > 0){
            const user = results[0];

            // Compare the provided password with the hashed password in the database
            const match = await bcrypt.compare(password, user.PASSWORD);
            if(match){
                // Adding sessions
                req.session.user = {username: user.USERNAME};
                // Check if the user is an admin
                if(user.USERNAME === ADMIN_USERNAME){
                    // return res.status(200).redirect('/admin/Dashboard');
                    return res.render('loading', {redirectUrl: '/admin/Dashboard'});
                }else {
                    // return res.status(200).redirect('/client/Shop');
                    return res.render('loading', {redirectUrl: '/client/shop'})
                }
            }else{
                req.flash('error', 'Invalid username or password');
                return res.status(401).redirect('/auth/login');
            }
        }else{
            // User not found
            req.flash('error', 'Invalid username or password');
            res.status(404).redirect('/auth/login');;
        }
    })
    
}
