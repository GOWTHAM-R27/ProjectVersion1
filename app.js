const express = require('express');
const mysql=require("mysql");
const doenv = require("dotenv");
const path=require("path");
const hbs=require("hbs");

const app = express();

doenv.config({
    path:'./.env',
});

const db=mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASS,
    database:process.env.DATABASE,
});

const db2=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'login_crud',
});

db.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Mysql connection success');
    }
});
db2.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Mysql connection success');
    }
});

app.use(express.urlencoded({ extended: false }));


// console.log(__dirname);
const location=path.join(__dirname,"./public");
app.use(express.static(location));
app.set('view engine',"hbs");

app.use('/',require('./routes/pages'));
app.use('/auth',require('./routes/auth'));

app.listen(5000,() => {
    console.log("server started");
});