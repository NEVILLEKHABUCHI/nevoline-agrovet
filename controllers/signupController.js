const db=require('../models/mysql');
const bcrypt = require('bcrypt');

exports.getSignup=(req,res)=>{

    const{username,phoneNumber,email,password}=req.body;

    // Checking whether the input fields are filled
     if(!username||!phoneNumber||!email||!password || phoneNumber.length!=10){
        // Send error message
        req.flash('error','Fill in all the fields');
        res.redirect('/signup');
        return;
    }

    const query1 = `SELECT * FROM USERS WHERE PHONE_NUMBER = ? `;
    const query2 = `INSERT INTO USERS (USERNAME,PHONE_NUMBER,EMAIL_ADDRESS,PASSWORD) VALUES(?,?,?,?)`;

    // Checking whether the user already exists
    db.query(query1,[phoneNumber],(err,results)=>{
        if(err){
            console.log('Database error')
            req.flash('error','An error occurred while registering!');
            return res.status(500).redirect('/signup');
        }
        if(results.length > 0){
            console.log('User already exists!');
            req.flash('error','User already exists,log in');
            return res.status(400).redirect('/signup');
        }

        // Hashing the password
        bcrypt.hash(password, 10, (err,hashedPassword) => {
            if(err){
                console.log('Password hashing failed');
                req.flash('error','Kindly try again!');
                return res.status(500).redirect('/signup');
            }
            // Insert user into the database
            db.query(query2, [username, phoneNumber, email, hashedPassword], (err, results) => {
                if(err) {
                    console.log('Error inserting user details to the database');
                    req.flash('error','Error registering user');
                    return res.status(500).redirect('/signup')
                }
                req.flash('success','User registered successfully')
                res.status(201).redirect('/signup');
            })
        })
    })
}