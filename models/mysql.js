const mysql=require('mysql');
const dotenv=require('dotenv');
dotenv.config({path:'./.env'});


//Setting up MySQL connection
const db=mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    // port: process.env.PORT
});
//Connect to MySQL
db.connect((error)=>{
    if(error){
        console.log('Error connecting to the database',error);
        return;
    }else{
        console.log('Mysql connected successfully');
    }
});


module.exports = db;